import { useContext, useEffect } from "react";
import SidebarProfile from "../components/Profile/SidebarProfile";
import { AppContext } from "../context/appContext";

const ProfileMessages =()=>{

    const {convos, getAllConvos} = useContext(AppContext)
    useEffect(()=>{
        getAllConvos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log(convos);

    

    return <>
    <SidebarProfile/>
    </>
}

export default ProfileMessages;