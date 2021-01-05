import React, { useEffect, useState } from 'react'
import "./App.css"
import { Button, Input,FormControl ,InputLabel, IconButton} from '@material-ui/core'
import Message from './Message';
import  db from "./firebase";
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const[input , setinput] =useState('');
  const[messages,setmessages]=useState([]);
  const[username,setusername]=useState('');
   useEffect(
     ()=>
     {
         db.collection("messages")
          .orderBy('timestamp','desc')
         .onSnapshot(
           snapshot=>{
             setmessages(snapshot.docs.map(
               doc=>({
                 id:doc.id,
                 message:doc.data()})
             ))
           }
         )
     },[]
   )
  useEffect(()=>
  {
    setusername(prompt('enter your name'));    
  },[])
  const setmessage=(event)=>
  {
      event.preventDefault();
      db.collection("messages").add({
        message:input,
        username:username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      setinput('');
  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=99&h=99"
       alt="facebook"/>
       <h1>Welcome {username}</h1>
      <form className="App_form">
      <FormControl className="formcontrol" >
      <Input className="app_input" placeholder="Enter a message..." value={input}  onChange={
        (event)=>{
            setinput(event.target.value);
        }
      }/>
      <IconButton className="app_icon" disabled={!input} type="submit" onClick={setmessage}>
        <SendIcon/>
      </IconButton>
      </FormControl>
      </form>
      <FlipMove>
      {
      messages.map(
        ({id,message})=>(
          <Message key={id} username={username} test={message}/>
        )
      )}
      </FlipMove>
    </div>
  )
}

export default App;
