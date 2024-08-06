import React from 'react'

const Link = () => {

    const data = [{
        img: "/assets/insta.svg",
        desc: "Link title goes here"
    },
    {
        img: "/assets/linkedin.svg",
        desc: "Link title goes here"
    },
    {
        img: "/assets/fb.svg",
        desc: "Link title goes here"
    },

]
  return (
    <div className="flex flex-col justify-start items-center gap-[16px] max-w-[720px] w-[calc(100%-40px)] px-[20px] py-[25px] bg-white rounded-[20px] mb-[20px]">
          {
            data.map((d)=>(
                <div className="min-h-[56px] w-[100%] sm:min-w-[320px] min-w-[180px]  p-[12px] flex flex-row justify-start items-center gap-[12px] border-[1px] border-white rounded-[100px] object-cover cursor-pointer bg-blue-700 border-white text-white hover:bg-blue-400 hover:border-blue-800 ">
            <img
              src={`${d.img}`}
              className="w-[32px] h-[32px] object-contain border-none rounded-full"
              alt=""
            />
            <p className="text-[18px] font-[500px]">{d.desc}</p>
          </div>
            ))
          }
         
    </div>
  )
}

export default Link
