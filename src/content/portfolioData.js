import { webDevelopmentPortfolio, appDevelopmentPortfolio } from "./constant";
console.log("Imported web portfolio:", webDevelopmentPortfolio);
console.log("Imported app portfolio:", appDevelopmentPortfolio);

// Add categories to existing portfolio items
const webProjects = webDevelopmentPortfolio.map(project => ({
  ...project,
  category: "web",
  tags: ["Web Development", "Frontend", "Backend"],
  description: "A custom web development project delivering a responsive, user-friendly interface with robust backend functionality."
}));

const appProjects = appDevelopmentPortfolio.map(project => ({
  ...project,
  category: "app",
  tags: ["Mobile App", "iOS", "Android"],
  description: "A native mobile application designed for seamless user experience across iOS and Android platforms."
}));

// Combine all projects
export const allPortfolioProjects = [
  ...webProjects,
  ...appProjects,
];

// Define portfolio categories for filtering
export const portfolioCategories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "app", name: "App Development" },
];

// Function to filter projects by category
export const getProjectsByCategory = (category) => {
  
  if (category === "all") {
    return allPortfolioProjects;
  }
  
  const filtered = allPortfolioProjects.filter(project => project.category === category);
  return filtered;
};