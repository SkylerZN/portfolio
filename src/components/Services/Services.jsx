import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}></span>
        <span></span>
        
        <spane>
        Name: Md Zulquar Nain
          <br />
          Born: 4 April 2000
          <br/>
          District: Araria 
          <br/>
          State : Bihar 
          <br/>
          Occupation: Student(Pursuing B.Tech at IIT Jammu)
          <br/>
          Email: Zulquar560@gmail.com 
          <br/>
          Phone: +(91)9682173268 
          <br/> 
          Freelance: Available
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
         
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"C++, DSA,Html, Css, JavaScript, ReactJs, MySQL"}
          />
       </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
        <Card
        emoji={HeartEmoji}
        heading={"Design"}
        detail={"Figma, Adobe Photoshop, Adobe Illustrator,Canva"}
      />
    </motion.div>
    {/* second card */}
    <motion.div
      initial={{ left: "-11rem", top: "12rem" }}
      whileInView={{ left: "-4rem" }}
      transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Machinery"}
            detail={
              " Scanning Electron Microscope, Transmission Electron Microscope,Atomic Force Microscope,3D-Printing"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
