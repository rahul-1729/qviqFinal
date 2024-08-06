import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Provider } from "react-redux";
import toast from "react-hot-toast";
import { useGoogleLogin } from "@react-oauth/google";
import { useLoginMutation } from "../../redux/api/userAPI";
import store from "../../redux/store";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SigninForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signin] = useLoginMutation();
  const [loading, setLoading] = useState(false);
  const [profileID, setProfileID] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      email,
      password,
    };
    console.log(data);
    
    await loginHandler({ data, type: "form" });
    setEmail("");
    setPassword("");
  };

  const accessUser = (tokenResponse) => {
    const accessToken = tokenResponse.access_token;
    fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        loginHandler({ data, type: "googlePopup" });
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  };

  const loginHandler = async ({ data, type }) => {
    let email = "";
    let password = "";
    if (type === "googlePopup") {
      email = data.email;
      password = data.email;
    } else {
      email = data.email;
      password = data.password;
      console.log(data);
    }

    try {
      const res = await signin({
        email,
        password,
      });

      if (res.data.success) {
        const url = `${import.meta.env.VITE_APP_SERVER_BASEURL}/user/userDetails/userbyEmail`;
        const response = await axios.get(url, { params: { email } });
        toast.success("Login successful!");
        localStorage.setItem("authToken", JSON.stringify(res.data.token));
        navigate(`/profile/${response.data.response._id}`);
        
      }
    } catch (error) {
      toast.error("Sign In Failed");
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => accessUser(tokenResponse),
  });


  if(loading){
    return(
      <h1>Loading....</h1>
    )
  }
  return (
    <div  className="bg-gradient-to-t from-gray-200 via-indigo-300 to-indigo-500 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xs">

        <h2 className="text-2xl font-bold text-center mb-5 text-gray-700">Login</h2>
       
        <div class="max-w-sm mx-auto">
          <div class="mb-3">
            <label
              for="email"
              class="block mb-0 text-md font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="xyz@gmail.com"
              value={email}
              required
              onChange={handleEmail}
            />
          </div>
          <div class="mb-3">
            <label
              for="password"
              class="block mb-0 text-md font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
              value={password}
              onChange={handlePassword}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded mt-4 transition-colors duration-300"

            onClick={handleSubmit}
          >
            Sign in
          </button>

          <div className="text-center mt-4 text-gray-600">OR</div>

           <div className="w-full bg-white text-white rounded mt-4">
              <button
                onClick={() => {
                  login();
                }}
                className="flex justify-center items-center w-full bg-white hover:bg-gray-200 hover:border-gray-600 hover:text-gray-800 text-gray-600 px-4 py-2 rounded-md mt-2 transition-colors duration-300 border border-gray-200 border-2"
              >
                <FcGoogle className="mr-2" />
                <p>Sign in with Google</p>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

const FirebaseWrapper = () => (
  <Provider store={store}>
    <SigninForm />
  </Provider>
);

export default FirebaseWrapper;
