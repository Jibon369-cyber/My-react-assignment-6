interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Technologies",
    href: "#technologies",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='border-t border-gray-100 bg-white lg:hidden'>
      <nav className='mx-auto max-w-6xl px-4 py-4 sm:px-6'>
        <div className='flex flex-col'>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className='border-b border-gray-100 py-3 text-sm font-medium text-gray-700 transition hover:text-brand-pink'>
              {link.label}
            </a>
          ))}

          <div className='mt-4 flex gap-3'>
            <button className='flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700'>
              Sign In
            </button>

            <button className='flex-1 rounded-lg bg-linear-to-r from-brand-orange via-brand-pink to-brand-violet px-4 py-2.5 text-sm font-semibold text-white'>
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
