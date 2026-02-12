import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '../data/blogs';
import { HiArrowLeft, HiCalendar, HiUser, HiTag } from 'react-icons/hi';
import { useEffect } from 'react';
import heroImg from '../../assets/hero_image_carousel5.jpg';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="pt-32 pb-20 text-center bg-black min-h-screen">
        <h1 className="text-4xl font-bold mb-4 text-white">Blog Post Not Found</h1>
        <Link to="/blog" className="text-accent font-bold">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-black min-h-screen">
      {/* Blog Detail Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt={blog.title} 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black z-10"></div>
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-smooth font-medium">
              <HiArrowLeft /> Back to Blog
            </Link>
          </motion.div>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="bg-primary/30 backdrop-blur-md text-primary-light text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-primary/30">
                {blog.category}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-8 leading-tight text-white"
            >
              {blog.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-6 text-gray-400 border-t border-white/10 pt-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white shadow-lg">
                  {blog.author.charAt(0)}
                </div>
                <span>By <span className="text-white font-bold">{blog.author}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <HiCalendar className="text-accent" />
                <span>Published on {blog.date}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="container mx-auto px-4 md:px-8 py-20 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8"
          >
            <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl border border-white/5 relative group">
              <img src={blog.image} alt={blog.title} className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
            
            <div 
              className="max-w-none text-gray-300 leading-relaxed space-y-8 [&>p]:text-lg [&>p]:md:text-xl [&>h2]:text-3xl [&>h2]:md:text-4xl [&>h2]:font-extrabold [&>h2]:text-white [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:tracking-tight"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </motion.div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="glass-card p-8 bg-white/5 border border-white/10 rounded-3xl sticky top-32">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/10 text-white">About the Author</h3>
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{blog.author}</h4>
                    <p className="text-sm text-accent">Digital Marketing Expert</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Expert in performance marketing and SEO optimization with over 10 years of experience helping brands scale.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/10 text-white">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {['Marketing', 'SEO', 'PPC', 'Branding', 'Social Media', 'Content Strategy'].map((cat) => (
                    <span key={cat} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-400 hover:bg-primary/30 hover:text-white hover:border-accent/30 transition-smooth cursor-pointer">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-dark to-black rounded-3xl p-8 text-white border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Need help growing your business?</h3>
                  <p className="text-gray-400 mb-6 text-sm">
                    Get a free digital audit and custom roadmap today.
                  </p>
                  <Link to="/contact" className="inline-block w-full py-4 bg-accent hover:bg-yellow-500 text-primary-dark font-bold rounded-xl text-center transition-smooth shadow-lg hover:scale-[1.02] active:scale-[0.98] transform">
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
