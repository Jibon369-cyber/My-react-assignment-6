const productLinks = ["Technologies", "Projects", "Resources", "Documentation"];

const companyLinks = ["About Us", "Careers", "Contact", "Blog"];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className='border-t border-gray-200 bg-white'>
      <div className='mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16'>
        {/* Main Footer */}
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]'>
          {/* Brand */}
          <div>
            <a
              href='#'
              className='text-2xl font-bold bg-linear-to-r from-brand-orange via-brand-pink to-brand-violet bg-clip-text text-transparent'>
              Dev Stack
            </a>

            <p className='mt-4 max-w-sm text-sm leading-6 text-gray-500'>
              Explore modern technologies, build your development stack, and
              grow your skills as a developer.
            </p>

            {/* Social Links */}
            <div className='mt-6 flex items-center gap-3'>
              <a
                href='#'
                aria-label='GitHub'
                className='flex p-2 items-center justify-center rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 transition hover:border-gray-300 hover:bg-gray-50'>
                GitHub
              </a>

              <a
                href='#'
                aria-label='LinkedIn'
                className='flex p-2 items-center justify-center rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 transition hover:border-gray-300 hover:bg-gray-50'>
                Twiter
              </a>

              <a
                href='#'
                aria-label='Twitter'
                className='flex p-2 items-center justify-center rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 transition hover:border-gray-300 hover:bg-gray-50'>
                    Linkedin
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className='text-sm font-semibold text-gray-900'>Product</h3>

            <ul className='mt-4 space-y-3'>
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href='#'
                    className='text-sm text-gray-500 transition hover:text-gray-900'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className='text-sm font-semibold text-gray-900'>Company</h3>

            <ul className='mt-4 space-y-3'>
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href='#'
                    className='text-sm text-gray-500 transition hover:text-gray-900'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='text-sm font-semibold text-gray-900'>Legal</h3>

            <ul className='mt-4 space-y-3'>
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href='#'
                    className='text-sm text-gray-500 transition hover:text-gray-900'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className='mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-xs text-gray-400'>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className='flex flex-wrap gap-5'>
            <a
              href='#'
              className='text-xs text-gray-400 transition hover:text-gray-700'>
              Privacy
            </a>

            <a
              href='#'
              className='text-xs text-gray-400 transition hover:text-gray-700'>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
