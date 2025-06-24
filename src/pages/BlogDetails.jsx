import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { blogs } from "../content/blogs";
import { Helmet } from "react-helmet";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.link === slug);

  if (!blog) {
    return (
      <div className="mt-[5.5rem] lg:mt-[9rem] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Create a default description if metaDescription doesn't exist
  const metaDescription =
    blog.metaDescription ||
    `Read our blog post about ${
      blog.title
    } on Vibranex Infotech Solutionsnologies. ${blog.content
      .substring(0, 160)
      .replace(/<[^>]*>?/gm, "")}...`;

  return (
    <div className="mt-[5.5rem] lg:mt-[9rem] min-h-screen text-white max-w-[100vw]">
      {/* Meta Tags */}
      <Helmet>
        <title>{blog.title} | Vibranex Infotech Solutionsnologies</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={blog.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={blog.image} />
      </Helmet>

      {/* Back Button */}
      <div className="wrapper pt-6">
        <Link
          to="/blogs"
          className="inline-flex items-center text-gray-400 hover:text-primary transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" /> Back to Blogs
        </Link>
      </div>

      {/* Hero Section */}
      <div className="wrapper py-8 md:py-12">
        <h1 className="text1 mb-6">{blog.title}</h1>
        <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4 gap-4">
          <span className="flex items-center">
            <FaCalendarAlt className="mr-2" />
            {blog.date}
          </span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="wrapper mb-12">
        <motion.div
          className="rounded-xl overflow-hidden border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto max-h-[75vh] aspect-video object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="wrapper pb-12 md:pb-20">
        <div className="">
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700 text-center">
            <h3 className="text2 font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us today to schedule a free consultation and let's build
              your digital future together.
            </p>
            <Link
              to="/contact-us"
              className="btn-fullrounded bg-primary hover:bg-black border border-primary"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
