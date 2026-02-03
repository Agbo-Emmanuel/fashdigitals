import { motion } from 'framer-motion';
import { HiArrowRight, HiOutlineChartBar, HiOutlineSearch, HiOutlineCode, HiOutlinePresentationChartLine } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

  const videos = [
    {
      title: "The Fashdigitals Approach",
      subtitle: "Strategy & Vision",
      duration: "02:45",
      thumbnail: "/src/assets/video_thumbnail_marketing.png"
    },
    {
      title: "Data-Driven Performance",
      subtitle: "Analytics & ROI",
      duration: "03:15",
      thumbnail: "/src/assets/video_thumbnail_marketing.png"
    },
    {
      title: "Creative Storytelling",
      subtitle: "Brand Identity",
      duration: "02:30",
      thumbnail: "/src/assets/video_thumbnail_marketing.png"
    },
    {
      title: "Technical Excellence",
      subtitle: "Web & SEO",
      duration: "04:00",
      thumbnail: "/src/assets/video_thumbnail_marketing.png"
    },
    {
      title: "Client Success Stories",
      subtitle: "Testimonials",
      duration: "05:20",
      thumbnail: "/src/assets/video_thumbnail_marketing.png"
    },
    {
      title: "Scaling New Frontiers",
      subtitle: "Future Tech",
      duration: "03:45",
      thumbnail: "/src/assets/video_thumbnail_marketing.png"
    },
    {
      title: "Behind the Scenes",
      subtitle: "Our Culture",
      duration: "02:15",
      thumbnail: "/src/assets/video_thumbnail_marketing.png"
    }
  ];

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
              <div className="mb-6 p-4 bg-primary/5 rounded-2xl inline-block group-hover:text-white transition-smooth">
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

      {/* Video Carousel Section */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full"
            >
              Watch Our Impact
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Experience <span className="text-primary">Fashdigitals in Action</span></h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Explore our journey, our methodology, and the results we deliver through our curated video showcase.
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="video-swiper !pb-12"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent opacity-0 blur-xl group-hover:opacity-20 transition-smooth"></div>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-black">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-2xl hover:scale-110 transition-smooth group/btn">
                        <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="glass-card p-4 flex items-center justify-between !rounded-xl !bg-white/40">
                        <div>
                          <p className="text-sm font-bold text-primary-dark truncate">{video.title}</p>
                          <p className="text-[10px] text-text-muted uppercase tracking-wider">{video.subtitle}</p>
                        </div>
                        <div className="text-primary font-bold text-xs">{video.duration}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
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