import React from 'react';
 
import { useNavigate} from "react-router-dom";
const Profilecard = ({ profile }) => {
  const navigate = useNavigate();
  const profileId = profile ? profile._id : "" ;
  let data;
  if (localStorage.getItem("authToken")) {
    data = JSON.parse(localStorage.getItem("profileId"));
  }

  const handleSubmit = (param) => {
    if (param === "Edit") {
      navigate(`/profile/update/${profileId}`);
    }
  };

  
  return (
    <div className="max-w-[720px] w-[calc(100%-40px)]  min-h-[387px] bg-[#FFF] rounded-[20px] relative">
           <div class="absolute top-0 left-0 w-full">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#5A63FF" fill-opacity="0.5" d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,181.3C672,160,768,128,864,138.7C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            <path fill="yellow" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,186.7C672,192,768,192,864,186.7C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            <path fill="#4B0082" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,245.3C672,256,768,224,864,213.3C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            <path fill="#FA63FF" fill-opacity="0.5" d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,181.3C672,160,768,128,864,138.7C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          
          </svg>
          

        </div > 
          <div className="absolute inset-x-0 flex justify-center top-[-70px] z-10">
            <img
              src={profile && profile.photo}
              className="w-[140px] h-[140px] object-cover rounded-[140px] border-4 border-gray-500 bg-white"
              
            />
          </div>
          <div className="w-full pt-[110px] px-[60px] flex flex-col text-center items-center justify-center">
            <p className="mb-[5px] text-[#121212] font-bold text-[28px] text-gray-600 mt-5">
              {profile && profile.name}
            </p>
            <p className="mb-[5px] text-xl text-[#121212] text-gray-500 font-bold">
            {profile && profile.role}
            </p>
            <p className="mb-[5px] text-xl text-indigo-400 font-bold">{profile && profile.company}</p>
            <p className="mb-[30px] text-[#121212] text-lg">
            {profile && profile.description}
            </p>
            {data == profileId && (
              <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-transparent dark:focus:ring-blue-800 hover:border-yellow hover:border-2 hover:text-blue-600 "
              onClick={() => { handleSubmit("Edit"); }}
            >
              Edit Profile
            </button>
              
            )}
            <div>
              <div className="mt-[30px]">

              <button
                  className="
                        font-bold 
                        h-20
                        px-10 
                        w-fit 
                        flex 
                        justify-center 
                        items-center 
                        gap-2 
                        duration-200 
                        bg-white
                        text-gray-600
                        hover:shadow-none 
                        border 
                        border-black
                        mb-6
                        Plus-Jakarta-Sans-font-div 
                        hover:cursor-pointer 
                        rounded-full
                        mx-auto
                        shadow-[4px_4px_0px_0px_#121212] 
                        active:scale-95
                      "
                >
                <img src="/assets/phone.png" alt="" />
                Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Profilecard
