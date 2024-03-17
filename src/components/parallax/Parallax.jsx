import React, { useRef } from 'react'
import "./parallax.scss"
import {motion ,useScroll,useTransform} from "framer-motion"
function Parallax({type}) {
    const ref = useRef()

    const {scrollYProgress}= useScroll({
        target:ref,
        offset:["start start" , "end start"]
    })
    const yText = useTransform(scrollYProgress , [0,1] , ["0%","400%"])
    const yBg = useTransform(scrollYProgress , [0,1] , ["0%","140%"])
  return (
    <div className='parallax' ref={ref} style={{background:type==="skills"? "linear-gradient(180deg , #111132,#0c0c1d)":"linear-gradient(180deg , #111132,#505064)"}}>
        <motion.h1  style={{y:yText}} >
            {type ==="skills"?"MY SKILLS":"MY PROJECTS"}
        </motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" style={{y:yBg }}></motion.div>
        <motion.div className="stars" style={{x:yBg}}></motion.div>
    </div>
  )
}

export default Parallax