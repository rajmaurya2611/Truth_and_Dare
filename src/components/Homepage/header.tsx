import React from 'react';
import EAALogo from "../../assets/app_logo.png"; // Adjust the path as necessary
import { Link} from "react-router-dom";

/**
 * HeaderComponent
 * A transparent header with a logo on the left.
 */
const HeaderComponent: React.FC = () => {
  
    
  
  return (
   <>
  <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
    <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-8 md:px-12 lg:px-12">
      {/* Logos */}
      <div>
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center"
        >
          <img
            src={EAALogo}
            alt="Engineers at AKTU Logo"
            className="h-8 sm:h-10 w-auto"
            loading="lazy"
          />
          <h1 className="ml-4 text-xl sm:text-xl font-semibold text-[#4A5BFD]">
            Engineers at AKTU
          </h1>
        </Link>
      </div>
    </div>
  </header>
</>

  );
};

export default HeaderComponent;
