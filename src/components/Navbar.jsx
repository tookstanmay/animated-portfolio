import "./navbar/navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          TOOKSTANMAY
        </motion.span>
        <div className="social">
          <a href="https://github.com/tookstanmay/">
            <img src="/github.jpg" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/tookstanmay/">
            <img src="/linkedin.webp" alt="" />
          </a>
          <a href="https://www.instagram.com/tookstanmay/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@tookstanmay/videos">
            <img src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
