import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppProvider } from './context/appContext.js';
import 'react-toastify/dist/ReactToastify.css';

import { FormProvider } from './context/formContext';
import SignIn  from './pages/SignIn';
import  SignUp  from './pages/SignUp';
import Explore from './pages/Explore';
import { PrivateExploreRoute } from './components/PivateExploreRoute';
import Profile from "./pages/Profile.jsx";
import MyListingsPage from "./pages/MyListingsPage.jsx";
import AddListingForm from "./pages/AddListingForm.jsx";


function App() {
  return (
    <>
    <AppProvider>
      <FormProvider>
      <Router>
        <Routes>
            <Route path="/" element={<PrivateExploreRoute/>} />
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/mylistings" element={<MyListingsPage/>}/>
            <Route path="/addlisting" element={<AddListingForm/>}/>
        </Routes>
      </Router>
      <ToastContainer/>
      </FormProvider>
    </AppProvider>
    </>
  );
}

export default App;
