"use client"
import React, { useState } from "react"



function page() {

  let [pageX, setPageX] = useState(0)
  let [pageY, setPageY] = useState(0)



  return (

    <>
      <div className="main"
        onMouseMove={(e) => {

          setPageX(e.clientX)
          setPageY(e.clientY)

        }}
      >
        <div className="cursor"
          style={{ left: `${pageX}px`, top: `${pageY}px` }}
        >
          Pro
        </div>
      </div>




    </>

  )
}

export default page
