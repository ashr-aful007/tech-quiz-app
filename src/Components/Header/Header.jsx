import React from 'react'
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold ">
       <Link to='/'>Tech Quiz</Link>
       <Link to='/topic'>Topic</Link>
       <Link to='/statistics'>Statistics</Link>
       <Link to='/blog'>Blog</Link>
      </ul>
    </div>
    <div className='font-medium text-2xl'>
    <Link to='/'>Tech Quiz</Link>
    </div>
  </div>
  <div className='flex gap-2 float-right navbar-end  font-semibold '>  
      <Link to='/topic'>Topic</Link>      
        <Link to='/statistics'>Statistics</Link>
        <Link to='/blog'>Blog</Link>
  </div>
  </div>
 {/* heading section */}

</div>
  )
}

export default Header;


/**
 * react router dom.
 * api daynamic loaded data.
 * rechart to show data analytics category wise.
 * react hooks.
 * tailwind css framework.
 * daisyui this is Tailwind CSS component library.
 */