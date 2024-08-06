
import React, { useEffect } from "react";

const RevolveImage = () => {
  const constrain = 250;

  useEffect(() => {
    const mouseOverContainer = document.getElementById("ex1");
    const ex1Layer = document.getElementById("ex1-layer");

    const transforms = (x, y, el) => {
      const box = el.getBoundingClientRect();
      const calcX = (y - box.y - box.height / 2) / constrain;
      const calcY = -(x - box.x - box.width / 2) / constrain;
      
      console.log(calcX);
      console.log(calcY);

      return (
        "perspective(100px) " +
        "   rotateX(" +
        calcX +
        "deg) " +
        "   rotateY(" +
        calcY +
        "deg) " +
        "   translateZ(0)"
      );
    };

    const transformElement = (el, xyEl) => {
      el.style.transform = transforms(...xyEl);
    };

    const handleMouseMove = (e) => {
      const xy = [e.clientX, e.clientY];
      console.log(xy);
      const position = xy.concat([ex1Layer]);
      console.log(`pos : ${position}`)

      window.requestAnimationFrame(() => {
        transformElement(ex1Layer, position);
      });
    };

    mouseOverContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      mouseOverContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="ex1"
      style={{
        width: "300px",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
         
        
      }}
    >  
      <div 
        id="ex1-layer"
        style={{
          width: "300px",
          height: "500px",
          borderRadius: "30px",
          position: "absolute",
          backgroundColor: "rgba(255, 255, 255, 0.2)", 
          backdropFilter: "blur(5px)", 
          border: "1px solid rgba(255, 255, 255, 0.2)", 
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",  
          overflow: "hidden",  
          display: "flex",
          flexDirection: "column",
          alignItems: "center",  
          justifyContent: "flex-start",  
          padding: "30px", 
          
        }}
      >
         <h1 style={{ color: "white", fontWeight: "bold",fontSize: "40px", marginTop: "10px", fontFamily:"sans-serif", textAlign:"center"}}>Qviq</h1>
       <h1 style={{ color: "white", fontSize: "20px", marginTop: "10px", fontFamily:"sans-serif", textAlign:"center"}}>Create your proffesional online presence in a flash.</h1>
       <p style={{ color: "indigo", fontSize: "15px", marginTop: "10px", fontFamily:"sans-serif", textAlign:"left"}}>Standing out from the crowd and making a lasting impression with your unique digital presence involves several key strategies. First, focus on personal branding by defining your unique value proposition. Identify what sets you apart, whether it's your skills, experiences, or approach to your field, and develop a clear statement that encapsulates this value.</p>
       
    </div>
    <img
        src="./assets/qviq.webp"  
        alt="qviq Logo"
        style={{
          width: "100%", 
          height: "auto",  
          borderRadius: "15px", 
          marginBottom: "10px",  
        }}
      />
    </div>
  );
};

export default RevolveImage;
