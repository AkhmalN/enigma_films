import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <nav className="navbar bg-base-100">
         <div className="flex items-center justify-between container mx-auto px-4 py-2">
            <div className="flex items-center">
               
               <Link to="/" className="btn btn-ghost normal-case text-xl mr-2">Homepage</Link>
               <Link to="/portfolio" className="btn btn-ghost normal-case text-xl mr-2">Portfolio</Link>
               <Link to="/about" className="btn btn-ghost normal-case text-xl">About</Link>
            </div>
            <div className="flex items-center space-x-2">
               <Link to="/movies" className="btn btn-ghost normal-case text-xl">Movies</Link>
               <Link to="/tvshow" className="btn btn-ghost normal-case text-xl">TV Show</Link>
               <Link to="/watchlist" className="btn btn-ghost normal-case text-xl">Watchlist</Link>
               <div className="btn btn-ghost">
                  <img
                     src="profile-icon.png" // Replace with the path to your profile icon
                     alt="Profile"
                     className="w-8 h-8 rounded-full"
                  />
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
