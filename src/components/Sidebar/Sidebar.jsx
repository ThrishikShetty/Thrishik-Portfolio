import React, { useState } from "react";
import {motion} from "framer-motion";
import Links from "./Links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import "./Sidebar.scss"
function Sidebar() {
  const [open,setOpen] =useState(false)

  const variants = {
    open:{
        clipPath:"circle(1200px at 50px 50px)",
        transition:{
            type:"spring",
            stiffness:"20",
        }
    },
    closed:{clipPath:"circle(30px at 50px 50px )",
transition:{
    delay:0,
    type:"spring",
    stiffness:400,
    damping:40,
}}
  }
   
  return (
    <motion.div className="Sidebar" animate={open? "open" : "closed"}>
        {/* for children the varaints are passed either open or closed based on above conditon */}
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  );
}

export default Sidebar;
