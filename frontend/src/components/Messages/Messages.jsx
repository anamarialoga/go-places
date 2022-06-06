import React, { useContext } from "react";
import { MessageLeft, MessageRight } from "./Message";
import { Paper } from "@mui/material";
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { AppContext } from "../../context/appContext";


export default function Messages(props) {

    const {sendMessage, message, onChangeMessage} = useContext(AppContext)

    console.log(props.landlordId)
    console.log(message)
    const handleSubmit = (e) =>{
        e.preventDefault();
        sendMessage(props.landlordId, message)
    }

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
        width: "vw",
        height: "80vh",
        maxWidth: "50vw",
        maxHeight: "700px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative"
    }} >
        <Paper id="style-1" style={{
             width: "calc( 100% - 20px )",
             margin: 10,
             overflowY: "scroll",
             height: "calc( 100% - 80px )"
        }}>
          <MessageLeft
            message="あめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName=""
            avatarDisp={true}
          />
          <MessageLeft
            message="xxxxxhttps://yahoo.co.jp xxxxxxxxxあめんぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさいすせそ"
            timestamp="MM/DD 00:00"
            photoURL=""
            displayName="テスト"
            avatarDisp={false}
          />
          <MessageRight
            message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            avatarDisp={true}
          />
          <MessageRight
            message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            avatarDisp={false}
          />
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
            <Button variant="contained" onClick={handleSubmit} color="secondary" >
                <SendIcon color={"success"}/>
            </Button>
            </form>
        </>
      </Paper>
    </div>
  );
}