import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppProvider } from './context/appContext.js';
import 'react-toastify/dist/ReactToastify.css';
import { FormProvider } from './context/formContext';
import SignIn  from './pages/SignIn';
import  SignUp  from './pages/SignUp';
import Explore from './pages/Explore';
import { PrivateExploreRoute } from './components/PivateExploreRoute';
import Profile from "./pages/ProfileAccount.jsx";
import MyListingsPage from "./pages/ProfileMyListings.jsx";
import AddListing from "./pages/ProfileAddForm.jsx";
import EditListing from "./pages/ProfileEditForm.jsx";
import ListingDetails from "./pages/ListingDetails.jsx";
import ListingAlbum from "./pages/ListingAlbum.jsx";
import { ListingProvider } from "./context/listingContext.js";
import AppAppBar from "./views/AppAppBar.jsx";
import AppFooter from "./views/AppFooter.jsx";
import ListingDining from "./pages/ListingDining.jsx";
import ListingAttractions from "./pages/ListingAttractions.jsx";
import CheckOutForm from "./pages/ListingCheckout.jsx";
import ListingContactLandlord from "./pages/ListingContactLandlord.jsx";
import ListingAddReview from "./pages/ListingAddReview.jsx";
import ProfileMessages from "./pages/ProfileMessages.jsx";
import ProfileUpcomingTrips from "./pages/ProfileDashboard.jsx";


function App() {
  return (
    <>
    <AppProvider>
      <FormProvider>
        <ListingProvider>
            <Router>
            <AppAppBar/>
              <Routes>
                  <Route path="/" element={<PrivateExploreRoute/>} />
                  <Route path="/signin" element={<SignIn/>}/>
                  <Route path="/signup" element={<SignUp/>}/>
                  <Route path="/explore" element={<Explore/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/dashboard" element={<ProfileUpcomingTrips/>}/>
                  <Route path="/mylistings" element={<MyListingsPage/>}/>
                  <Route path="/addlisting" element={<AddListing/>}/>
                  <Route path='/editlisting/:listingid' element={<EditListing/>} />
                  <Route path='/listings/:listingid' element={<ListingDetails/>} />
                  <Route path='/listings/:listingid/images' element={<ListingAlbum/>} />
                  <Route path='/listings/:listingid/food' element={<ListingDining/>} /> 
                  <Route path='/listings/:listingid/attractions' element={<ListingAttractions/>} /> 
                  <Route path='/listings/:listingid/rent' element={<CheckOutForm/>}/>
                  <Route path="/listings/:listingid/landlord" element={<ListingContactLandlord/>}/>
                  <Route path="/listings/:listingid/reviews" element={<ListingAddReview/>} />
                  <Route path="/listings/:listingid/customers" element={<ProfileMessages/>} />
              </Routes>
              <AppFooter/>
            </Router>
          </ListingProvider>
        <ToastContainer/>
      </FormProvider>
    </AppProvider>
    </>
  );
}

export default App;
