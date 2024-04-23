import React, { useRef, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../../styles/navbar.scss';
import { routes } from '../../Data/dummy';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Klogo from '../../assets/karimLogo.png';
import { MdOutlineArrowUpward } from "react-icons/md";


function Navbar() {
  const location = useLocation();
  const navRef = useRef();
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Show or hide the scroll-to-top button based on the scroll position
    const scrollThreshold = 100;
    setShowScrollToTop(window.scrollY > scrollThreshold);
  };

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const showBar = () => {
    navRef.current.classList.toggle('responsive_nav');
    document.body.classList.toggle('no-scroll');
  };

  return (
    <div className="app__navbar">
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="app__logo"
      >
        <Link to="/">
          <img src={Klogo} alt="" />
        </Link>
      </motion.div>

      <div />

      <ul className="routes" ref={navRef}>
        {routes.map((route, index) => (
          <li key={index} className="route">
            <NavLink
              to={route.path}
              className={`route ${location.pathname === route.path ? 'active-route' : ''}`}
              exact
            >
              {route.name}
            </NavLink>
          </li>
        ))}
        <button onClick={showBar} className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </ul>

      <button onClick={showBar} className="nav-btn">
        <FaBars />
      </button>

      {showScrollToTop && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          <MdOutlineArrowUpward />

        </button>
      )}
    </div>
  );
}

export default Navbar;
