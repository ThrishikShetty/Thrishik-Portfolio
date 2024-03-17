import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import thread from "../../assets/thred.png"
import tesla from "../../assets/tesla.png"
import tech from "../../assets/tech.png"
import soon from "../../assets/soon.jpeg"
function Portfolio() {
  const items = [
    {
      id: 1,
      title: "ThreadTrack",
      img: thread,
      desc: "ThreadTrack is a comprehensive cloth inventory management system built on the MERN stack. It features an intuitive admin dashboard that provides insightful charts and graphical representations of your inventory data. With ThreadTrack, admins can effortlessly add new products, delete outdated items, process orders efficiently, and keep track of transactions seamlessly. It's the ultimate tool for managing your cloth inventory with ease and precision.",
      link1:"https://github.com/ThrishikShetty/ThreadTrack_Backend",
      link2:"https://github.com/ThrishikShetty/ThreadTrack_Backend/blob/main/README.md",
      btn:"More Info"
    },
    {
      id: 2,
      title: "blog website ",
      img: tech,
      desc:" Tech beyound pixel Your Ultimate Destination for Tech Insights and Industry Trends!.🚀 Welcome to a digital realm where innovation meets information! .created using react and appwrite for backend , where user can create his won blog , read blog etc",
      link1:"https://github.com/ThrishikShetty/BlogWebiste",
      link2:"https://blog-webiste-tau.vercel.app/login",
      btn:"View "

    },
    {
      id: 3,
      title: "Tesla Clone",
      img: tesla,
      desc:"This project is a clone of the Tesla website, built using React. It features a fully functional navbar with animations and dropdown effects, mimicking the behavior of the original Tesla website. To view the website and experience the navbar dropdown animation,  Please note that this project is best viewed on a desktop or laptop for the optimal experience.",
      link1:"https://github.com/ThrishikShetty/Tesla-Clone",
      link2:"https://tesla-clone-k1o4.vercel.app/",
      btn:"View "
    },
    {
      id: 4,
      title: "Chat App",
      img: soon,
      desc: "Online Chating website using MERN Stack .Where users can add freinds ,chat,create groups,send files,images and videos, currently working on this project",
      link1:"",
      link2:"",
      btn:"More Info"
    },
  ];

  const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
    //   offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="imgContainer"  ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{ y: y }} >
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <div className="btn">
               <a href={item.link1} target="_blank">Github</a>
               <a href={item.link2} target="_blank">{item.btn}</a>
             
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="Portfolio" ref={ref}>
      <div className="progress">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          // animate={{opacity:1 , scale:1}}
          transition={{ duration: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          MY PROJECTS
        </motion.h1>

        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
