import React from 'react'
import Browse from '../assets/browse.png'
import Heart from '../assets/heart.png'
import Active from '../assets/active.png'

function Sidebar() {
   return (
      <div className='bg-base-100 h-full w-60 px-7 py-7'>
         <h1 className='font-mono text-3xl text-red-500'>Mall Movies</h1>
         <h2 className='text-gray-600 text-xl my-3'>New Feed</h2>
         <ul className='flex flex-col text-gray-50'>
            <div className='text-lg'>
               <div className='flex flex-wrap align-middle my-3'>
                  <span className='mr-5'>
                     <img src={Browse} alt='' />
                  </span>Browse
               </div>
               <div className='flex flex-wrap align-middle my-3'>
                  <span className='mr-5'>
                     <img src={Heart} alt='' />
                  </span>Watch List</div>
               <div className='flex flex-wrap align-middle my-3'>
                  <span className='mr-5'>
                     <img src={Active} alt='' />
                  </span>Remind</div>
            </div>
         </ul>
         <h2 className='text-gray-600 text-xl my-3'>Categories</h2>
         <ul className='flex flex-col text-gray-50'>
            <div className='text-lg'>
               <li>Action</li>
               <li>Horror</li>
               <li>Comedy</li>
               <li>Adventure</li>
               <li>Drama</li>
            </div>
         </ul>

      </div>
   )
}

export default Sidebar
