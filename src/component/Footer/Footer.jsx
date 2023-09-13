import React from "react";
import Style from "../Footer/Footer.module.css"
export default function Footer() {
    return <>
    <footer className=" text-white ">
  <div className="container">
    <div className="row py-3">
      <div className="col-md-4 g-2 p-md-5">
        <h3 className="ms-md-3">LOCATION</h3>
        <p className="">2215 John Daniel Drive</p>
        <p className="ms-md-4">Clark, MO 65243</p>
      </div>
      <div className="col-md-4 g-2 p-md-5">
       <h3>AROUND THE WEB</h3>
       <div className="links d-flex  gap-2 mx-md-4">
     
          <i className={`fa-brands fa-facebook text-white border  fs-6 rounded-circle ms-3 ${Style.iconFooter}`} ></i>
  
          <i className={`fa-brands fa-twitter text-white border  fs-6 rounded-circle ${Style.iconFooter}`}></i>
  
      
          <i className={`fa-brands fa-linkedin text-white border  fs-6 rounded-circle ${Style.iconFooter}`}></i>
  
        
  
          <i className={`fa-solid fa-globe text-white border  fs-6 rounded-circle ${Style.iconFooter}`}></i>
       
     
  
       </div>
      </div>
      <div className="col-md-4 g-3 p-md-5">
        <h3 className="ms-md-3" >ABOUT FREELANCER
  </h3>
        <p className="fs-6 text-start"> Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>
  </div>
    <div className={`${Style.footerAfter} text-center p-3`}>
    Copyright © Your Website 2021
    </div>
    </footer>
    </>
  
    
  }
  