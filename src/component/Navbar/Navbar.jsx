import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

  const [padding, setPadding] = useState(true);
 const changePadding = () => {
   if (window.scrollY >= 34) {
     setPadding(false);
   } else {
     setPadding(true);
   }

 }
 window.addEventListener("scroll", changePadding);
 return <>


<nav className={padding ? "navbar nav-padding position-fixed fixed-top navbar-expand-lg bg  py-3" : "navbar position-fixed fixed-top navbar-expand-lg bg  py-1"}>
   <div className="container">
     <Link to="" className="navbar-brand text-uppercase fw-bolder fs-2">START FRAMEWORK</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <NavLink to={"about"} className="nav-link me-3 p-2 fw-bold">About</NavLink>
         </li>
         <li className="nav-item">
           <NavLink to={"portfolio"} className="nav-link me-3 p-2 fw-bold" >Portfolio</NavLink>
         </li>
         <li className="nav-item">
           <NavLink to={"contact"} className="nav-link p-2 fw-bold">Contact</NavLink>
         </li>
         
       </ul>
       
     </div>
   </div>
 </nav>
</>  
}
