import { Link } from "react-router-dom";
import header_bg from "../../assets/images/header-bg.jpg";
import React, { useState, useEffect } from "react";
import Logo_Icon from "../../assets/images/logo.svg";
import Header_Shap from "../../assets/images/header-shape.svg";

const Header = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    handleNavigate("home");
  }, []);

  const handleNavigate = (id) => {
    setActive(id);
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  function myFunction() {
    console.log("Function Call");
  }

  return (
    <header className="header-area" >
      <div className="navgition navgition-transparent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">
                  <img src={Logo_Icon} alt="Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarOne"
                  aria-controls="navbarOne"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarOne"
                >
                  <ul className="navbar-nav m-auto">
                    <li className={`nav-item ${active === "home" && "active"}`}>
                      <Link
                        className="page-scroll"
                        onClick={() => handleNavigate("home")}
                        to="/"
                      >
                        HOME
                      </Link>
                    </li>
                    <li
                      className={`nav-item ${active === "service" && "active"}`}
                    >
                      <Link
                        className="page-scroll"
                        onClick={() => handleNavigate("service")}
                        to="/"
                      >
                        SERVICES
                      </Link>
                    </li>
                    <li
                      className={`nav-item ${active === "pricing" && "active"}`}
                    >
                      <Link
                        className="page-scroll"
                        onClick={() => handleNavigate("pricing")}
                        to="/"
                      >
                        PRICING
                      </Link>
                    </li>
                    <li
                      className={`nav-item ${
                        active === "testimonial" && "active"
                      }`}
                    >
                      <Link
                        className="page-scroll"
                        onClick={() => handleNavigate("testimonial")}
                        to="/"
                      >
                        Testimonial
                      </Link>
                    </li>
                    <li
                      className={`nav-item ${active === "contact" && "active"}`}
                    >
                      <Link
                        className="page-scroll"
                        onClick={() => handleNavigate("contact")}
                        to="/"
                      >
                        CONTACT
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="navbar-social d-none d-sm-flex align-items-center">
                  <span>FOLLOW US</span>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="lni-facebook-filled"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni-twitter-original"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni-instagram-original"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni-linkedin-original"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div
        id="home"
        className="header-hero bg_cover"
        style={{ backgroundImage: `url(${header_bg})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="header-content text-center">
                <h3 className="header-title">
                  Handcrafted Landing Page for Startups and SaaS Businesses
                </h3>
                <p className="text">
                  A simple, customizable, and, beautiful SaaS business focused
                  landing page to make your project closer to launch!
                </p>
                <ul className="header-btn rounded-buttons">
                  <li>
                    <Link className="main-btn rounded-three" href="#">
                      GET IN TOUCH
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="main-btn rounded-four video-popup"
                      href="../../watch.html?v=r44RKWyfcFw"
                    >
                      WATCH THE VIDEO <i className="lni-play"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-shape">
          <img src={Header_Shap} alt="shape" />
        </div>
      </div>
    </header>
  );
};

export default Header;
