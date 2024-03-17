import React, { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import animationData from "../../assets/mail.json"
const variants = {
  initial: {
    x: -300,
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
};

function Contact() {
  const ref = useRef();
  const formref = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const isInView = useInView(ref, { margin: "-100px" });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_afwbgqn",
        "template_3pd6syp",
        formref.current,
        "zf7QEx04gZhRLv5_r"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail:</h2>
          <span>thrishikshetty17@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Address:</h2>
          <span>MIG 2nd 116 KHB colony Kunjathbail , Mangalore</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Phone Number:</h2>
          <span>+91 7483263697 </span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phonesvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 2}}
        >
          <Lottie className="svg" animationData={animationData}/>
        </motion.div>
        <motion.form
          ref={formref}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          transition={{  delay: 5,duration: 1 }}
          whileInView={{ opacity: 1 }}
          
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
