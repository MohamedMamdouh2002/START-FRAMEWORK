import React from "react";
import logo from "../../img/avataaars.svg"
import Style from "./Home.module.css"
import { TabTitle } from "../Title"

export default function Home() {
  TabTitle("START FRAMEWORK")
  return <>
<div className={`${Style.Home} mt-5 text-white`}>
    <div className="my-5">
        <img src={logo} className='w-100 mt-5'/>
        <h1>START FRAMEWORK</h1>
        <div className="mb-3 d-flex justify-content-center align-items-center">
            <div className=' line me-3 bg-white'></div>
                  <i className='fa-solid fa-star'></i>
              <div className=' line ms-3 bg-white'></div>
        </div>
        <p className={`text-center mb-5 `}>Graphic Artist - Web Designer - Illustrator
</p>
    </div>
</div>
      
  </>
}
