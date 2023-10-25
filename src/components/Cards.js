import React from 'react'
import Capgemini from '../images/Capgemini.png'
import accenture from '../images/accenture.png'
import amazon from '../images/amazon.png'
import apple from '../images/apple.png'
import cognizant from '../images/cognizant.png'
import dell from '../images/dell.png'
import delloite from '../images/delloite.png'
import google from '../images/google.png'
import microsoft from '../images/microsoft.png'
import ibm from '../images/ibm.png'
import infosys from '../images/infosys.png'
import samsung from '../images/samsung.png'
import flipkart from '../images/flipkart.png'
import { NavLink,Link } from "react-router-dom";

export default function Cards() {
  return (
    <>
      <main>
        <div className='white'>
          <h1>Crack Test</h1>
        </div>

        <div className='card'>


          <div className='company'>
            <div className='company-logo'>

              <img src={Capgemini} height={100} width={300} />
            </div>
            <div>

              <button>Start</button>
            </div>
          </div>

          <div className='company'>
            <div className='company-logo'>

              <img src={accenture} height={100} width={300} />
            </div>
            <div>

              <button><NavLink className="test-link" to="/testcard">Start</NavLink></button>
            </div>
          </div>

          <div className='company'>
            <div className='company-logo'>

              <img src={apple} height={200} width={200} />
            </div>
            <div>

              <button>Start</button>
            </div>
          </div>

          <div className='company'>
            <div className='company-logo'>

              <img src={cognizant} height={100} width={300} />
            </div>
            <div>

              <button>Start</button>
            </div>
          </div>

          <div className='company'>
            <div className='company-logo'>

              <img src={dell} height={200} width={200} />
            </div>
            <div>

              <button>Start</button>
            </div>
          </div>

          <div className='company'>
            <div className='company-logo'>

              <img src={delloite} height={100} width={300} />
            </div>
            <div>

              <button>Start</button>
            </div>
          </div>

          <div className='company'>
            <div className='company-logo'>

              <img src={google} height={100} width={300} />
            </div>
            <div>

              <button>Start</button>
            </div>
          </div>

          <div className='company'>
            <div className='company-logo'>

              <img src={microsoft} height={100} width={300} />
            </div>
            <div>

              <button>Start</button>
            </div>
          </div>

          <div className='company'>
            <div className='company-logo'>

              <img src={ibm} height={100} width={300} />
            </div>
            <div>

              <button>Start</button>
            </div>
          </div>

          <div className='company'>
            <div className='company-logo'>

              <img src={infosys} height={100} width={300} />
            </div>
            <div>

              <button>Start</button>
            </div>
          </div>

          <div className='company'>
            <div className='company-logo'>

              <img src={samsung} height={100} width={300} />
            </div>
            <div>

              <button>Start</button>
            </div>
          </div>
          <div className='company'>
            <div className='company-logo'>

              <img src={flipkart} height={200} width={200} />
            </div>
            <div>

              <button>Start</button>
            </div>
          </div>

        </div>
      </main>


    </>
  )
}
