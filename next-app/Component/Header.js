import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <>
      <div className="header" >
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div className="nav">
          <Link href="/Home">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Services">Services</Link>
          <Link href="/Blog">Blog</Link>
        </div>
      </div>
    </>
  )
}

export default Header
