import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logo = ({ profile , isFacebook , isInstagram , isLinkedIn}) => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const data = [
    {
      img: "/assets/insta.svg",
      link: profile && profile.instagram,
      show: isInstagram
    },
    {
      img: "/assets/linkedin.svg",
      link: profile && profile.linkedin,
      show: isLinkedIn
    },
    {
      img: "/assets/fb.svg",
      link: profile && profile.facebook,
      show: isFacebook
    },
  ];

  const handleClick = () => {
    setShowAll(!showAll);
  };

  const handleLink = (link) => {
    console.log(link);
    if (link) {
      if (link.startsWith("https")) {
        window.open(link, "_blank");
      } else {
        navigate(link);
      }
    }
  };

  return (
    <div className="mb-[50px] mt-[20px] max-w-[720px] w-[calc(100%-40px)] flex justify-center relative bg-[#FFF] backdrop-blur-[18px] rounded-[24px]">
      <div className="flex flex-wrap justify-center  sm:px-3 sm:py-8 px-5 py-10 gap-6 max-w-[600px]">
        {showAll === false
          ? data.slice(0, 10).map((d, index) =>
              d.show ? (
                <div
                  key={index}
                  className="sm:w-[88px] sm:h-[88px] w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full hover:cursor-pointer hover:bg-[#FFFFFF]"
                  onClick={() => handleLink(d.link)}
                >
                  <div className="sm:w-12 sm:h-12 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center hover:bg-indigo-900">
                    <img
                      src={d.img}
                      className="sm:h-9 sm:w-9 w-5 h-5 object-contain"
                      alt=""
                    />
                  </div>
                </div>
              ) : null
            )
          : data.map((d, index) =>
              d.show ? (
                <div
                  key={index}
                  className="sm:w-[88px] sm:h-[88px] w-8 h-8 flex items-center justify-center bg-[#121212] rounded-full hover:cursor-pointer hover:bg-[#FFFFFF]"
                  onClick={() => handleLink(d.link)}
                >
                  <div className="sm:w-12 sm:h-12 w-6 h-6 bg-[#121212] rounded-full flex items-center justify-center">
                    <img
                      src={d.img}
                      className="sm:h-9 sm:w-9 w-5 h-5 object-contain"
                      alt=""
                    />
                  </div>
                </div>
              ) : null
            )}
      </div>

      {data.length>10 &&
        <div
        className="flex justify-center items-center rounded-full hover:cursor-pointer active:scale-95 duration-150 w-12 h-12 absolute -bottom-8 text-2xl bg-[#121212] text-white"
        onClick={handleClick}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 9l6 6 6-6"
          ></path>
        </svg>
      </div>
      }
    </div>
  );
};

export default Logo;
