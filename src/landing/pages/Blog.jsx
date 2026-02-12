import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { HiArrowRight, HiCalendar, HiUser } from 'react-icons/hi';
import heroImg from '../../assets/hero_image_carousel4.jpg';

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="overflow-hidden bg-black min-h-screen">
      {/* Blog Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        {/* Background Image with Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Fashdigitals Insights" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Multi-layered Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/90 z-10"></div>
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-black/20 z-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="w-full text-center flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary-light uppercase bg-primary/20 backdrop-blur-md rounded-full border border-primary/30">
                Insights & News
              </span>
              <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-white">
                The Fashdigitals <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl text-center mx-auto">
                Stay updated with the latest trends in digital marketing, SEO, and business growth strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 md:px-8 py-20 bg-black">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.div 
              key={blog.id}
              variants={itemVariants}
              className="glass-card flex flex-col h-full hover:shadow-2xl transition-smooth group bg-white/5 border-white/10"
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <HiCalendar className="text-accent" /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiUser className="text-accent" /> {blog.author}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-smooth">
                  {blog.title}
                </h2>
                
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    to={`/blog/${blog.id}`} 
                    className="text-accent font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More <HiArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 md:px-8 mb-20 bg-black">
        <div className="bg-gradient-to-br from-primary-dark to-black rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-light/10 rounded-full -ml-32 -mt-32 blur-[80px]"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mb-32 blur-[80px]"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-primary-light">Subscribe to our newsletter</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Get the latest marketing insights and agency updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50 transition-smooth"
              />
              <button className="bg-accent hover:bg-yellow-500 text-primary-dark font-bold px-8 py-4 rounded-xl transition-smooth shadow-lg hover:scale-105 active:scale-95 transform">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
