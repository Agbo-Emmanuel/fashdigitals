import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-5' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Fashdigitals Logo" className="h-10 w-auto" />
            <span className={`font-bold text-xl tracking-tight hidden sm:block ${isScrolled ? 'text-primary' : 'text-primary'}`}>
              Fashdigitals
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-smooth hover:text-primary-light ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-3xl text-primary p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            {/* Backdrop with blur */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            ></div>
            
            {/* Menu Content */}
            <div className="absolute top-0 right-0 w-[80%] max-w-sm h-full bg-primary-dark/90 shadow-2xl flex flex-col p-8 border-l border-white/10">
              <div className="flex items-center justify-between mb-12">
                <span className="text-white font-bold text-xl uppercase tracking-widest">Menu</span>
                <button 
                  className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  <HiX className="text-2xl" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl font-bold transition-smooth ${
                        location.pathname === link.path ? 'text-accent' : 'text-gray-300 hover:text-white'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Link 
                    to="/contact" 
                    className="btn-primary w-full text-lg py-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </nav>

              <div className="mt-auto items-center justify-center flex flex-col">
                 <img src={logo} alt="Fashdigitals Logo" className="h-12 w-auto opacity-50 mb-4" />
                 <p className="text-gray-500 text-xs text-center font-medium tracking-widest uppercase">
                    Fashdigitals Agency
                 </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
