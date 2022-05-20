import React from "react";
import "./Project.css";
import project1 from "./img/Project1.png";
import project2 from "./img/Project2.png";
import project3 from "./img/Project3.png";

function Project() {
  return (
    <div className="project component__space" id="Project">
      <div className="heading">
        <h1 className="heading">My Project</h1>
        <p className="heading p__color">Its All project</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={project1} alt="project1" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Project Kampus-dokes</h5>
                <h4 className="project__text">Web</h4>
                <a herf="#Contact" className="project__btn">
                  View Detail
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={project2} alt="project2" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Project Kampus KKN</h5>
                <h4 className="project__text">Web</h4>
                <a herf="https://waibaodesa.id/" className="project__btn">
                  View Detail
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={project3} alt="project3" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Portofolio</h5>
                <h4 className="project__text">Web</h4>
                <a herf="#" className="project__btn">
                  View Detail
                </a>
              </div>
            </div>
          </div>
          <div className="view__more__btn d__flex align__item__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
