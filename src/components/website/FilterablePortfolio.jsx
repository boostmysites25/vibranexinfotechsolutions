import { useState, useEffect } from "react";
import {
  portfolioCategories,
  getProjectsByCategory
} from "../../content/portfolioData";

const FilterablePortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);
  const [animateItems, setAnimateItems] = useState(false);

  // Set initial filtered items
  useEffect(() => {
    const initialItems = getProjectsByCategory("all");
    console.log("Initial items:", initialItems);
    setFilteredItems(initialItems);
    setAnimateItems(true);
  }, []);

  // Handle filter change
  const handleFilterClick = (filter) => {
    if (filter === activeFilter) return;

    console.log("Filter clicked:", filter);
    setAnimateItems(false);

    // Small delay for animation
    setTimeout(() => {
      setActiveFilter(filter);
      const filtered = getProjectsByCategory(filter);
      console.log("Filtered items:", filtered);
      setFilteredItems(filtered);
      setAnimateItems(true);
    }, 300);
  };

  return (
    <div className="wrapper py-10 space-y-8">
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
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
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${animateItems ? "opacity-100" : "opacity-0"
          }`}
      >
        {filteredItems.map((item) => (
          <div
            key={`${activeFilter}-${item.id}`}
            className="rounded-lg overflow-hidden relative group h-[300px] transition-all duration-500 shadow-lg"
            data-aos="fade-up"
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

            {/* Tags */}
            <div className="absolute top-4 right-4 z-[2] flex flex-wrap gap-2 justify-end">
              {item.tags && item.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-[3]">
              <div className="text-center p-6">
                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-white/90 mb-4 text-sm">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {item.tags && item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-black/30 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="px-4 py-2 bg-white text-primary rounded-full font-medium hover:bg-secondary hover:text-black transition-all duration-300">
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16 bg-white/5 rounded-lg">
          <p className="text-white/70 text-lg">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default FilterablePortfolio;