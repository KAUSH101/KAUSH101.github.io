import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>K</span>aushik
            
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About me</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/resume">Resume</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact me</NavLink>
            </li>
          </ul>
        </div>
 
        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://github.com/KAUSH101"
                target="_kaushik">
                <FaGithubSquare className="github" />
                
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kaushik-kumar-545149253//"
                target="_kaushik">
                <FaLinkedin className="Linkedin" />
              </a>
            </li>
           
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Kaushik KUMAR</h1>
      </section> */}
    </>
  );
};

export default Navbar;

