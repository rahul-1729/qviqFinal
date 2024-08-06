import React, { useEffect, useRef } from "react";

const Reviews = () => {
  const data = [
    {
      title: "RK",
      full: "Rahul Kumar",
      desc: `IIIT Ranchi, located in the vibrant city of Ranchi, is one of India's premier institutes for information technology. Known for its cutting-edge research and quality education, IIIT Ranchi provides a robust platform for students to excel in the fields of computer science and engineering. The institute fosters an environment of innovation and growth, making it a hub for future tech leaders.`,
      star: 5,
      
    },
    {
      title: "VK",
      full: "Varun Kumar",
      desc: `IIIT Ranchi, located in the vibrant city of Ranchi, is one of India's premier institutes for information technology. Known for its cutting-edge research and quality education, IIIT Ranchi provides a robust platform for students to excel in the fields of computer science and engineering. The institute fosters an environment of innovation and growth, making it a hub for future tech leaders.`,
      star: 5,
      
    },
    {
      title: "AG",
      full: "Anuj Gupta",
      desc: `IIIT Ranchi, located in the vibrant city of Ranchi, is one of India's premier institutes for information technology. Known for its cutting-edge research and quality education, IIIT Ranchi provides a robust platform for students to excel in the fields of computer science and engineering. The institute fosters an environment of innovation and growth, making it a hub for future tech leaders.`,
      star: 3,

    },
    {
      title: "PT",
      full: "Preeti Tripathi",
      desc: `IIIT Ranchi, located in the vibrant city of Ranchi, is one of India's premier institutes for information technology. Known for its cutting-edge research and quality education, IIIT Ranchi provides a robust platform for students to excel in the fields of computer science and engineering. The institute fosters an environment of innovation and growth, making it a hub for future tech leaders.`,
      star: 5,

    },
    {
      title: "AG",
      full: "Anubhav Gupta",
      desc: `IIIT Ranchi, located in the vibrant city of Ranchi, is one of India's premier institutes for information technology. Known for its cutting-edge research and quality education, IIIT Ranchi provides a robust platform for students to excel in the fields of computer science and engineering. The institute fosters an environment of innovation and growth, making it a hub for future tech leaders.`,
      star: 5,
      
    }
  ];

  const box = useRef(null);

  useEffect(() => {
    if (box.current) {
      console.log(box.current.clientWidth);
    }
  }, []);

  const handleNext = () => {
    if (box.current) {
      let width = box.current.clientWidth;
      let newPosition = box.current.scrollLeft + width;
      box.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (box.current) {
      let width = box.current.clientWidth;
      let newPosition = box.current.scrollLeft - width;
      box.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          stroke="currentColor"
          fill={i < rating ? "#FFD700" : "none"}
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17ZM12.0008 14.6564L14.8175 16.3769L14.0517 13.1664L16.5583 11.0192L13.2683 10.7554L12.0008 7.70792L10.7333 10.7554L7.44326 11.0192L9.94991 13.1664L9.18408 16.3769L12.0008 14.6564Z"></path>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-[1118px] w-[calc(100%-40px)] mb-[20px] px-8 flex flex-col bg-[#FFFFFF] rounded-[20px]">
      <div className="flex flex-col gap-7 mt-[10px] my-[30px]">
        <div className="flex gap-7 items-center h-[55px]">
          <h3 className="text-[#121212] font-extrabold text-[28px] flex flex-col items-center relative hover:cursor-pointer">
            Reviews
          </h3>
        </div>
        <div className="w-full">
          <div className="relative">
            <div className="overflow-scroll custom-scrollbar" ref={box}>
              <div className="flex flex-row gap-5">
                {data.map((d, index) => (
                  <div
                    key={index}
                    className="text-[#121212] border border-[#121212] mb-1 shadow-[4px_4px_0px_0px_#121212] Plus-Jakarta-Sans-font-div sm:min-w-[381px] min-w-[240px] max-w-[381px] min-h-full max-h-full flex flex-col gap-4 p-6 rounded-[24px]"
                  >
                    <div className="flex items-start gap-3">
                      <h1>{d.title}</h1>
                      <div className="flex flex-col h-9 relative top-[-2px]">
                        <p className="text-base font-bold">{d.full}</p>
                        <div className="text-sm flex gap-[2px]">
                          {renderStars(d.star)}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="absolute flex justify-center items-center p-1 rounded-full bg-white text-xl sm:w-[64px] sm:h-[64px] h-[40px] w-[40px] border-2 border-black text-[28px] right-0 top-1/2 transform -translate-y-1/2 shadow-[2px_2px_0px_0px_#121212]"
              onClick={handleNext}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414L12.707 10l-4.414 4.293a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              className="absolute flex justify-center items-center p-1 rounded-full bg-white text-xl sm:w-[64px] sm:h-[64px] h-[40px] w-[40px] border-2 border-black text-[28px] left-0 top-1/2 transform -translate-y-1/2 shadow-[2px_2px_0px_0px_#121212]"
              onClick={handlePrev}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 14.707a1 1 0 01-1.414 0L6.879 10l4.414-4.293a1 1 0 011.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-10 w-full h-[60px]">
          <button
            className="
  font-bold 
  text-sm 
  py-[13px] 
  px-[24px] 
  w-fit 
  flex 
  justify-center 
  items-center 
  gap-2 
  duration-200 
  bg-white
  text-black
  hover:shadow-none 
  border 
  border-black
  mb-1 
  Plus-Jakarta-Sans-font-div 
  hover:cursor-pointer 
  rounded-full 
  mx-auto
  sm:min-w-[320px]
  min-w-[180px]
  shadow-[4px_4px_0px_0px_#121212] 
  active:scale-95
"
          >
            Write a review
            <span class="text-base">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.93912 14.0327C6.7072 14.6562 6.51032 15.233 6.33421 15.8154C7.29345 15.1188 8.43544 14.6766 9.75193 14.512C12.2652 14.1979 14.4976 12.5384 15.6279 10.4535L14.1721 8.99878L15.5848 7.58407C15.9185 7.24993 16.2521 6.91603 16.5858 6.58237C17.0151 6.15301 17.5 5.35838 18.0129 4.21479C12.4197 5.08172 8.99484 8.50636 6.93912 14.0327ZM17 8.99728L18 9.99658C17 12.9966 14 15.9966 10 16.4966C7.33146 16.8301 5.66421 18.6635 4.99824 21.9966H3C4 15.9966 6 1.99658 21 1.99658C20.0009 4.99392 19.0018 6.99303 18.0027 7.99391C17.6662 8.33038 17.3331 8.66372 17 8.99728Z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
