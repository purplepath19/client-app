// import HomePage from "./components/HomePage";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import SignUp from "../src/pages/SignUp";


// function App() {

 

//   return (
//     <BrowserRouter>
//     <Navbar />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/signup" element={<SignUp />} /> 
      
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// CODE ALONG
import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";

import LoginPage from "./pages/LoginPage";

function App() {
  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to="/login" />;
  };

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <div className="App">
    
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route element={<LoggedIn />}>



        </Route>

        <Route element={<NotLoggedIn />}>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginPage />} />

        </Route>

      </Routes>

    </div>
  );
}

export default App;
