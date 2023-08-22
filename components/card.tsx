import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="p-6 transition-all transition-transform duration-300 transform bg-gray-300 rounded-lg shadow-md hover:-translate-y-2 hover:shadow-lg">
      <h2 className="mb-4 text-xl font-bold text-black">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
