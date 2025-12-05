import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offer on Your Email</h1>
      <p>Subscribe to our newsletter to receive the latest updates and exclusive offers.</p>

      <div>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>

      </div>


    </div>
  )
}
