import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import Signinform from "./_auth/forms/SignIn";
import Signupform from "./_auth/forms/SignUp";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./components/Home";
import ProfileCard from "./components/Profile";
import UpdateProfile from "./components/UpdateProfile";  

const clientId = "871130119876-raaa5082cqug9fhf2e5tc8gur9cjdd8i.apps.googleusercontent.com";

const ProtectedRoute = ({ children }) => {
  const authToken = localStorage.getItem("authToken");
  return authToken ? children : <Navigate to="/sign-in" />;
};

const App = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:profileId" element={<ProfileCard />} />
            <Route
              path="/profile/update/:profileId"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />
            <Route element={<AuthLayout />}>
              <Route path="/sign-in" element={<Signinform />} />
              <Route path="/sign-up" element={<Signupform />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
