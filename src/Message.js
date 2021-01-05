import React,{forwardRef} from 'react';
import "./Message.css";
import {  Card, CardContent, Typography} from '@material-ui/core'
const Message=forwardRef(({test,username},ref )=>{
    const isuser=test.username===username;
    return (
        <div ref={ref} className={`message ${ isuser && 'user'}`}>
            <Card className={isuser ? "user" : "message"}>
                <CardContent>
                  <Typography color="white" variant="h5" component="h2" >
                      {!isuser && `${test.username  || 'Unknown user' } : `}{test.message}
                  </Typography>
                </CardContent>
            </Card>
        </div>
    )
});

export default Message;
