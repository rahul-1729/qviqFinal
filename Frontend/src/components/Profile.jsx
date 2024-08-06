import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Logo from "./Logo";
import Reviews from "./Reviews";
import Link from "./Link";
import Resources from "./Resources";
import Profilecard from "./Profilecard";
import QRCode from "react-qr-code";


const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [productData , setProductData] = useState([]);
  const { profileId } = useParams();
  const navigate = useNavigate();


  const [isResources, setIsResources] = useState(false);
  const [isReviews, setIsReviews] = useState(false);
  const [isLinks, setIsLinks] = useState(false);
 
  const [isFacebook, setIsFacebook] = useState(false);  
  const [isInstagram, setIsInstagram] = useState(false);  
  const [isLinkedIn, setIsLinkedIn] = useState(false);


  const getProfileData = async () => {
    try {
      setLoading(true);
      const url = `${
        import.meta.env.VITE_APP_SERVER_BASEURL
      }/user/${profileId}`;
      const response = await axios.get(url);
      if (response.data.success) {
        toast.success("User found successfully");
        setProfile(response.data.user[0]);
       
        setIsResources(response.data.user[0].resources);
        setIsReviews(response.data.user[0].reviews);
        setIsLinks(response.data.user[0].links);
    
        setIsFacebook(response.data.user[0].showfb);
        setIsInstagram(response.data.user[0].showinsta);
        setIsLinkedIn(response.data.user[0].showlinkedin);
        console.log(response.data.user[0]);
        if (!localStorage.getItem("profileId")) {
          localStorage.setItem("profileId", JSON.stringify(profileId));
        }
        console.log(`${import.meta.env.VITE_APP_BASEURL}/profile/${profileId}`);
      } else {
        toast.error("No user found");
        navigate("/");
      }
    } catch (error) {
      toast.error("Internal error occurred");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const getProductData= async () => {
    try {
      setLoading(true);
      const url = ` ${import.meta.env.VITE_APP_SERVER_BASEURL}/product/all`;
      const response = await axios.get(url);
      console.log(response.data.response)
      if (response.data.success) {
        toast.success("User found successfully");
        console.log("Product found");
        setProductData(response.data.response);
        console.log(productData);
      } else {
        toast.error("No Products found");
      }
    } catch (error) {
      toast.error("Internal error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileData();
    getProductData();
  }, []);

  const profileuid = profile ? profile._id : "";
  let data;
  if (localStorage.getItem("authToken")) {
    data = JSON.parse(localStorage.getItem("profileId"));
  }

   

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center font-bold text-[70px]">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[100vh] bg-gradient-to-t from-gray-200 via-violet-300 to-indigo-500 overflow-y-scroll">
      <div className="w-full  flex flex-col items-center justify-center mt-[130px]">
        <Profilecard profile={profile} />
        <div className="mt-10 py-10 px-10 border-2 border-blueGray-200 text-center">
          <div className="flex flex-wrap justify-center">
            <div style={{ background: "white", padding: "16px" }}>
              <QRCode
                value={`${
                  import.meta.env.VITE_APP_BASEURL
                }/profile/${profileId}`}
              />
            </div>
          </div>
        </div>
        <Logo profile={profile} isFacebook={isFacebook} isInstagram={isInstagram} isLinkedIn={isLinkedIn} />
        {isLinks && <Link />}
       
        {isResources && <Resources profile={profile} />}
      
        {isReviews && <Reviews />}

       
         
       
         
      </div>
    </div>
  );
};

export default Profile;
