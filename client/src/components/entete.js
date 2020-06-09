import headerhero from "../assets/g/images/headerhero.png";
import logo from "../assets/g/images/logo.svg";
import Login from "./Login.js";
import React from "react";
import blog2 from "../assets/g/images/blog2.jpg";

export default function Entete() {
  return (
    <div>
      <div className="preloader">
        <div className="loader">
          <div className="ytp-spinner">
            <div className="ytp-spinner-container">
              <div className="ytp-spinner-rotator">
                <div className="ytp-spinner-left">
                  <div className="ytp-spinner-circle"></div>
                </div>
                <div className="ytp-spinner-right">
                  <div className="ytp-spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-area">
        <div className="navbar-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="index.html">
                    <img src={logo} alt="Logo" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="page-scroll" href="#home">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#features">
                          {" "}
                          Live
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#about">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#facts">
                          Why
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#team">
                          Team
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#blog">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="navbar-btn d-none d-sm-inline-block">
                    <a className="main-btn" data-scroll-nav="0" href="#pricing">
                      Login{" "}
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div
          id="home"
          className="header-hero bg_cover"
          styles="background-image: url(assets/images/banner-bg.svg)"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="header-hero-content text-center">
                  <h3
                    className="header-sub-title wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.2s"
                  >
                    Fly with me - Travelers Land
                  </h3>
                  <h2
                    className="header-title wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.5s"
                  >
                    Share your Story
                  </h2>
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.8s"
                  >
                    {" "}
                    Join the beautiful community of travelling passionates, stay
                    home for once{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="header-hero-image text-center wow fadeIn"
                  data-wow-duration="1.3s"
                  data-wow-delay="1.4s"
                >
                  <img src={blog2} alt="hero" />
                </div>
              </div>
            </div>
          </div>
          <div id="particles-1" className="particles"></div>
        </div>
      </div>{" "}
    </div>
  );
}
