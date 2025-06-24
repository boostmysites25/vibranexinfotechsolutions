import { useState, useEffect } from "react";
import { webDevelopmentPortfolio, appDevelopmentPortfolio } from "../../content/constant";
import { CgSpinner } from "react-icons/cg";
import { Link } from "react-router-dom";

// Define portfolio categories
const portfolioCategories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "app", name: "App Development" },
];

// Enhance portfolio items with additional metadata
const enhancedWebPortfolio = webDevelopmentPortfolio.map(item => ({
  ...item,
  category: "web",
}));

const enhancedAppPortfolio = appDevelopmentPortfolio.map(item => ({
  ...item,
  category: "app",
}));

// Combined portfolio
const allPortfolioItems = [...enhancedWebPortfolio, ...enhancedAppPortfolio];

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [displayedItems, setDisplayedItems] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize with all items
  useEffect(() => {
    setDisplayedItems(allPortfolioItems);
  }, []);

  // Filter handler
  const handleFilterClick = (categoryId) => {
    if (categoryId === activeFilter) return;

    console.log("Filter clicked:", categoryId);
    setIsAnimating(true);

    // Force a re-render by clearing the items first
    setDisplayedItems([]);

    setTimeout(() => {
      setActiveFilter(categoryId);

      if (categoryId === "all") {
        console.log("Setting all items:", allPortfolioItems);
        setDisplayedItems([...allPortfolioItems]);
      } else {
        const filtered = allPortfolioItems.filter(item => item.category === categoryId);
        console.log(`Setting ${categoryId} items:`, filtered);
        setDisplayedItems([...filtered]);
      }

      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="wrapper py-10 space-y-8">
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {portfolioCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleFilterClick(category.id)}
            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${activeFilter === category.id
              ? "bg-primary text-white"
              : "bg-white/10 text-white hover:bg-white/20"
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Portfolio grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"
          }`}
      >
        {displayedItems.map((item, index) => (
          <div
            key={`${activeFilter}-${item.id}-${index}`}
            className="rounded-lg overflow-hidden relative group h-[300px] transition-all duration-500 shadow-lg"
          >
            {/* Overlay gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/30 via-transparent to-primary/70 z-[1]" />

            {/* Project image */}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="object-cover h-full w-full group-hover:scale-[1.15] transition-all duration-500"
            />

            {/* Project title */}
            <div className="absolute bottom-0 left-0 w-full p-4 z-[2] transform translate-y-0 group-hover:translate-y-[-10px] transition-all duration-300">
              <h3 className="text-white font-semibold text-xl">{item.title}</h3>
              <div className="w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-300"></div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-[3]">
              <div className="text-center p-6">
                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-white/90 mb-4 text-sm">
                  {item.description}
                </p>
                <Link to={item.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-primary rounded-full font-medium hover:bg-secondary hover:text-black transition-all duration-300">
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {displayedItems.length === 0 ?
        isAnimating ?
          <div className="flex justify-center py-16 bg-white/5 rounded-lg">
            <CgSpinner className='animate-spin' size={40} color="#ffffff" />
          </div> :

          <div className="text-center py-16 bg-white/5 rounded-lg">
            <p className="text-white/70 text-lg">No projects found in this category.</p>
          </div>
        : ""}
    </div>
  );
};

export default PortfolioGrid;