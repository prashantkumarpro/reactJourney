import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <>
   
      <header className="hero">
        <h1 className="logo">port<span>Folio</span> </h1>
        <div className="ham-button">
          <i className="ri-menu-3-line ham_menu" id="ham_menu"></i>
          <i className="fa-solid fa-xmark ham_close" id="ham_close"></i>
        </div>

        <nav id="navbar" className="nav-links">
          <div className="links">
            <Link className='active' href="/Home">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Services">Services</Link>
            <Link href="/Blog">Blog</Link>
            <Link href="/Skills">Skills</Link>
            <Link href="/Contact">Contact</Link>
          </div>

        </nav>
      </header>
      
    </>
  )
}

export default Header
