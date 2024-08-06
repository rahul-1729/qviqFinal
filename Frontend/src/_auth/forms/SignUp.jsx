import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Provider } from "react-redux";
import toast from "react-hot-toast";
import { useGoogleLogin } from "@react-oauth/google";
import { useRegisterMutation } from "../../redux/api/userAPI";
import store from "../../redux/store";
import { useNavigate } from "react-router-dom";
 /******************************* */
import { useFileHandler} from '6pp';
 /******************************* */
const SignupForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [signin] = useRegisterMutation();
/************************** */
  const avatar = useFileHandler("single");
  /******************************* */

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePhoto = (event) => {
    avatar.changeHandler(event)
    setPhoto(event.target.files[0]);
    
  }
  const handlePdf = (event) => setPdf(event.target.files[0]);
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleRole = (event) => {
    setRole(event.target.value);
  };
  const handleCompany = (event) => {
    setCompany(event.target.value);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("company", company);
    formData.append("photo", photo);
    formData.append("pdf" , pdf)
    console.log(...formData);
    setEmail("");
    setName("");
    setPassword("");
    setCompany("");
    setRole("");
    setPhoto(null);
    await loginHandler({ data: formData, type: "form" });
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
    let formData = data;
    if (type === "googlePopup") {
      formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.email);
      formData.append("role", "Role");
      formData.append("company", "Company");
    }

    try {
      const res = await signin(formData); 
      console.log(res);
      if ("data" in res) {
        toast.success("Successful");
        navigate("/");
      } else {
        const error = res.error;
        const message = error.data;
        toast.error(message.message);
      }
    } catch (error) {
      toast.error("Sign In Failed");
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => accessUser(tokenResponse),
  });
  
  
  return (
    <div className="bg-gradient-to-t from-gray-200 via-indigo-300 to-indigo-500 h-screen flex items-center justify-center">
      
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xs">
          

        <div className="max-w-sm mx-auto">
          
          <div className="relative w-32 h-32 mx-auto mb-7">
              <img
                  src={avatar.preview }
                  className="w-full h-full rounded-full object-cover border-4 border-gray-400 bg-gray-300"
 
              />
              <label className="absolute bottom-0 right-0 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer" htmlFor="photo">
                  <input
                      type="file"
                      id="photo"
                      onChange={handlePhoto}
                                          
                      className="hidden"
                  />
                  <svg className="w-6 h-6 text-white bg-gray-600 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
              </label>
              <h1 className="text-center text-gray-500">Profile Picture</h1>
          </div>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block mb-0 text-lg font-medium text-gray-500"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
             
              className="w-full p-2 border border-gray-300 rounded mt-2 "
              placeholder="XYZ"
              value={name}
              required
              onChange={handleName}
            />
          </div>
          <div className="mb-2">
            <label
              for="email"
              className="block mb-0 text-lg font-medium text-gray-500"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-2 "
              placeholder="xyz@gmail.com"
              required
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="mb-2">
            <label
              for="role"
              className="block mb-0 text-lg font-medium text-gray-500"
            >
              Role
            </label>
            <input
              type="text"
              id="text"
              className="w-full p-2 border border-gray-300 rounded mt-2 "
              placeholder="Software Developer"
              value={role}
              required
              onChange={handleRole}
            />
          </div>
          <div className="mb-2">
            <label
              for="company"
              className="block mb-0 text-lg font-medium text-gray-500"
            >
              Company
            </label>
            <input
              type="name"
              id="name"
              className="w-full p-2 border border-gray-300 rounded mt-2 "
              placeholder="Qviq"
              value={company}
              required
              onChange={handleCompany}
            />
          </div>
          <div className="mb-0">
            <label
              for="password"
              className="block mb-0 text-lg font-medium text-gray-500"
            >
            Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded mt-2 "
              required
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="photo"
              className="block mb-0 text-lg font-medium text-gray-500"
            >
              Upload Resume
            </label>
            <input
              type="file"
              id="photo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handlePdf}
            />
          </div>
        
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded mt-4 transition-colors duration-300"
            onClick={handleSubmit}
          >
            Sign up
          </button>
          <div className="text-center mt-4 text-gray-600">OR</div>
          <div className="w-full bg-white text-white rounded mt-2">
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
    <SignupForm />
  </Provider>
);

export default FirebaseWrapper;
