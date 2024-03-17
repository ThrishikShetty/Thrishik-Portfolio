import React from "react";
import { motion } from "framer-motion";
import { FaInstagramSquare } from "react-icons/fa";
import img from "../../assets/profile.jpg";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./Aboutme.scss";
function Aboutme() {
  const style = { color: "white", fontSize: "3em" };
  return (
    
    <div className="about">
      <div className="content">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          // animate={{opacity:1 , scale:1}}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src={img}
          alt=""
        />
        <motion.div
          className="text"
          initial={{ opacity: 0,scale: 0.5 }}
          // animate={{opacity:1 , scale:1}}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1 ,scale:1}}
        >
          <motion.h1>About Me</motion.h1>
          <h3>Thrishik Shetty</h3>
          <h5>Developer & Designer</h5>
          <p>
            {" "}
            Hi ,I am <span>Thrishik Shetty </span>,a ambitious 3rd-year
            Information Science and Engineering student at Mangalore Institute
            and Technology and Engineering .I am a curious and driven individual
            with a deep passion for continuous learning and a strong focus on
            emerging technologies. Passionate about Software Engineering and
            Full stack development{" "}
          </p>
          <div className="socials">
            <motion.a
            initial={{ opacity: 0,scale: 0 }}
            // animate={{opacity:1 , scale:1}}
            transition={{ delay:0.6 ,duration: 0.5 }}
            whileInView={{ opacity: 1 ,scale:1}}
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
              }}
              href="https://www.instagram.com/_.thrishik_17._/?next=%2F"
              target="_blank"
            >
              <FaInstagramSquare style={style} />
            </motion.a>
            <motion.a
             initial={{ opacity: 0,scale: 0 }}
             // animate={{opacity:1 , scale:1}}
             transition={{ delay:0.7 ,duration: 0.5 }}
             whileInView={{ opacity: 1 ,scale:1}}
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
              }}
              href="https://www.linkedin.com/in/thrishik-shetty-688813253/"
              target="_blank"
            >
              <FaLinkedin style={style} />
            </motion.a>
            <motion.a
             initial={{ opacity: 0,scale: 0 }}
             // animate={{opacity:1 , scale:1}}
             transition={{ delay:0.8,duration: 0.5 }}
             whileInView={{ opacity: 1 ,scale:1}}
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
              }}
              href="https://twitter.com/Thrishik_Shetty"
              target="_blank"
            >
              <FaTwitterSquare style={style} />
            </motion.a>
            <motion.a
             initial={{ opacity: 0,scale: 0 }}
             // animate={{opacity:1 , scale:1}}
             transition={{ delay:0.9 ,duration: 0.5 }}
             whileInView={{ opacity: 1 ,scale:1}}
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
              }}
              href="https://github.com/ThrishikShetty"
              target="_blank"
            >
              <FaGithubSquare style={style} />
            </motion.a>
            <motion.a
             initial={{ opacity: 0,scale: 0 }}
             // animate={{opacity:1 , scale:1}}
             transition={{ delay:1 ,duration: 0.5 }}
             whileInView={{ opacity: 1 ,scale:1}}
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
              }}
              href="https://github.com/ThrishikShetty"
              target="_blank"
            >
              <FaWhatsappSquare style={style} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Aboutme;
