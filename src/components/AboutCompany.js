import React from 'react'
import { NavLink, Link } from "react-router-dom";
export default function AboutCompany() {
  return (
    <>
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className='white' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60%' }}>

          <h1>About-Company</h1>
          <ul style={{display:"flex",flexDirection:"column",alignItems:"start"}}>
            <li><NavLink to="/ACapgemini">About Capgemini</NavLink></li>
            <li><NavLink to="/Amicrosoft">About microsoft </NavLink></li>
            <li><NavLink to="/Acognizant">About cognizant </NavLink></li>
            <li><NavLink to="/Adell">About dell </NavLink></li>
            <li><NavLink to="/Adelloite">About delloite </NavLink></li>
          </ul>

        </div>

      </main>
    </>
  )
}
