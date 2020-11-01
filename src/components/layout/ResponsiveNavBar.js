import React, { useEffect } from "react";
import { Link } from "react-router-dom";

let isOpen = false;
export const OpenCloseNav = () => {
  let navbar = document.getElementById("sidebar");
  let btn = document.getElementById("open-close-btn");
  if (isOpen) {
    navbar.style.transform = "translateX(-100%)";
    btn.innerHTML = "menu";
    isOpen = false;
    btn.style.transform = "rotate(0)";
  } else {
    navbar.style.transform = "translateX(0)";
    isOpen = true;
    btn.innerHTML = "close";
    btn.style.transform = "rotate(-90deg)";
  }
};

const ResponsiveNavBar = () => {
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (!isOpen && document.body.clientWidth >= 1175) {
        OpenCloseNav();
      }
      if (isOpen && document.body.clientWidth < 1175) {
        OpenCloseNav();
      }
    });
  }, []);
  return (
    <div className="responsive-navbar">
      <span>
        <Link to="/" className="titleDiv rspTitle">
          LMS
        </Link>
      </span>
      <div
        className="material-icons rsp-nav-btn"
        id="open-close-btn"
        onClick={() => {
          OpenCloseNav();
        }}
      >
        menu
      </div>
    </div>
  );
};

export default ResponsiveNavBar;
