import axios from "axios";

const baseUrl = "https://blogplatform-backend-vibranexinfotech.vercel.app/api";

// get all blogs (published)
export const getBlogs = () => axios.get(`${baseUrl}/blogs/published`);

// get blog by slug
export const getBlogBySlug = (slug) =>
  axios.get(`${baseUrl}/blogs/slug/${slug}`);
