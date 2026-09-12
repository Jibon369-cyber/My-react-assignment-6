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
      <nav className='relative container mx-auto flex max-w-6xl items-center justify-between px-4 py-4'>
        {/* Hamburger - Mobile */}
        <div className='md:hidden'>
          <button
            type='button'
            onClick={() => setIsMobileMenuOpen((previous) => !previous)}
            className='flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100'
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? (
              <span className='text-2xl leading-none'>×</span>
            ) : (
              <span className='text-xl leading-none'>☰</span>
            )}
          </button>
        </div>

        {/* Logo */}
        <a
          href='#'
          className='absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0'>
          <img src={logoText} alt='Dev Stack' className='h-auto w-auto' />
        </a>

        {/* Desktop Navigation */}
        <div className='hidden items-center gap-6 md:flex md:mx-auto'>
          <a href='#' className='text-xs font-bold text-brand-pink'>
            Home
          </a>

          <a
            href='#technologies'
            className='text-xs font-bold text-gray-600 transition hover:text-brand-pink'>
            Technologies
          </a>

          <a
            href='#projects'
            className='text-xs font-bold text-gray-600 transition hover:text-brand-pink'>
            Projects
          </a>

          <a
            href='#about'
            className='text-xs font-bold text-gray-600 transition hover:text-brand-pink'>
            About
          </a>

          <a
            href='#contact'
            className='text-xs font-bold text-gray-600 transition hover:text-brand-pink'>
            Contact
          </a>
        </div>

        {/* Sign In + Sign Up */}
        <div className='flex items-center gap-3'>
          <button className='text-xs font-medium text-gray-600 transition hover:text-pink-600'>
            Sign In
          </button>

          <button className='cursor-pointer rounded-full bg-pink-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-pink-800'>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleCloseMenu} />
    </header>
  );
}
