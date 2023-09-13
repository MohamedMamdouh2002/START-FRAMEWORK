import React, { useEffect, useRef, useState } from 'react'
import img1 from '../../img/poert1.png'
import img2 from '../../img/poert2.png'
import img3 from '../../img/poert3.png'
import {TabTitle} from "../Title"



export default function Portfolio() {

  

  
  TabTitle("Portfolio")


  

 

  let [modal, setModal] = useState(false);
  let [image, setImage] = useState("");
  let imgRef = useRef();

  let showModal = (imgSrc) => {
    setModal(true);
    setImage(imgSrc);
  } 

  useEffect(() => { 

    let handler = (e) => {
      if (imgRef.current && !imgRef.current.contains(e.target)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handler)
  },[]);


  return (
    <div className='portfolio pb-4'>

       <div className='pt-5 text-center'>
                  <h2 className='fs-1 fw-bold mb-3 text-center PT-5 text-dark'>PORTFOLIO COMPONENT</h2>
                  <div className='mb-3 d-flex justify-content-center align-items-center'>
                  <div className=' line me-3 bg-dark'></div>
                  <i className='fa-solid fa-star text-dark'></i>
                  <div className=' line ms-3 bg-dark'></div>
              </div>
      </div>
      <div className='container'>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div onClick={() => { showModal(img1)}}  className=' img rounded-3 position-relative overflow-hidden'>
              <img src={img1} alt='' className='w-100 rounded-3'></img>
              <div className='layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div onClick={() => { showModal(img2)}} className=' img rounded-3 position-relative overflow-hidden'>
              <img  src={img2} alt='' className='w-100 rounded-3'></img>
              <div className='layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div onClick={() => { showModal(img3)}} className=' img rounded-3 position-relative overflow-hidden'>
              <img src={img3} alt='' className='w-100 rounded-3'></img>
              <div className='layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div onClick={() => { showModal(img1)}} className=' img rounded-3 position-relative overflow-hidden'>
              <img src={img1} alt='' className='w-100 rounded-3'></img>
              <div className='layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div onClick={() => { showModal(img2)}} className=' img rounded-3 position-relative overflow-hidden'>
              <img src={img2} alt='' className='w-100 rounded-3'></img>
              <div className='layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div onClick={() => { showModal(img3)}} className=' img rounded-3 position-relative overflow-hidden'>
              <img src={img3} alt='' className='w-100 rounded-3'></img>
              <div className='layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={modal ? "modal position-fixed start-0 top-0 end-0 w-100 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center" : "d-none"}>
        <div className='w-50' ref={imgRef}>
          <img src={image} className='w-100' alt=''></img>
        </div>
    </div>
    </div>
  )
  
}
