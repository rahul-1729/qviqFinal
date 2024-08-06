import React from 'react'

const Resources = ({profile}) => {

  const handleLink = (link) => {
    console.log(link);
    if (link) {
      if (link.startsWith('https')) {
        window.open(link, '_blank');
      } else {
        navigate(link);
      }
    }
  };


  return (
    <div className="max-w-[1118px] w-[calc(100%-40px)] mb-[20px] px-8 flex flex-col bg-[#FFFFFF] rounded-[20px]">
          <div className="flex flex-col gap-7 mt-[10px] mb-[30px]">
            <div className="flex gap-7 items-center h-[55px]">
              <h3 className="text-[#121212] font-extrabold text-[28px] flex flex-col items-center relative hover:cursor-pointer">
                Resources
               
              </h3>
            </div>
            <div className="w-full">
              <div className="flex justify-center ">
                <div
                  className=" relative flex  justify-center items-center h-[64px] px-[18px] border border-[#121212] rounded-full hover:cursor-pointer"
                  style={{
                    boxShadow:
                      "rgba(3, 60, 206, 0.04) 0px 8px 16px 1px, rgba(3, 60, 206, 0.08) 0px 0px 8px 1px",
                  }} onClick={() => handleLink(profile && profile.pdf)}
                >
                  <div className="flex  justify-between w-full">
                    <div className="flex items-center gap-2">
                      <span className="text-[#000000] text-xl">
                        <img
                          className="w-8 h-8 rounded-sm"
                          src="/assets/pdfimg.png"
                          alt=""
                        />
                      </span>
                      <p
                        className="text-[#121212] font-medium
                        text-base"
                      >
                        Resume.pdf
                      </p>
                    </div>
                    
        
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
  )
}

export default Resources
