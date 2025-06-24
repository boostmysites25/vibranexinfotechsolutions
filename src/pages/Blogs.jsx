import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { blogs } from "../content/blogs";
import PageBanner from "../components/website/PageBanner";
import banner from "../assets/videos/blogs.mp4";

const Blogs = () => {
  return (
    <div className="mt-[5.5rem] lg:mt-[9rem] min-h-screen text-white max-w-[100vw]">
      <PageBanner
        banner={banner}
        title="Blogs"
        links={[{ title: "Home", url: "/" }, { title: "Blogs" }]}
      />

      {/* Glowing Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 mb-8 md:mb-12" />

      {/* Blog Grid */}
      <div className="wrapper pb-12 md:pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="h-52 md:h-72 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center text-sm text-gray-400 mb-3 gap-4">
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {blog.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {blog.content.replace(/<[^>]*>"?/gm, "").substring(0, 150)}...
                </p>
                <Link
                  to={`/blogs/${blog.link}`}
                  className="inline-flex items-center text-secondary hover:text-white transition-colors duration-300"
                >
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
