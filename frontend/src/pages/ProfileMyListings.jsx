import { Box } from "@mui/system";
import { useContext, useEffect} from "react";
import {Loading} from "../components/Loading";
import { MyListings } from "../components/Profile/MyListings";
import SidebarProfile from "../components/Profile/SidebarProfile";
import Typography from "../components/Typography";
import { AppContext } from "../context/appContext";
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
        background: "url(http://127.0.0.1:8888/eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash2.jpg) no-repeat",
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
        {myListings.length>0 ? <MyListings listings={myListings}/> :     
        <div style={{width:"100%",textAlign:"center"}}>
          <Typography>
          Currently, there are no listings avalabile
          </Typography>
      </div>}
    </Box>
    </div>
</>);
}

export default withRoot(MyListingsPage);