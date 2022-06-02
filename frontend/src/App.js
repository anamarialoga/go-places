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
                  <Route path="/mylistings" element={<MyListingsPage/>}/>
                  <Route path="/addlisting" element={<AddListing/>}/>
                  <Route path='/editlisting/:listingid' element={<EditListing/>} />
                  <Route path='/listings/:listingid' element={<ListingDetails/>} />
                  <Route path='/listings/:listingid/images' element={<ListingAlbum/>} />
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
