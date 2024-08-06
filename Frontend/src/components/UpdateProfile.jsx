import React, { useState } from "react";
import { Provider } from "react-redux";
import toast from "react-hot-toast";
import store from "../redux/store";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

console.log(import.meta.env.VITE_APP_SERVER_BASEURL);

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [instagram, setInstagram] = useState("");
  const [role, setRole] = useState("");
  const [company , setCompany] = useState("");
  const [description , setDescription] = useState("");
  const [facebook , setFacebook] = useState("");
  const [linkedin , setLinkedin] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const { profileId } = useParams();

  const handleRole = (event) => {
    setRole(event.target.value);
  };
  const handleInstagram = (event) => {
    setInstagram(event.target.value);
  };
  const handleCompany = (event) => {
    setCompany(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleFacebook = (event) => {
    setFacebook(event.target.value);
  };
  const handleLinkedin = (event) => {
    setLinkedin(event.target.value);
  };

  const handleSubmit = async () => {
    const formData = {
      instagram,
      role,
      company,
      description,
      facebook,
      linkedin
    };
    try {
      setIsLoading(true);
      const url = `${
        import.meta.env.VITE_APP_SERVER_BASEURL
      }/user/${profileId}`;
      const response = await axios.put(url, formData);

      console.log(response.data);

      toast.success("Profile updated successfully.");
      navigate(`/profile/${profileId}`);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.");
    }
    setCompany("");
    setDescription("");
    setFacebook("");
    setLinkedin("");
    setInstagram("");
    setRole("");
  };

  return (
    <div className="relative bg-gradient-to-t from-gray-200 via-indigo-300 to-indigo-500 h-screen flex items-center justify-center">
       <div class="absolute top-0 left-0 w-full">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#5A63FF" fill-opacity="0.5" d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,181.3C672,160,768,128,864,138.7C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            <path fill="#FFFFFF" fill-opacity="0.3" d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,186.7C672,192,768,192,864,186.7C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            <path fill="#4B0082" fill-opacity="0.5" d="M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,245.3C672,256,768,224,864,213.3C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            <path fill="#FA63FF" fill-opacity="0.5" d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,181.3C672,160,768,128,864,138.7C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          
          </svg>
          

        </div>  
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xs z-10 ">

        <h2 className="text-2xl font-bold text-center text-gray-600">
          Profile Updation
        </h2>

        <div className="max-w-sm mx-auto mt-5">
          <div className="mb-2">
            <label
              htmlFor="instagram"
              className="block mb-0 text-lg font-medium text-gray-500"
            >
              Instagram
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded mt-2 "
              placeholder="insta_id"
              required
              onChange={handleInstagram}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-0 text-lg font-medium text-gray-500"
            >
              LinkedIn
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded mt-2 "
              placeholder="linkedin_id"
              required
              onChange={handleLinkedin}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-0 text-lg font-medium text-gray-500"
            >
              Facebook
            </label>
            <input
              type="text"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-2 "
              placeholder="xyz@gmail.com"
              required
              onChange={handleFacebook}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-0 text-lg font-medium text-gray-500"
            >
              Role
            </label>
            <input
              type="text"
              id="role"
              className="w-full p-2 border border-gray-300 rounded mt-2 "
              placeholder="Software Developer"
              required
              onChange={handleRole}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-0 text-lg font-medium text-gray-500"
            >
              Company
            </label>
            <input
              type="text"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-2 "
              placeholder="Qviq"
              required
              onChange={handleCompany}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-0 text-lg font-medium text-gray-500"
            >
              Description
            </label>
            <input
              type="text"
              id="email"
              placeholder="exprerince of 10 years..."
              className="w-full p-2 border border-gray-300 rounded mt-2 "
              required
              onChange={handleDescription}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
            onClick={handleSubmit}
          >
            {isLoading ? (
              <div className="flex-center gap-2">
                Loading..
              </div>
            ) : (
              "Update"
            )}
          </button>
        </div>
        <p className="text-black mt-5 text-red-600">
          * all the fields are not mandatory.
        </p>
      </div>
    </div>
  );
};

const UpdateProfilee = () => (
  <Provider store={store}>
    <UpdateProfile />
  </Provider>
);

export default UpdateProfilee;
