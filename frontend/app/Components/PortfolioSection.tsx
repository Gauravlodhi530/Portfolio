import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";

const tabs = ["All", "Web Design", "App Design", "Branding", "UI/UX"];

const portfolioItems = [
  { title: "NFT Web", imgSrc: "port.avif", category: "Web Design" },
  { title: "Crypto App", imgSrc: "port.avif", category: "App Design" },
  { title: "Branding UI", imgSrc: "port.avif", category: "Branding" },

  // ... add as needed
];

const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <section className="text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Portfolio</h2>
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full border bg-gray-600 ${
              activeTab === tab
                ? "bg-orange-500 text-white"
                : "bg-transparent border-white text-white"
            } transition-colors duration-200 font-bold hover:bg-orange-500 hover:text-white`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, idx) => (
          <PortfolioCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
