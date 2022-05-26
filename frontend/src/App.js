import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppProvider } from './context/appContext.js';
import 'react-toastify/dist/ReactToastify.css';

import { FormProvider } from './context/formContext';
import SignIn  from './pages/SignIn';
import  SignUp  from './pages/SignUp';


function App() {
  return (
    <>
    <AppProvider>
      <FormProvider>
      <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
      <ToastContainer/>
      </FormProvider>
    </AppProvider>
    </>
  );
}

export default App;
