import React from 'react'
import { NavLink, Link } from "react-router-dom";
export default function CompanySyllabus() {
  return (
    <>
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className='white' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60%' }}>

          <h1>Company-Syllabus</h1>
          <ul style={{display:"flex",flexDirection:"column",alignItems:"start"}}>
            <li><NavLink to="/Capgemini">Capgemini Syllabus 2023</NavLink></li>
            <li><NavLink to="/microsoft">microsoft Syllabus 2023</NavLink></li>
            <li><NavLink to="/cognizant">cognizant Syllabus 2023</NavLink></li>
            <li><NavLink to="/dell">dell Syllabus 2023</NavLink></li>
            <li><NavLink to="/delloite">delloite Syllabus 2023</NavLink></li>
          </ul>

        </div>

      </main>
    </>
  )
}
