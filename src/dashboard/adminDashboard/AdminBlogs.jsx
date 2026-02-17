import { useState, useEffect } from "react";
import {
  HiOutlinePlus,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineSearch,
  HiOutlinePhotograph,
  HiOutlineX,
  HiOutlineEye,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "Admin",
    category: "General",
    image: null,
  });

  // Mock data for demonstration (replace with actual API calls)
  useEffect(() => {
    setBlogs([
      {
        _id: "1",
        title: "Modern Fashion Trends 2026",
        author: "Admin",
        category: "Fashion",
        createdAt: new Date().toISOString(),
        image: {
          url: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
        },
      },
      {
        _id: "2",
        title: "The Art of Minimalist Styling",
        author: "Admin",
        category: "Style",
        createdAt: new Date().toISOString(),
        image: {
          url: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
        },
      },
    ]);
  }, []);

  const handleOpenModal = (blog = null) => {
    if (blog) {
      setEditingBlog(blog);
      setFormData({
        title: blog.title,
        content: blog.content || "",
        author: blog.author,
        category: blog.category,
        image: null, // Can't set file input programmatically
      });
    } else {
      setEditingBlog(null);
      setFormData({
        title: "",
        content: "",
        author: "Admin",
        category: "General",
        image: null,
      });
    }
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      setBlogs(blogs.filter((b) => b._id !== id));
      // Add actual delete API call here
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const newBlogData = {
        _id: editingBlog
          ? editingBlog._id
          : Math.random().toString(36).substr(2, 9),
        title: formData.title,
        author: formData.author,
        category: formData.category,
        createdAt: editingBlog
          ? editingBlog.createdAt
          : new Date().toISOString(),
        image: formData.image
          ? { url: URL.createObjectURL(formData.image) }
          : editingBlog
            ? editingBlog.image
            : { url: "" },
      };

      if (editingBlog) {
        setBlogs(
          blogs.map((b) => (b._id === editingBlog._id ? newBlogData : b)),
        );
      } else {
        setBlogs([newBlogData, ...blogs]);
      }

      setIsLoading(false);
      setIsModalOpen(false);
    }, 1000);
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Blog Management
          </h1>
          <p className="text-gray-500 mt-1">
            Create, edit, and manage your website articles.
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-[var(--color-primary-light)] transition-all shadow-lg shadow-[var(--color-primary)]/20"
        >
          <HiOutlinePlus className="w-5 h-5" />
          <span>Write New Post</span>
        </button>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by title or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 ring-[var(--color-primary)]/20 outline-none transition-all"
          />
        </div>
      </div>

      {/* Blogs Table/Grid */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Article
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredBlogs.map((blog) => (
                <tr
                  key={blog._id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-100">
                        <img
                          src={blog.image.url}
                          alt={blog.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                      <div className="max-w-[200px] md:max-w-xs">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {blog.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          By {blog.author}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
                      {blog.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="p-2 text-gray-400 hover:text-[var(--color-primary)] hover:bg-gray-100 rounded-lg transition-all"
                        title="View Post"
                      >
                        <HiOutlineEye className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleOpenModal(blog)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all"
                        title="Edit Post"
                      >
                        <HiOutlinePencil className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-all"
                        title="Delete Post"
                      >
                        <HiOutlineTrash className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredBlogs.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    No articles found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Editor Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingBlog ? "Edit Article" : "Write New Article"}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <HiOutlineX className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-6 space-y-6 overflow-y-auto"
              >
                <div className="space-y-4">
                  {/* Image Upload Area */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Cover Image
                    </label>
                    <div className="relative group">
                      <div className="w-full h-48 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-2 group-hover:border-[var(--color-primary)]/50 transition-all overflow-hidden relative">
                        {formData.image ? (
                          <img
                            src={URL.createObjectURL(formData.image)}
                            className="w-full h-full object-cover"
                            alt="Preview"
                          />
                        ) : editingBlog && editingBlog.image.url ? (
                          <img
                            src={editingBlog.image.url}
                            className="w-full h-full object-cover"
                            alt="Existing"
                          />
                        ) : (
                          <>
                            <HiOutlinePhotograph className="w-10 h-10 text-gray-300 group-hover:text-[var(--color-primary)]/50 transition-colors" />
                            <p className="text-xs text-gray-400 font-medium">
                              Click to upload or drag & drop
                            </p>
                            <p className="text-[10px] text-gray-300">
                              SVG, PNG, JPG (max. 5MB)
                            </p>
                          </>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              image: e.target.files[0],
                            })
                          }
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Title
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 ring-[var(--color-primary)]/20 outline-none transition-all"
                        placeholder="Article title"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 ring-[var(--color-primary)]/20 outline-none transition-all"
                      >
                        <option>Fashion</option>
                        <option>Style</option>
                        <option>Lifestyle</option>
                        <option>Trends</option>
                        <option>General</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Content
                    </label>
                    <textarea
                      required
                      value={formData.content}
                      onChange={(e) =>
                        setFormData({ ...formData, content: e.target.value })
                      }
                      rows="6"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 ring-[var(--color-primary)]/20 outline-none transition-all resize-none"
                      placeholder="Write your article content here..."
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-600 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 px-4 py-2.5 bg-[var(--color-primary)] text-white rounded-xl text-sm font-semibold hover:bg-[var(--color-primary-light)] transition-all shadow-md shadow-[var(--color-primary)]/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : editingBlog ? (
                      "Save Changes"
                    ) : (
                      "Publish Article"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminBlogs;
