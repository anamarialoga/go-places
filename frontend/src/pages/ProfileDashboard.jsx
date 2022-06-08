import { useContext, useEffect } from "react"
import SidebarProfile from "../components/Profile/SidebarProfile"
import withRoot from "../withRoot"
import { AppContext } from "../context/appContext";
import { Bookings } from "../components/Profile/Bookings";
import { ManageCustomers } from "../components/Profile/ManageCustomers";
import { Grid } from "@mui/material";
import { TotalProfit } from "../components/Profile/totalProfit";
import { Budget } from "../components/Profile/totalCustomers";
import { Container } from "@mui/system";
import { ListingsCard } from "../components/Profile/totalListings";

function ProfileUpcomingTrips() {
    const {user, getUserBookings, userBookings, fetchMyListings, myListings, GetBookingsIamLandlord, myRentals} = useContext(AppContext);

    useEffect(()=>{
      getUserBookings();
      fetchMyListings();
      GetBookingsIamLandlord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(userBookings)
    console.log(myListings)
    console.log(myRentals)

    let customersCountry = [];
    let customersBusiness =[]; 

    let profit=0;
    myRentals.forEach((rental)=>{
      customersCountry.push(rental?.billingData.country);
      customersBusiness.push(rental?.billingData.business);
      profit = profit + rental?.price
    })
   console.log(customersCountry, customersBusiness);

   function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
  }
  const customersCountryCopy = [...customersCountry]; //creating copy
  const countriesSet = mode(customersCountryCopy);

    function countOccurrences(arr,n, x)
    {
        let res = 0;
        for (let i=0; i<n; i++)
        {
            if (x === arr[i])
                res++;
        }
        return res;
    }
  const nrOcc = countOccurrences(customersCountry, customersCountry.length, countriesSet)
  const percentage = (nrOcc * 100 / (customersCountry.length)).toFixed(1)


  let nrBus = 0;
  customersBusiness.forEach((customer)=>{
    if(customer === true)
      nrBus++;
  })

  const percentage2 = ((nrBus * 100 / customersBusiness.length)).toFixed(1)

  

    return (
      <>
      <div style={{height: "130vh",        
            background: "url(http://127.0.0.1:8888/eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash2.jpg)  no-repeat",
            backgroundSize: "cover"}}>
      <SidebarProfile user={user} />
      <Container maxWidth={false} style={{marginLeft:"20%", paddingTop:"4%", paddingBottom: "5%"}}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <ListingsCard listings={myListings.length>0? myListings: []}/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget percentage={percentage} mostCountry={countriesSet} percentage2={percentage2} />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit profit={profit ? profit : 0} sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Bookings bookings={userBookings.length>0 ? userBookings : []} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <ManageCustomers manageRentals={myRentals}/>
          </Grid>
        </Grid>
      </Container>
      </div>
      </>
    )
}
  

export default withRoot(ProfileUpcomingTrips)
  