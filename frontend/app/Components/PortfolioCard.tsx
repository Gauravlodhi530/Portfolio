import React from "react";

type PortfolioCardProps = {
  title: string;
  imgSrc: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, imgSrc }) => {
  return (
    <div className="rounded-xl  p-4 shadow-md hover:scale-[1.03] transition-transform duration-300
    bg-gray-900  shadow-xl/20 inset-shadow-sm inset-shadow-gray-800/20">
      <img src={imgSrc} alt={title} className="rounded-lg mb-4" />
      <h3 className="text-white font-semibold text-lg">{title}</h3>
    </div>
  );
};

export default PortfolioCard;
