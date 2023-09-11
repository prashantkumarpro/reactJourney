"use client"
import React from "react"
import { useState } from 'react'
import Cursor from '@/Component/Cursor'

function page() {
  const [pageX, setPageX] = useState(0)
  const [pageY, setPageY] = useState(0)
  return (

<>

  <Cursor />


    
</>
      
  )
}

export default page
