import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Expense App",
    img: "/expenseapp.png",
    desc: "Expense Management Application, built as a group Project. It supports category creation, UPI transaction management and a lot more.",
    url: "https://github.com/tookstanmay/projectLabII",
  },
  {
    id: 2,
    title: "iNotebook notes App",
    img: "/inotebook.png",
    desc: "Notes Application. Create, Edit or Delete your notes easily. Store them, authorize yourself by single click.",
    url: "https://github.com/tookstanmay/inotebook",
  },
  {
    id: 3,
    title: "Change Texts App",
    img: "/changetext.png",
    desc: "Text Transformation Application. Make texts UPPERCASED, lowercased, Capitalized. Even make the text speak for itself.",
    url: "https://change-text-indol.vercel.app/",
  },
  {
    id: 4,
    title: "Vanilla JS Clock",
    img: "/clock.png",
    desc: "Analog plus Digital Clock build using only HTML, CSS and pure Javascript. It also supports Alarm option.",
    url: "https://tookstanmay.github.io/alarmClock/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    //  offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.img} />
          </div>
          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url}>See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scrollX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scrollX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
