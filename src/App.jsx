// CODE ALONG
import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";

import LoginPage from "./pages/LoginPage";
import InfoPage from "./pages/InfoPage";
import Resources from "./pages/Resources";
import ProfilePage from "./pages/ProfilePage";
import SchoolPage from "./pages/SchoolPage";
import Map from "./pages/Map";
import ProfileUpdate from './pages/ProfileUpdate'

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
        <Route path="/info" element={<InfoPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/schools" element={<SchoolPage />} />
        <Route path="/map" element={<Map /> } /> 

        <Route element={<LoggedIn />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path='/profile/update' element={<ProfileUpdate />} />
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
