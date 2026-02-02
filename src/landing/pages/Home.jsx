import { motion } from 'framer-motion';
import { HiArrowRight, HiOutlineChartBar, HiOutlineSearch, HiOutlineCode, HiOutlinePresentationChartLine } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'Performance Marketing',
      description: 'We plan, launch, and optimize high-impact paid advertising campaigns focused on measurable results.',
      icon: <HiOutlineChartBar className="text-4xl text-primary" />,
      link: '/services'
    },
    {
      title: 'SEO Optimization',
      description: 'We help your business rank higher on search engines and attract quality organic traffic that converts.',
      icon: <HiOutlineSearch className="text-4xl text-primary" />,
      link: '/services'
    },
    {
      title: 'Web Development',
      description: 'We design and build fast, responsive, and conversion-focused websites that turn visitors into customers.',
      icon: <HiOutlineCode className="text-4xl text-primary" />,
      link: '/services'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-purple-50">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full"
            >
              Leading Digital Agency
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight text-primary-dark"
            >
              Scale Your Business With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Data-Driven</span> Marketing
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              We help brands grow through high-impact advertising, technical SEO, and conversion-focused development. No guesswork, just results.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn-primary flex gap-2">
                Launch Your Campaign <HiArrowRight />
              </Link>
              <Link to="/services" className="btn-outline">
                Explore Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Our Core Expertise</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your unique business goals.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card p-8 hover:transform hover:-translate-y-2 transition-smooth group"
            >
              <div className="mb-6 p-4 bg-primary/5 rounded-2xl inline-block group-hover:bg-primary group-hover:text-white transition-smooth">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link to={service.link} className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <HiArrowRight />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">95%</div>
              <p className="text-gray-400">Client Retention</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">500+</div>
              <p className="text-gray-400">Campaigns Launched</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">10M+</div>
              <p className="text-gray-400">Ad Spend Managed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">300%</div>
              <p className="text-gray-400">Avg. ROI Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-20 pb-32">
        <div className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full -ml-32 -mb-32 blur-[80px]"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to dominate your market?</h2>
            <p className="text-white/80 text-lg mb-10">
              Get a free digital audit and a custom growth roadmap for your business today.
            </p>
            <Link to="/contact" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-smooth shadow-xl inline-flex items-center gap-2 mx-auto">
              Book a Strategy Call <HiOutlinePresentationChartLine />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;