import React from 'react'
import { NavLink,Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
        <nav>
            <div className='logo'>
            <h1><span className='purple'>Plac</span>ify</h1>

            </div>
            <div className='nav-list'>
                <ul>
                    <li ><NavLink to='/' id="active">Company-Test</NavLink> </li>
                    <li><NavLink to="/Company-Syllabus">Company-Syllabus</NavLink>
                    <div className='menu'>
                        <ul>
                            <li><NavLink to="/Capgemini">Capgemini</NavLink></li>
                            <li><NavLink to="/microsoft">microsoft</NavLink></li>
                            <li><NavLink to="/cognizant">cognizant</NavLink></li>
                            <li><NavLink to="/dell">dell</NavLink></li>
                            <li><NavLink to="/delloite">delloite</NavLink></li>
                        </ul>
                    </div>
                    
                    </li>
                    <li><NavLink to="/About-Company">About-Company</NavLink>
                    <div className='menu'>
                        <ul>
                            <li><NavLink to="/ACapgemini">Capgemini</NavLink></li>
                            <li><NavLink to="/Aapple">apple</NavLink></li>
                            <li><NavLink to="/Acognizant">cognizant</NavLink></li>
                            <li><NavLink to="/Adell">dell</NavLink></li>
                            <li><NavLink to="/Adelloite">delloite</NavLink></li>
                        </ul>
                    </div></li>
                    <li><NavLink to="/Seniors-Experience">Seniors-Experience</NavLink>
                    <div className='menu'>
                        <ul>
                            <li><NavLink to="/ECapgemini">Capgemini</NavLink></li>
                            <li><NavLink to="/EAapple">apple</NavLink></li>
                            <li><NavLink to="/Ecognizant">cognizant</NavLink></li>
                            <li><NavLink to="/Edell">dell</NavLink></li>
                            <li><NavLink to="/Edelloite">delloite</NavLink></li>
                        </ul>
                    </div>
                    </li>
                </ul>

            </div>
            <div className='nav-btn'>
                <button>Sign Up</button>
                <button>Sign In</button>
            </div>
        </nav>
    </>
  )
}
