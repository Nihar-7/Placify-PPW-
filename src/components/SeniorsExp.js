import React from 'react'
import { NavLink, Link } from "react-router-dom";
export default function SeniorsExp() {
  return (
    <>
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className='white' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60%' }}>

          <h1>Company-Syllabus</h1>
          <ul style={{display:"flex",flexDirection:"column",alignItems:"start"}}>
            <li><NavLink to="/ECapgemini">Seniors-Experience - Capgemini</NavLink></li>
            <li><NavLink to="/Emicrosoft">Seniors-Experience - microsoft</NavLink></li>
            <li><NavLink to="/Ecognizant">Seniors-Experience - cognizant</NavLink></li>
            <li><NavLink to="/Edell">Seniors-Experience - dell</NavLink></li>
            <li><NavLink to="/Edelloite">Seniors-Experience - delloite</NavLink></li>
          </ul>

        </div>

      </main>
    </>
  )
}
