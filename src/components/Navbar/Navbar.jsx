import React from "react";
import "./Navbar.scss";

import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import img from "../../assets/logooo.png"
function Navbar() {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          // animate={{opacity:1 , scale:1}}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
         TS
        </motion.span>
        
      </div>
    </div>
  );
}

export default Navbar;
