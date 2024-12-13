import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-slate-950">
    <div className="flex-1">
    <a className="btn btn-ghost text-xl">Snowify</a>
    </div>
    <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
        <li><a>Link</a></li>              
        <li><a>Link</a></li>
    </ul>
    </div>
    </div>    
  )
}

export default Navbar