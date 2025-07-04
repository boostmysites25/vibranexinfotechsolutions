import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { blogs } from "../content/blogs";
import PageBanner from "../components/website/PageBanner";
import banner from "../assets/videos/blogs.mp4";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../utils/api";

const Blogs = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await getBlogs();
      return response.data.blogs;
    },
  });

  const blogs = data || [];
  return (
    <div className="mt-[5.5rem] lg:mt-[9rem] min-h-screen text-white max-w-[100vw]">
      <PageBanner
        banner={banner}
        title="Blogs"
        links={[{ title: "Home", url: "/" }, { title: "Blogs" }]}
      />

      {/* Glowing Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 mb-8 md:mb-12" />

      {isLoading && (
        <div className="mt-[2rem] w-full text-center">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-secondary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          <p className="mt-4 text-lg">Loading blogs...</p>
        </div>
      )}
      {error && (
        <div className="mt-[2rem] w-full text-center">
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">
              {" "}
              Failed to load blogs. Please try again later.
            </span>
          </div>
        </div>
      )}

      {!isLoading && !error && blogs.length === 0 && (
        <div className="mt-[2rem] w-full text-center">
          <p className="text-lg">
            No blogs found. Check back later for new content!
          </p>
        </div>
      )}

      {/* Blog Grid */}
      {!isLoading && !error && blogs.length > 0 && (
        <div className="wrapper pb-12 md:pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;

const BlogItem = ({ blog }) => {
  const formattedDate = new Date(
    blog.publishDate || blog.createdAt
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <motion.div
      key={blog.slug}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
      whileHover={{ y: -10 }}
    >
      <div className="h-52 md:h-72 overflow-hidden">
        <img
          src={blog.imageUrl}
          alt={blog.imageAlt || blog.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center text-sm text-gray-400 mb-3 gap-4">
          <span className="flex items-center">
            <FaCalendarAlt className="mr-2" />
            {formattedDate}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">
          {blog.excerpt || blog.metaDescription || "No description available"}
        </p>
        <Link
          to={`/blogs/${blog.slug}`}
          className="inline-flex items-center text-secondary hover:text-white transition-colors duration-300"
        >
          Read More <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};
