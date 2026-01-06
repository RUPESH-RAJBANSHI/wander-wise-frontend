import React, { useEffect, useState } from 'react'

const Footer = () => {


  return (
    <footer className='flex items-center justify-between px-40 py-20 bg-gray-300'>
        {/* left part */}
        <div>
            <div className='mb-10' >
                <h2 className='text-4xl font-blod mb-2'>WanderWise</h2>
                <p className='text-lg text-gray-700 '>Enjoy your journey with us</p>
            </div>

            <div>
                <p>CloveIt private Limited</p>
                <p>Mahendra chowk, Biratnager, Nepal</p>
                <p>Contact: +977-9800000000</p>
            </div>
        </div>

        {/* right part */}
        <div className='flex items-center gap-32'>
            <div className='flex flex-col gap-2 text-lg font-semibold'>
                <h4 className='text-black text-xl'>Features</h4>
                <a href="#">Your Trips</a>
                <a href="#">Itineraries</a>
                <a href="#">Packaging</a>
                <a href="#">Collaborate</a>
            </div>

            <div className='flex flex-col gap-2 text-gray-800 text-lg font-semibold'>
                <h4 className='text-black text-xl '>UsefulLinks</h4>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <a href="#">Terms and Conditions</a>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer