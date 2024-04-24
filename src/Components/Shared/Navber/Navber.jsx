import React from 'react'

const Navber = () => {
    const navLinks = [
        { menu: 'Home', link: '#' },
        { menu: 'Events', link: '#' },
        { menu: 'About us', link: '#' },
        { menu: 'Contact', link: '#' },
      ]
  return (
    <div id='nav' className="navbar z-40 mb-14 text-white h-[72px] mt-5 rounded-[20px] container mx-auto">
        <div  className="navbar-start logo">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 nav shadow bg-base-100 rounded-box w-52">
              {navLinks.map((item, index) => <li key={index}><a className='' href={item?.link}>{item?.menu}</a></li>)}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">EventHost</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1   ">
            {navLinks.map((item, index) => <li key={index}><a className='' href={item?.link}>{item?.menu}</a></li>)}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="w-8 rounded-full">
            <img className='rounded-full' alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ml-1">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Navber