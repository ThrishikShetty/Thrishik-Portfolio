import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/data18.json"
import animationData1 from "../../assets/rocket.json";
import "./Hero.scss";
import { motion } from "framer-motion";
import hero from "../../assets/hero.png";
import { TypeAnimation } from "react-type-animation";
import scroll from "../../assets/scroll.png";
const textvariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          initial={{ opacity: 0, scale: 0.5 }}
          // animate={{opacity:1 , scale:1}}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // variants={textvariants}
          // initial="initial"
          // whileInView="animate"
        >
          <motion.h2
            // variants={textvariants}
            initial={{ x: -500, opacity: 0 }}
            // animate={{opacity:1 , scale:1}}
            transition={{ duration: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            THRISHIK SHETTY
          </motion.h2>
          <motion.h1
          //  variants={textvariants}
          >
            <TypeAnimation
              sequence={[
                " <Student/>",
                2000,
                " <FullStack Developer/>",
                2000,
                // " <UI/UX Designer/>",
                // 2000,
                " <Freelancer/>",
                2000,
              ]}
              wrapper="span"
              speed={50}
              //   className="inline-block md:text-7xl text-4xl"
              style={{
                // fontSize: "2rem",
                // display: "inline-block",
                color: "#196EF5",
              }}
              repeat={Infinity}
            />
          </motion.h1>

          <motion.div
            //  variants={textvariants}
            initial={{ x: +500, opacity: 0 }}
            // animate={{opacity:1 , scale:1}}
            transition={{ duration: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="buttons"
          >
            <a
              href="https://drive.google.com/file/d/1EkSPFuX_9mIpsxaP3L8-2IuP5WWPGd4N/view"
              target="_blank"
            >
              <motion.button variants={textvariants}>Download CV</motion.button>
            </a>
            <a href="#ContactMe">
              <motion.button variants={textvariants}> Contact Me</motion.button>
            </a>
          </motion.div>
          <a href="#footer">
            <motion.img
              variants={textvariants}
              animate="scrollButton"
              src={scroll}
              alt=""
            />
          </a>
        </motion.div>
      </div>
      <motion.div className="imageContainer">
        {/* <motion.div
          className="first"
          initial={{ x: 0, opacity: 1 }}
          // animate={{opacity:1 , scale:1}}
          transition={{ delay: 3, duration: 1 }}
          animate={{ x: 500, opacity: 0 }}
        >
          <Lottie animationData={animationData1} />
        </motion.div> */}
        <motion.div
          className="second"
          initial={{ opacity: 0, scale: 0.5 }}
          // animate={{opacity:1 , scale:1}}
          transition={{ delay: 0, duration: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Lottie animationData={animationData} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
