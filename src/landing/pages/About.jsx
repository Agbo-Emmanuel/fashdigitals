import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineGlobeAlt, HiOutlinePresentationChartLine } from 'react-icons/hi';
import logo from '../../assets/logo.png';

const About = () => {
  const values = [
    {
      title: 'Data-Driven',
      desc: 'We rely on analytics and testing, not guesses, to drive our strategies.',
      icon: <HiOutlinePresentationChartLine />
    },
    {
      title: 'Growth Focused',
      desc: 'Our primary goal is the sustainable growth and ROI of our clients.',
      icon: <HiOutlineLightBulb />
    },
    {
      title: 'Transparent',
      desc: 'Clear reporting and honest communication are at our core.',
      icon: <HiOutlineGlobeAlt />
    },
    {
      title: 'Collaborative',
      desc: 'We work as an extension of your team, not just a service provider.',
      icon: <HiOutlineUserGroup />
    }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Empowering Brands to <span className="text-primary">Win Digital</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed mb-8">
              Fashdigitals was founded on a simple principle: digital marketing should be measurable, transparent, and focused on growth. We combine creative design with technical excellence to deliver results that matter.
            </p>
            <div className="flex gap-12">
              <div>
                <div className="text-3xl font-extrabold text-primary">5+</div>
                <p className="text-text-muted">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary">150+</div>
                <p className="text-text-muted">Happy Clients</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="relative aspect-square max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-12 flex items-center justify-center">
              <img src={logo} alt="Fashdigitals Vision" className="w-full h-auto opacity-10 animate-pulse absolute" />
              <div className="text-center z-10">
                <div className="text-primary text-6xl mb-6 flex justify-center"><HiOutlineLightBulb /></div>
                <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
                <p className="text-text-muted">Constantly evolving our methods to stay ahead of the digital curve.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">The Values That Drive Us</h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            These core principles guide every campaign we launch and every website we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 border-t-4 border-t-primary"
            >
              <div className="text-4xl text-primary mb-6">{v.icon}</div>
              <h3 className="text-xl font-bold mb-4">{v.title}</h3>
              <p className="text-text-muted leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
