import { Box } from "@mui/system";
import { useContext, useEffect} from "react";
import {Loading} from "../components/Loading";
import { MyListings } from "../components/Profile/MyListings";
import SidebarProfile from "../components/Profile/SidebarProfile";
import { AppContext } from "../context/appContext";
import AppAppBar from "../views/AppAppBar";
import withRoot from "../withRoot";

const MyListingsPage = () => {
const {fetchMyListings, myListings, loadingList} = useContext(AppContext);


useEffect(()=>{
    fetchMyListings();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

return loadingList? <Loading/> :  (
<>
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