import logoText from "../../assets/logo-text.png";

const productLinks = ["Home", "Technologies", "Products"];

const companyLinks = ["About", "Contact", "Careers"];

const legalLinks = ["Privacy Policy", "Terms of Service"];

export default function Footer() {
  return (
    <footer className='border-t border-gray-100 bg-white'>
      <div className='mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:py-14'>
        {/* Main Footer */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-4'>
          {/* Brand */}
          <div className='text-center md:text-left'>
            <a href='#' className='inline-block'>
              <img src={logoText} alt='Dev Stack' className='h-auto w-40' />
            </a>

            <p className='mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500 md:mx-0'>
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className='mt-6 flex items-center justify-center gap-4 md:justify-start'>
              <a
                href='https://github.com/'
                className='text-sm font-medium text-gray-600 transition hover:text-brand-pink'>
                GitHub
              </a>

              <span className='text-gray-400'>•</span>

              <a
                href='https://x.com/home'
                className='text-sm font-medium text-gray-600 transition hover:text-brand-pink'>
                Twitter
              </a>

              <span className='text-gray-400'>•</span>

              <a
                href='https://www.linkedin.com/feed/'
                className='text-sm font-medium text-gray-600 transition hover:text-brand-pink'>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className='hidden md:block'>
            <h3 className='text-sm font-semibold text-gray-900'>Product</h3>

            <ul className='mt-4 space-y-3'>
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href='#'
                    className='text-sm text-gray-500 transition hover:text-brand-pink'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className='hidden md:block'>
            <h3 className='text-sm font-semibold text-gray-900'>Company</h3>

            <ul className='mt-4 space-y-3'>
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href='#'
                    className='text-sm text-gray-500 transition hover:text-brand-pink'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className='hidden md:block'>
            <h3 className='text-sm font-semibold text-gray-900'>Legal</h3>

            <ul className='mt-4 space-y-3'>
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href='#'
                    className='text-sm text-gray-500 transition hover:text-brand-pink'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='mt-8 border-t border-gray-100 pt-6 md:mt-12'>
          <div className='flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left'>
            {/* Copyright */}
            <p className='text-sm text-gray-400'>
              © 2026 Dev Stack. All rights reserved.
            </p>

            {/* Privacy + Terms */}
            <div className='flex items-center gap-5'>
              <a
                href='#'
                className='text-sm text-gray-400 transition hover:text-gray-700'>
                Privacy
              </a>

              <a
                href='#'
                className='text-sm text-gray-400 transition hover:text-gray-700'>
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
