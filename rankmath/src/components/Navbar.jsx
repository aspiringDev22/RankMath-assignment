import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  AiOutlineMinusCircle,
  AiOutlineFile,
  AiOutlineEdit,
  AiOutlineClose
} from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import { LiaUploadSolid } from "react-icons/lia";
import '../styles/navbar.css';

const Navbar = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const menuRef = useRef(null);
  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 5,
      rotateY:-1,
      transition: {
        duration: 0.5
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      rotateY:45,
      transition: {
        duration: 0.5,
        delay: 0.3
      },
      transitionEnd: {
        display: "none"
      }
    }
  };

 
  return (
    <nav className="navbar">
      <div className="navbar-heading">
        <h1>Bitcoin Wallet</h1>
      </div>
      <div className="navbar-menu-icon" onClick={handleDropDown}>
        {
          isDropDown ? <AiOutlineClose color="black" size="24" className="menu-icon"/> : <CiMenuKebab color="black" size="24" className="menu-icon" />
        }
        
      </div>
      {isDropDown && (
               <motion.div
              className="dropdown-menu"
              ref={menuRef}
              initial="exit"
              animate={isDropDown ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
          <ul>
            <li className="list">
              Edit <AiOutlineEdit />
            </li>
            <li className="list">
              Courier Info <AiOutlineFile />
            </li>
            <li className="list">
              Share <LiaUploadSolid />
            </li>
            <li className="remove">
              Remove <AiOutlineMinusCircle />
            </li>
          </ul>
          </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
