import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";

const tabs = ["All", "Web Development", "Mobile Apps", "UI/UX Design", "E-commerce", "Landing Pages"];

const portfolioItems = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    imgSrc: "/port.avif",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Mobile-first task management application with real-time updates",
    imgSrc: "/port.avif",
    category: "Mobile Apps",
    technologies: ["React Native", "Firebase", "Redux"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with smooth animations and responsive design",
    imgSrc: "/port.avif",
    category: "UI/UX Design",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },



];

const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h5 className="text-orange-400 text-lg font-medium tracking-wide mb-4">
            My Work
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-orange-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects showcasing web development, mobile apps, 
            and creative design solutions for various clients and industries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap animate-fade-in animation-delay-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 hover:scale-105 ${
                activeTab === tab
                  ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-transparent border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <PortfolioCard 
              key={idx} 
              {...item} 
              index={idx}
            />
          ))}
        </div>

        {/* Call to Action */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
            <p className="text-gray-400 mb-8">
              No projects match the selected category. Try selecting a different filter.
            </p>
            <button
              onClick={() => setActiveTab("All")}
              className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* View More Button */}
        <div className="text-center mt-16 animate-fade-in animation-delay-400">
          <p className="text-gray-400 mb-6">
            Want to see more of my work? Check out my complete portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/portfolio"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Projects
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border-2 border-gray-600 text-white rounded-lg hover:bg-gray-800 hover:border-orange-500 transition-all duration-300"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
