import React from "react";
import Style from '../About/About.module.css'
import { TabTitle } from "../Title"

export default function About() {
    TabTitle("About ")
  return (
    <>
    <section className={`${Style.about} text-white d-flex justify-content-center align-items-center`}>
        <div className="text-center">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">ABOUT COMPONENT</h2>
            <div className="d-flex justify-content-center align-items-center mb-3 text-white">
                <div className="line me-3 bg-white"></div>
                <i className="fa-solid fa-star"></i>
                <div className="line ms-3 bg-white"></div>
            </div>
            <div className="container">
                <div className="row px-5">
                    <div className="col-md-6 ps-md-5 text-start">
                        <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
                    </div>
                    <div className="col-md-6 pe-5 text-start">
                        <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
