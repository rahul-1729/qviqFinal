import React from "react";
import Image from "./RevolveImage";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goto = () => {
    let profileId = localStorage.getItem("profileId");
    profileId = profileId.substring(1, profileId.length - 1);
    console.log(profileId);
    navigate(`/profile/${profileId}`);
};

const logoutUser = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("profileId");
  window.location.reload();
}

  
  const handleSubmit = (param) => {
    console.log(param);

    if (param === "Login") {
      navigate("/sign-in");
    } else {
      navigate("/sign-up");
    }
  };

  return (
  <div className="bg-gradient-to-r from-gray-200 via-indigo-300 to-indigo-100 h-screen flex flex-col items-center justify-center">

        <div class="absolute top-0 left-0 w-full">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#5A63FF" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,181.3C672,160,768,128,864,138.7C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            <path fill="#FFFFFF" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,186.7C672,192,768,192,864,186.7C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            <path fill="#4B0082" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,245.3C672,256,768,224,864,213.3C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            <path fill="#FA63FF" fill-opacity="0.5" d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,181.3C672,160,768,128,864,138.7C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          
          </svg>
          

        </div>  
        <div className="mb-9 flex items-center justify-center ">
          <Image />
        </div> 

          {localStorage.getItem("authToken") && (
            <div className= "flex flex-col items-center mt-0 space-y-5">
                <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-7 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-transparent dark:focus:ring-blue-800  hover:border-white hover:border-2 hover:text-indigo-700 "
                onClick={() => {goto();}}
              >
                My Profile
              </button>
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-transparent dark:focus:ring-blue-800 hover:border-white hover:border-2 hover:text-indigo-700 "
                onClick={() => {logoutUser();}}
              >
                Logout
              </button>
            </div>
          )}

          {!localStorage.getItem("authToken") && (
            <div className="flex flex-col items-center mt-0 space-y-5 ">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-transparent dark:focus:ring-blue-800  hover:border-white hover:border-2 hover:text-blue-600 "
                onClick={() => { handleSubmit("Register"); }}
              >
                Register
              </button>
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-transparent dark:focus:ring-blue-800 hover:border-white hover:border-2 hover:text-blue-600 "
                onClick={() => { handleSubmit("Login"); }}
              >
                Login
              </button>
            </div>
          )}

          
</div>

  );
};

export default Home;
