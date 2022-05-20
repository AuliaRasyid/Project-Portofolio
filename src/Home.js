import React from "react";
import "./Home.css";
import logo from "./img/logo.png";
function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="home" id="Home">
      <div className="home_bg">
        <div className="header d__flex align__item__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Project">
                <li className="nav__items mx__15">Project</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">Welcome To My Portofolio</h1>
              <h2 className="home__text pz__10">Hi My Name is Aulia Rasyid</h2>
              <h3 className="home__text sweet pz__10">Web Developer</h3>
              <h4 className="home__text pz__10">Nice To Meet You</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
