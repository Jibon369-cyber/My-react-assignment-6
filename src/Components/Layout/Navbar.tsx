import { useState } from "react";
import logoText from "../../assets/logo-text.png";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };


  return (
    <header className='sticky top-0 z-50 border-b border-gray-100 bg-white'>
      <nav className='container mx-auto flex max-w-6xl items-center justify-between px-4 py-4'>
        

        <div className='flex items-center gap-3'>
          {/* Hamburger */}
          <button
            type='button'
            onClick={() => setIsMobileMenuOpen((previous) => !previous)}
            className='flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 md:hidden'
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? (
              <span className='text-2xl leading-none'>×</span>
            ) : (
              <span className='text-xl leading-none'>☰</span>
            )}
          </button>

          {/* Logo */}
          <a href='#'>
            <img src={logoText} alt='Dev Stack' className='h-auto w-auto' />
          </a>
        </div>

        <div className='hidden items-center gap-6 md:flex'>
          <a href='#' className='text-xs font-bold text-brand-pink'>
            Home
          </a>

          <a
            href='#'
            className='text-xs font-bold text-gray-600 hover:text-brand-pink'>
            Technologies
          </a>

          <a
            href='#'
            className='text-xs font-bold text-gray-600 hover:text-brand-pink'>
            Projects
          </a>

          <a
            href='#'
            className='text-xs font-bold text-gray-600 hover:text-brand-pink'>
            About
          </a>

          <a
            href='#'
            className='text-xs font-bold text-gray-600 hover:text-brand-pink'>
            Contact
          </a>
        </div>

        <div className='flex items-center gap-3'>
          <button className='hidden text-xs font-medium text-gray-600 sm:block'>
            Sign In
          </button>
          <button className='rounded-full bg-pink-700 px-4 py-2 text-xs font-medium text-white'>
            Sign Up
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleCloseMenu} />
    </header>
  );
}
