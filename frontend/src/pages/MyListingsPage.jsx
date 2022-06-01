import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { MyListings } from "../components/My Listings/MyListings";
import SidebarProfile from "../components/SidebarProfile";
import { AppContext } from "../context/appContext";
import AppAppBar from "../views/AppAppBar";
import withRoot from "../withRoot";

const MyListingsPage = () => {
const {fetchMyListings, myListings} = useContext(AppContext);
const [loading, setLoading]=useState(true);

useEffect(()=>{
    fetchMyListings();
    setLoading(false);
},[fetchMyListings]);

return  (
<>
    <AppAppBar/>
    <div style={{
        height: "100vh",        
        background: "url(http://127.0.0.1:8888/eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash.jpg) no-repeat",
        backgroundSize: "cover"}}
    >
    <SidebarProfile/>
    <Box
      component="main"
      sx={{      
        flexGrow: 1,
        py: 7,
      }}
    >
        <MyListings listings={myListings}/>
    </Box>
    </div>
</>);
}

export default withRoot(MyListingsPage);