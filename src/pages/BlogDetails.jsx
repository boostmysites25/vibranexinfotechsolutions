import { Navigate, useParams } from "react-router-dom";
import { getBlogBySlug } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import PageBanner from "../components/website/PageBanner";
import { Helmet } from "react-helmet";
import { FaCalendarAlt, FaUser, FaTag, FaClock } from "react-icons/fa";

const BlogDetails = () => {
  const { slug } = useParams();

  // Fetch the current blog
  const {
    data: blogData,
    isLoading: blogLoading,
    error: blogError,
  } = useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const response = await getBlogBySlug(slug);
      return response.data.blog;
    },
  });

  // If blog is not found or there's an error, redirect to blogs page
  if (blogError) {
    return <Navigate to="/blogs" />;
  }

  // Format the publish date
  const formattedDate = blogData
    ? new Date(blogData.publishDate || blogData.createdAt).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      )
    : "";

  // Format the created date
  const formattedCreatedDate = blogData
    ? new Date(blogData.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      {/* SEO Optimization */}
      {blogData && (
        <Helmet>
          <title>{blogData.title} | Vibranex Infotech</title>
          <meta
            name="description"
            content={blogData.metaDescription || blogData.excerpt}
          />
          <meta
            name="keywords"
            content={
              blogData.metaKeywords?.join(", ") || blogData.tags?.join(", ")
            }
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="article" />
          <meta property="og:title" content={blogData.title} />
          <meta property="og:description" content={blogData.excerpt} />
          <meta property="og:image" content={blogData.imageUrl} />
          <meta
            property="article:published_time"
            content={blogData.publishDate}
          />
          <meta property="article:modified_time" content={blogData.updatedAt} />
          <meta
            property="article:section"
            content={blogData.categoryId?.name}
          />
          {blogData.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={blogData.title} />
          <meta name="twitter:description" content={blogData.excerpt} />
          <meta name="twitter:image" content={blogData.imageUrl} />

          {/* Canonical URL */}
          <link
            rel="canonical"
            href={`https://vibranexinfotech.com/blog/${blogData.slug}`}
          />
        </Helmet>
      )}

      <div className="mt-[5.5rem] lg:mt-[9rem] min-h-screen text-white max-w-[100vw]">
        <div className="bg-primary/5 relative text-textWhite">
          <div className="wrapper py-[5rem] relative z-10">
            {/* Loading state */}
            {blogLoading && (
              <div className="w-full text-center py-12">
                <div
                  className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-secondary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
                <p className="mt-4 text-lg">Loading blog content...</p>
              </div>
            )}

            {/* Error state */}
            {blogError && (
              <div className="w-full text-center py-12">
                <div
                  className="bg-red-900 border border-red-700 text-white px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Error!</strong>
                  <span className="block sm:inline">
                    {" "}
                    Failed to load blog content. Please try again later.
                  </span>
                </div>
              </div>
            )}

            {/* Blog content */}
            {!blogLoading && blogData && (
              <div className="flex flex-col gap-6 pb-[3rem] p-4 sm:p-8 bg-bgGrey/80 rounded-xl mb-[3rem] shadow-large">
                {/* Featured Image */}
                <img
                  data-aos="fade-up"
                  src={blogData.imageUrl}
                  alt={blogData.imageAlt || blogData.title}
                  className="w-full rounded-xl object-cover aspect-[16/9] max-h-[70vh]"
                />

                {/* Blog Header Info */}
                <div className="flex flex-col gap-4">
                  {/* Category and Date */}
                  <div
                    data-aos="fade-up"
                    className="flex flex-wrap justify-between items-center font-light mt-[0.8rem]"
                  >
                    <div className="rounded-2xl bg-secondary text-primary font-medium px-4 py-1.5 text-sm w-fit">
                      {blogData.categoryId?.name || "Uncategorized"}
                    </div>
                    <div className="flex items-center text-secondary text-sm">
                      <FaCalendarAlt className="mr-2" />
                      <span>{formattedDate}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h1
                    data-aos="fade-up"
                    className="text-3xl md:text-4xl font-bold leading-tight mt-2"
                  >
                    {blogData.title}
                  </h1>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-gray-300 border-b border-secondary/20 pb-6">
                    {/* Author */}
                    {(blogData.author || blogData.authorId) && (
                      <div className="flex items-center">
                        <FaUser className="mr-2 text-secondary" />
                        <span>
                          By {blogData.author?.name || blogData.authorId?.name}
                        </span>
                      </div>
                    )}

                    {/* Created Date (if different from publish date) */}
                    {blogData.createdAt &&
                      blogData.publishDate &&
                      new Date(blogData.createdAt).toDateString() !==
                        new Date(blogData.publishDate).toDateString() && (
                        <div className="flex items-center">
                          <FaClock className="mr-2 text-secondary" />
                          <span>Created: {formattedCreatedDate}</span>
                        </div>
                      )}

                    {/* Featured Status */}
                    {blogData.isFeatured && (
                      <div className="bg-secondary/20 text-secondary px-2 py-0.5 rounded">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Excerpt/Description */}
                  {blogData.excerpt && (
                    <div
                      data-aos="fade-up"
                      className="text-lg italic text-gray-300 border-l-4 border-secondary/50 pl-4 my-2"
                    >
                      {blogData.excerpt}
                    </div>
                  )}

                  {/* Main Content */}
                  <div
                    data-aos="fade-up"
                    className="hyphen-auto leading-relaxed text-gray-200 pt-4"
                  >
                    <div
                      className="reset-html-content prose prose-invert prose-headings:text-secondary prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: blogData.content }}
                    ></div>
                  </div>

                  {/* Tags */}
                  {blogData.tags && blogData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-secondary/20">
                      <div className="flex items-center mr-2">
                        <FaTag className="mr-2 text-secondary" />
                        <span className="text-gray-300">Tags:</span>
                      </div>
                      {blogData.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-primary px-3 py-1 rounded-full text-sm text-gray-200 hover:bg-secondary hover:text-primary transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Additional Meta Information */}
                  <div className="mt-8 pt-6 border-t border-secondary/20 text-sm text-gray-400">
                    <div className="flex flex-wrap justify-between">
                      <div>
                        <span>Last updated: </span>
                        <span>
                          {new Date(blogData.updatedAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
