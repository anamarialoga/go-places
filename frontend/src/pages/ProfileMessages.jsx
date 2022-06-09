import { Card, CardContent, CardHeader, Divider, IconButton, List, ListItem, ListItemAvatar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Typography from "../components/Typography";
import { AppContext } from "../context/appContext";
import {ListingContext} from '../context/listingContext'
import withRoot from "../withRoot";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SidebarListing from "../components/Listing/SidebarListing";
import { useParams } from "react-router-dom";
import MyMessages from "./MyMessages";

const ProfileMessages =()=>{

    const {user} =useContext(AppContext)
    const { allConv, getConv, getConvWithUser, convWithUser} = useContext(AppContext)
    const {listing, fetchListing} = useContext(ListingContext)
    const {listingid} =useParams();

    useEffect(()=>{
        fetchListing(listingid)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const [filteredList, setFilteredList] = useState([])
    useEffect(()=>{
        getConv(listingid);
        if(allConv.length>1){
            console.log('There are more conversations');
            for(let i=0; i<allConv.length-1; i++){
                    if(!(allConv[i+1]?.to_from.includes(allConv[i]?.to_from[1]) &&  allConv[i+1]?.to_from.includes(allConv[i]?.to_from[0])))
                    {
                        setFilteredList((prevState)=>[...prevState, allConv[i+1]])
                    }
                }
        }
        else{
            console.log('There is only one conversation', allConv.length)
            setFilteredList((prevState)=>[...allConv])
            console.log(filteredList)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    
    const [conv, setConv] = useState({});
    const [buttonClicked, setButtonClicked] = useState(false)
    
    const [landLord, setlandLord] = useState({
        id: "",
        name:""
    })


    useEffect(()=>{
        if(buttonClicked ===true){
            if(conv.to!==user.id)
                setlandLord({id: conv.to,name:conv.toUser})
            else setlandLord({id: conv.from,name:conv.fromUser})
            

            getConvWithUser(conv.listingConv, landLord.id)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [buttonClicked])

    console.log(convWithUser)


    return <>
    <div style={{ 
        height: "80vh",        
        background: "url(http://127.0.0.1:8888/eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash2.jpg) no-repeat",
        backgroundSize: "cover"
        }}>
    <SidebarListing listing={listing} listingid={listingid}/>
    <div style={{paddingTop:"2%"}}>
    <div style={{display:"flex"}}>
    <div style={{marginLeft:"18%",width:"20%", marginRight:""}}>
    <Card >
        <CardHeader 
        title={"Chats"} style={{ color:"#ffffff", backgroundColor:"#ff3366"}}/>
        <Divider/>
        <CardContent>
        <List style={{height:"62vh", overflow:"auto"}}>
        {filteredList.map((conver,  i) =>  
                 <ListItem key={i} divider={i<filteredList.length -1}>
                            <div style={{display:"inline-flex", justifyContent:"space-between", width:"100%"}}>
                            <div>
                            <ListItemAvatar>
                                
                            </ListItemAvatar>
                            <Typography variant={"subtitle1"} color={"#ff3366"} style={{fontWeight:"600", fontSize:"1.2rem"}}>
                                            {user.id !== conver.from ? conver.fromUser: conver.toUser} 
                            </Typography>
                            </div>
                             <IconButton 
                                 onClick={()=> {setConv(conver); setButtonClicked(!buttonClicked)}}
                            >
                                <ChatOutlinedIcon/>
                            </IconButton>
                            
                        </div>
                   </ListItem>
            )}
        </List>
        </CardContent>
    </Card>
    </div>
        {
            buttonClicked &&
            <div style={{width:"50%",marginLeft:"-10%", marginTop:"-2%"}}>
            <MyMessages 
            landlordName={landLord.name} 
            landlordId={landLord.id} 
            listingId={listingid}
            chat={convWithUser} 
            />
            </div>
        }
    </div>
    </div>
    </div>
    </>
}

export default withRoot(ProfileMessages);