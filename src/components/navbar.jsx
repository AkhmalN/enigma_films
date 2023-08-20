import { useState } from 'react';
import icon from '../assets/man.png'

function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <nav className=" p-4">
         <div className="flex items-center justify-between">
            <div className="flex items-center">
               <div href="#" className="flex">
                  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mx-1" />
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar mx-1" >
                     <div className="w-10 rounded-full">
                        <img src={icon} alt='' />
                     </div>
                  </label>
               </div>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
               <button
                  onClick={toggleMenu}
                  type="button"
                  className="text-white hover:text-gray-200 focus:outline-none"
               >
                  <svg
                     className="h-6 w-6"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     {isMenuOpen ? (
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M6 18L18 6M6 6l12 12"
                        />
                     ) : (
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M4 6h16M4 12h16M4 18h16"
                        />
                     )}
                  </svg>
               </button>
            </div>

            {/* Nav Links for Desktop */}
            <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
               <h1
                  href="#"
                  className="text-gray-400 font-sans text-xl  hover:text-gray-200 md:ml-4 mt-2 md:mt-0"
               >
                  Popular
               </h1>
               <h1
                  href="#"
                  className="text-gray-400 font-sans text-xl hover:text-gray-200 md:ml-4 mt-2 md:mt-0"
               >
                  Top Rating
               </h1>
               <h1
                  href="#"
                  className="text-gray-400 font-sans text-xl hover:text-gray-200 md:ml-4 mt-2 md:mt-0"
               >
                  New in Netflix
               </h1>
               <h1
                  href="#"
                  className="text-gray-400 font-sans text-xl hover:text-gray-200 md:ml-4 mt-2 md:mt-0"
               >
                  Account
               </h1>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
