import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  };

  return (
    <div>
      <motion.div
        ref={ref}
        className="services"
        variants={variants}
        initial="initial"
        animate={isInView && "animate"}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>
            I adapt to Technology.
            <br />
            So that you won&apos;t lag in this fast pacing world.
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img src="/people.webp" alt="people" />
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Unique</motion.b>{" "}
              Technologies
            </h1>
          </div>
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>For pacing</motion.b>{" "}
              World
            </h1>
            <button>What I Learnt?</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <div id="slider">
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2>REACT JS</h2>
              <img src="/react.png" alt="reactjs" />
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2>NODE JS</h2>
              <img src="/node.png" alt="nodejs" />
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2>RDBMS</h2>
              <img src="/postgresql.png" alt="postgresql" />
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2>NOSQL</h2>
              <img src="/mongodb.webp" alt="mongodb" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
