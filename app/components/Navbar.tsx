import React from 'react'
import Link from 'next/link'
import  { FaGithub, FaLinkedin, FaBookOpen, FaLocationArrow, FaMailBulk, FaMapMarkerAlt } 
  from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="bg-slate-400 p-4 sticky top-0 drop-shadow-xl z-100">
      <div className="prose ms-5 prose-slate mx-auto flex 
        flex-col sm:flex-row">
        <h1 className='text-3xl font-bold text-white grid
          place-content-start mb-10 md:mb-0'>
          <Link href="/"
          className="text-white/90 no-underline hover:text-slate-200">Tianhui Liu</Link>
        </h1>
        
      </div>
    </nav>
  )
}
