import React from 'react'



function Sidebar() {
   return (
      <div className='bg-base-100 h-full w-36 px-4 sidebar genre '>
         <h2 className='text-white text-xl'>Genre</h2>
         <ul className='flex flex-col'>
            <li>action</li>
            <li>Horror</li>
            <li>Comedy</li>
            <li>Adventure</li>
            <li>Drama</li>
         </ul>

      </div>
   )
}

export default Sidebar
