import {
  HiOutlineDocumentText,
  HiOutlinePhotograph,
  HiOutlineTag,
  HiOutlineChartBar,
  HiOutlineDotsVertical,
  HiOutlinePlus,
} from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AdminOverview = () => {
  const stats = [
    {
      title: "Total Articles",
      value: "42",
      change: "+3 this month",
      icon: <HiOutlineDocumentText className="w-6 h-6" />,
      color: "blue",
    },
    {
      title: "Published Articles",
      value: "38",
      change: "On track",
      icon: <HiOutlineChartBar className="w-6 h-6" />,
      color: "emerald",
    },
    {
      title: "Total Categories",
      value: "12",
      change: "+1 new category",
      icon: <HiOutlineTag className="w-6 h-6" />,
      color: "purple",
    },
    {
      title: "Media Assets",
      value: "128",
      change: "2.4GB used",
      icon: <HiOutlinePhotograph className="w-6 h-6" />,
      color: "amber",
    },
  ];

  const recentBlogs = [
    {
      id: 1,
      title: "Modern Fashion Trends 2026",
      author: "Admin",
      category: "Fashion",
      status: "Published",
      date: "2 mins ago",
    },
    {
      id: 2,
      title: "The Art of Minimalist Styling",
      author: "Admin",
      category: "Style",
      status: "Published",
      date: "1 hour ago",
    },
    {
      id: 3,
      title: "Sustainable Fabrics in Tech",
      author: "Admin",
      category: "Lifestyle",
      status: "Draft",
      date: "3 hours ago",
    },
    {
      id: 4,
      title: "Future of Digital Design",
      author: "Admin",
      category: "Trends",
      status: "Published",
      date: "5 hours ago",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Blog Overview
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your website's information and articles from here.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/admin-blogs"
            className="px-5 py-2.5 bg-[var(--color-primary)] text-white rounded-xl text-sm font-semibold hover:bg-[var(--color-primary-light)] transition-all shadow-lg shadow-[var(--color-primary)]/20 flex items-center gap-2"
          >
            <HiOutlinePlus className="w-5 h-5" />
            Write New Article
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
          >
            <div
              className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 opacity-5 rounded-full transition-transform group-hover:scale-110 bg-${stat.color}-500`}
            />
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-3 rounded-xl bg-${stat.color}-50 text-${stat.color}-600`}
              >
                {stat.icon}
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-lg ${
                  stat.color === "emerald"
                    ? "text-emerald-600 bg-emerald-50"
                    : "text-blue-600 bg-blue-50"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {stat.value}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Blogs Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Recent Articles</h3>
            <Link
              to="/admin-blogs"
              className="text-[var(--color-primary)] text-sm font-medium hover:underline"
            >
              Manage All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentBlogs.map((blog) => (
                  <tr
                    key={blog.id}
                    className="hover:bg-gray-50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="max-w-xs">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {blog.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          By {blog.author}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
                        {blog.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          blog.status === "Published"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {blog.date}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <HiOutlineDotsVertical className="text-gray-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Blog Performance / Health */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            Article Statistics
          </h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">
                Media Storage
              </span>
              <span className="text-sm font-bold text-gray-900">48% used</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-[var(--color-primary)] h-2 rounded-full w-[48%] shadow-sm" />
            </div>

            <div className="pt-6 border-t border-gray-50">
              <h4 className="text-sm font-semibold text-gray-900 mb-4">
                Top Categories
              </h4>
              <div className="space-y-3">
                {[
                  { name: "Fashion", count: 18, color: "blue" },
                  { name: "Style", count: 12, color: "purple" },
                  { name: "Lifestyle", count: 7, color: "emerald" },
                  { name: "Trends", count: 5, color: "amber" },
                ].map((cat) => (
                  <div
                    key={cat.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full bg-${cat.color}-500`}
                      />
                      <span className="text-xs font-medium text-gray-600">
                        {cat.name}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-gray-900">
                      {cat.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-50">
              <Link
                to="/admin-blogs"
                className="block text-center p-3 bg-gray-50 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-100 transition-colors"
              >
                Quick Publish Article
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
