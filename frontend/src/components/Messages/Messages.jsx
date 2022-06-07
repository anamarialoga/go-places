import React, { useContext, useEffect, useRef, useState } from "react";
import { MessageLeft, MessageRight } from "./Message";
import { Paper } from "@mui/material";
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import axios from "axios";
import { toast } from "react-toastify";
import withRoot from "../../withRoot";
import { AppContext } from "../../context/appContext";



function Messages(props) {
    const {user} = useContext(AppContext)
    const [message, setMessage] = useState('');
    const onChangeMessage = (e)=>{
        setMessage(e.target.value);
    }

    const [allConv, setAllConv] = useState([]);
    const getConv = async (listingid) => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        };
        try{
            const {data} =  await axios.get(`http://localhost:1179/api/chat/${listingid}`,
             config)
             setAllConv(data);
         } catch (error) {
             toast.error(error.response?.data?.message);
       }
    }

    useEffect(()=>{
        getConv(props.listingId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.listingId])


    const sendMesssage = async(to, message, listingid) =>{
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        };
        try{
           const {data} =  await axios.post(`http://localhost:1179/api/chat/${listingid}`, {
                to,
                message,
            },
            config)
            console.log(data);
            toast.success('Message sent with success')
        } catch (error) {
            toast.error(error.response?.data?.message);
      }
    }

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
      }, []);

  return (
    <div 
    style={{
        background: "url(http://127.0.0.1:8888/eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash2.jpg)  no-repeat",
        backgroundSize: "cover",
        paddingLeft:"14%",
        textAlign: 'center',  
        width: "100vw",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
      <Paper 
      style={{ 
        paddingTop:"1rem",
        paddingLeft:"1rem",
        width: "60vw",
        height: "700px",
        maxWidth: "60vw",
        maxHeight: "700px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative"
    }} >
        <Paper  style={{
             width: "calc( 100% - 40px )",
             margin: 10,
             overflowX:"hidden",
             overflowY: "scroll",
             height: "calc( 100% - 80px )"
        }}>
        { allConv.map((message) => {
            if(message.from === user.id) 
           return   <MessageRight
                    key={message._id}
                    message={message.message}
                    timestamp={message.createdAt}
                    displayName={`${user.firstName} ${user.lastName}`}
                    avatarDisp={true}
                    />
           else return <MessageLeft
                        key={message._id}
                        message={message.message}
                        timestamp={message.createdAt}
                        displayName={`${props.landlord.firstName} ${props.landlord?.lastName}`}
                        avatarDisp={true}
                    />
        })}
        </Paper>
        <>
            <form 
            style={{display: "flex",
            justifyContent: "center",
            width: "95%", 
            marginBottom:"1.1rem", marginTop:"0.5rem"}} 
             noValidate 
             autoComplete="off">
            <TextField
                value={message}
                id="message"
                onChange={onChangeMessage}
                label="Write something ..."
                style={ { width: "100%" , borderRadius:"0rem"}}
            />
            <Button variant="contained" onClick={()=>sendMesssage(props.listing?.userId, message, props.listingId)} color="secondary" >
                <SendIcon color={"success"}/>
            </Button>
            </form>
        </>
      </Paper>
    </div>
  );
}

export default withRoot(Messages)