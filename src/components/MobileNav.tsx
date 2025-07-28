import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
// Note: If you get module not found error, run `npm install framer-motion` or `yarn add framer-motion` to install the dependency
// If you still have type declaration issues, run `npm install --save-dev @types/framer-motion` to install type declarations
// Note: If you get module not found error, run `npm install framer-motion` or `yarn add framer-motion` to install the dependency
import { siteConfig } from '@/config/site';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 0.5,
    },
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={toggleMenu}
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
          role="img"
          aria-labelledby="menu-icon-title"
        >
          <title id="menu-icon-title">Menu</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black"
              onClick={toggleMenu}
            />
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-64 bg-background p-6 shadow-lg"
            >
              <nav className="flex flex-col space-y-4">
                {siteConfig.navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
