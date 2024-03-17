import React from "react";
import "./Education.scss";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
function Education() {
  return (
    <div className="container">
      <main className="row">
        <div className="col">
          <header className="title">
            <motion.h2 initial={{ opacity: 0,scale: 0 }}
            // animate={{opacity:1 , scale:1}}
            transition={{ delay:0 ,duration: 0.5 }}
            whileInView={{ opacity: 1 ,scale:1}}>EDUCATION</motion.h2>
          </header>
          <div className="contents">
            <motion.div initial={{ opacity: 0,scale: 0 }}
            // animate={{opacity:1 , scale:1}}
            transition={{ delay:0.2 ,duration: 0.5 }}
            whileInView={{ opacity: 1 ,scale:1}}
               className="box">
              <h4> 2021-2025</h4>
              <h3>MANGALORE INSTITUTE OF TECHNOLOGY AND ENGINEERING</h3>
              <p>
                Pursuing Bachelor of Engineering in Information Science and
                Engineering with
                <span> CGPA:9.39 </span>
                ,MITE,Moodbodri,Mangalore,Karnataka
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0,scale: 0 }}
            // animate={{opacity:1 , scale:1}}
            transition={{ delay:0.5 ,duration: 0.5 }}
            whileInView={{ opacity: 1 ,scale:1}} className="box">
              <h4>2019-2021</h4>
              <h3>Dr. NSAM PU COLLEGE, NANTHOOR ,MANGALORE </h3>
              <p>
                Completed my pre-university education from Dr. NSAM PU COLLEGE
                with 99 percentage
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0,scale: 0 }}
            // animate={{opacity:1 , scale:1}}
            transition={{ delay:0.8,duration: 0.5 }}
            whileInView={{ opacity: 1 ,scale:1}}className="box">
              <h4>2018</h4>
              <h3>Mahatma Gandhi centenary High School ,BONDEL </h3>
              <p>
                Completed my High School from MGC Bondel, with an 96 percentage
              </p>
            </motion.div>
          </div>
        </div>
        <div className="col">
          <header className="title">
            <motion.h2 initial={{ opacity: 0,scale: 0 }}
            // animate={{opacity:1 , scale:1}}
            transition={{ delay:1,duration: 0.5 }}
            whileInView={{ opacity: 1 ,scale:1}}>EXPERIENCE </motion.h2>
          </header>
          <div className="contents">
            <motion.div initial={{ opacity: 0,scale: 0 }}
            // animate={{opacity:1 , scale:1}}
            transition={{ delay:1.2 ,duration: 0.5 }}
            whileInView={{ opacity: 1 ,scale:1}} className="box">
              <h4>OCTOBER(2023) - NOVEMBER(2023)</h4>
              <h3>PICSNCART  |   FULLSTACK DEVELOPMENT INTERN </h3>
              <p>
                Assisted in the design, development, and deployment of new
                features and functionality. Participated in code reviews,
                debugging, and quality assurance processes. hands-on experience
                with various technologies, including ReactJS, NodeJS, ExpressJS
                and MongoDB.
              </p>
            </motion.div>
            {/* <div className="box">
              <h4>2019-2021</h4>
              <h3>Dr. NSAM PU COLLEGE, NANTHOOR ,MANGALORE </h3>
              <p>
                Completed my pre-university education from Dr. NSAM PU COLLEGE
                with 99 percentage
              </p>
            </div>
            <div className="box">
              <h4>2018</h4>
              <h3>Mahatma Gandhi Secondary High School ,BONDEL </h3>
              <p>
                Completed my High School from MGC Bondel, with an 96 percentage
              </p>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Education;
