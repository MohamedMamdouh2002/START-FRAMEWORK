import React from "react";
import Style from "./Notfound.module.css"
import { TabTitle } from "../Title"
export default function Notfound() {

  TabTitle("NotFound")

  
  return <>
  <div className={` ps-3 pt-5 ${Style.notfound}`}>

<h3 className='h1'>  Not Found
</h3>  
<p className='fs-3'>
This page doesn’t exist.

If this is a mistake, let us know, and we will try to fix it!

</p>
  </div>
</>
}
