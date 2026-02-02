import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    'Performance Marketing',
    'SEO Optimization',
    'Web Development',
    'Brand Design',
    'Social Media',
    'Content Marketing'
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' }
  ];

  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-white p-1 rounded-md">
                <img src={logo} alt="Fashdigitals" className="h-8 w-auto" />
              </div>
              <span className="font-bold text-2xl tracking-tight">Fashdigitals</span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Leading digital marketing agency focused on driving measurable results and sustainable growth for modern brands.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-smooth"><FaFacebook size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-smooth"><FaTwitter size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-smooth"><FaLinkedin size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-smooth"><FaInstagram size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 underline decoration-accent underline-offset-8">Our Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-300 hover:text-accent transition-smooth">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 underline decoration-accent underline-offset-8">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-accent transition-smooth">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 underline decoration-accent underline-offset-8">Contact Us</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex flex-col">
                <span className="text-xs uppercase text-accent font-bold">Email</span>
                <a href="mailto:hello@fashdigitals.com" className="hover:text-white transition-smooth">hello@fashdigitals.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs uppercase text-accent font-bold">Phone</span>
                <a href="tel:+23412345678" className="hover:text-white transition-smooth">+234 (0) 123 4567</a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs uppercase text-accent font-bold">Location</span>
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© {currentYear} Fashdigitals. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white transition-smooth">Privacy</Link>
            <Link to="#" className="hover:text-white transition-smooth">Terms</Link>
            <Link to="#" className="hover:text-white transition-smooth">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
