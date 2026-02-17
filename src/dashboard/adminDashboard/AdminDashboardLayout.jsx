import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  HiOutlineViewGrid,
  HiOutlineUsers,
  HiOutlineShoppingBag,
  HiOutlineDocumentText,
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlineMenuAlt2,
  HiOutlineX,
  HiOutlineBell,
  HiOutlineSearch,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const AdminDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      title: "Overview",
      icon: <HiOutlineViewGrid className="w-5 h-5" />,
      path: "/admin-overview",
    },
    // {
    //   title: "Users",
    //   icon: <HiOutlineUsers className="w-5 h-5" />,
    //   path: "/admin-users",
    // },
    // {
    //   title: "Products",
    //   icon: <HiOutlineShoppingBag className="w-5 h-5" />,
    //   path: "/admin-products",
    // },
    {
      title: "Blogs",
      icon: <HiOutlineDocumentText className="w-5 h-5" />,
      path: "/admin-blogs",
    },
    {
      title: "Settings",
      icon: <HiOutlineCog className="w-5 h-5" />,
      path: "/admin-settings",
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-[var(--color-surface)] overflow-hidden font-sans">
      {/* Sidebar - Desktop */}
      <aside
        className={`hidden md:flex flex-col bg-[var(--color-primary-dark)] text-white transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold tracking-wider"
            >
              FASH ADMIN
            </motion.h1>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <HiOutlineMenuAlt2 className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 mt-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-3 rounded-xl transition-all duration-200 group ${
                isActive(item.path)
                  ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/30"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {isSidebarOpen && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="ml-3 font-medium whitespace-nowrap"
                >
                  {item.title}
                </motion.span>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <button className="flex items-center w-full p-3 text-white/70 hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-all group">
            <HiOutlineLogout className="w-5 h-5 flex-shrink-0" />
            {isSidebarOpen && <span className="ml-3 font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Mobile */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-y-0 left-0 w-72 bg-[var(--color-primary-dark)] text-white z-50 md:hidden flex flex-col"
      >
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <h1 className="text-xl font-bold tracking-wider text-white">
            FASH ADMIN
          </h1>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <HiOutlineX className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 mt-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center p-4 rounded-xl transition-all duration-200 ${
                isActive(item.path)
                  ? "bg-[var(--color-primary)] text-white shadow-lg"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              <span className="ml-3 font-medium">{item.title}</span>
            </Link>
          ))}
        </nav>
        <div className="p-6">
          <button className="flex items-center w-full p-4 text-white/70 hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-all">
            <HiOutlineLogout className="w-5 h-5" />
            <span className="ml-3 font-medium">Logout</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-20 flex items-center justify-between px-6 bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <HiOutlineMenuAlt2 className="w-6 h-6 text-gray-600" />
            </button>
            <div className="hidden sm:flex items-center bg-gray-100 px-4 py-2 rounded-xl w-64 md:w-80 group focus-within:ring-2 ring-[var(--color-primary)]/20 transition-all">
              <HiOutlineSearch className="text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 bg-transparent border-none outline-none text-sm w-full text-gray-700"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors">
              <HiOutlineBell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="hidden md:block text-right">
                <p className="text-sm font-semibold text-gray-900 leading-tight">
                  Admin User
                </p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-white font-bold shadow-md">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
