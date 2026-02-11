import { motion } from 'framer-motion';
import { 
  HiOutlineChartBar, HiOutlineSearch, HiOutlineCode, HiOutlinePencilAlt, 
  HiOutlineUserGroup, HiOutlineDocumentText, HiOutlineLightningBolt, 
  HiOutlineMail, HiOutlineDeviceMobile, HiOutlinePresentationChartLine, 
  HiOutlineLightBulb 
} from 'react-icons/hi';
import heroImg from '../../assets/hero_image_carousel3.jpg';

const Services = () => {
  const allServices = [
    {
      title: 'Performance Marketing',
      description: 'We plan, launch, and optimize high-impact paid advertising campaigns focused on measurable results. From lead generation to e-commerce sales and app installs, our campaigns are driven by data, testing, and continuous optimization.',
      icon: <HiOutlineChartBar />,
      platforms: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'LinkedIn Ads']
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'We help your business rank higher on search engines and attract quality organic traffic that converts. Covers keyword research, on-page optimization, technical SEO, content optimization, and link building.',
      icon: <HiOutlineSearch />,
      tag: 'Sustainable Growth'
    },
    {
      title: 'Web Design & Development',
      description: 'We design and build fast, responsive, and conversion-focused websites. From landing pages to full corporate websites and e-commerce platforms, we prioritize UX, speed, and scalability.',
      icon: <HiOutlineCode />,
      tag: 'SEO-Ready'
    },
    {
      title: 'Brand Design & Creative',
      description: 'We create visually compelling designs that communicate your brand clearly. Includes identity design, UI/UX, ad creatives, social media graphics, and marketing visuals.',
      icon: <HiOutlinePencilAlt />
    },
    {
      title: 'Social Media Marketing',
      description: 'Develop strategies that grow your audience, increase engagement, and support sales goals. From content planning to community management and paid social.',
      icon: <HiOutlineUserGroup />
    },
    {
      title: 'Content Marketing',
      description: 'Craft high-quality content that attracts, educates, and converts your ideal audience. Blog articles, website copy, landing page content, and video scripts.',
      icon: <HiOutlineDocumentText />
    },
    {
      title: 'Conversion Rate Optimization',
      description: 'Refine your funnel to get more results from existing traffic using analytics, heatmaps, and A/B testing to improve UX and increase conversions.',
      icon: <HiOutlineLightningBolt />
    },
    {
      title: 'Email & CRM Marketing',
      description: 'Automated email campaigns and CRM workflows that nurture leads and retain customers. Welcome sequences, re-engagement, and sales automation.',
      icon: <HiOutlineMail />
    },
    {
      title: 'App Growth & UA',
      description: 'Support mobile apps with strategic user acquisition, onboarding optimization, and retention campaigns. Lowering CPI while increasing LTV.',
      icon: <HiOutlineDeviceMobile />
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track, measure, and report on all marketing activities. Clear insights into performance, ROI, and opportunities for growth—no guesswork, just data.',
      icon: <HiOutlinePresentationChartLine />
    },
    {
      title: 'Digital Strategy & Consulting',
      description: 'Audits, competitor analysis, and strategic planning to provide a clear roadmap to scale your marketing efforts efficiently.',
      icon: <HiOutlineLightBulb />
    }
  ];

  return (
    <div className="overflow-hidden bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        {/* Background Image with Homepage Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Digital Solutions" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Multi-layered Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/90 z-10"></div>
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-black/20 z-10"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary-light uppercase bg-primary/20 backdrop-blur-md rounded-full border border-primary/30"
            >
              Our Expert Solutions
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-white"
            >
              Digital Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Modern Growth</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              We offer a comprehensive suite of digital marketing and development services designed to help your brand compete and win in the digital age.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-20 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-8 group hover:bg-white/10 border-white/10 bg-white/5 transition-smooth"
            >
              <div className="text-4xl text-primary-light mb-6 transition-smooth">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white transition-smooth">{service.title}</h3>
              <p className="text-gray-400 mb-6 transition-smooth">
                {service.description}
              </p>
              {service.platforms && (
                <div className="flex flex-wrap gap-2">
                  {service.platforms.map(p => (
                    <span key={p} className="px-3 py-1 bg-primary/20 text-primary-light text-xs font-bold rounded-full">
                      {p}
                    </span>
                  ))}
                </div>
              )}
              {service.tag && (
                <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full">
                  {service.tag}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Services;
