import React from 'react'
import img1 from '../images/img1.png'

export default function Main() {
  return (
    <>
      <main>
        <div className='white'>
          <h1>Believe in yourself and excel in your placement preparation!</h1>
          <div className='cont-1'>
            <div>
              <h1>Get a job in your dream company</h1>
              <p>Meet people who work in the industry you're interested in and ask them for advice. </p>
              <p>Learn about the company you want to work for</p>
              <p>Clear company test easily</p>
              <p>Practice answering interview questions</p>
            </div>
            <div className='photo-1'>
              <img src={img1} height={260} width={290} />

            </div>
          </div>
        </div>
      </main>
    </>
  )
}
