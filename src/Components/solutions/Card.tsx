import React from "react";
import Image from "next/image";

interface CardData {
  imageSrc: string;
  title: string;
}

interface CardSectionProps {
  sectionTitle?: string; // Optional Title
  cards: CardData[];
}

const CardSection: React.FC<CardSectionProps> = ({ sectionTitle, cards }) => {
  return (
    <div className="bg-custombg py-20 px-4 flex flex-col items-center justify-center text-center relative">
      {/* Optional Section Title */}
      {sectionTitle && (
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 w-full max-w-6xl px-4 md:px-0 text-left">
          {sectionTitle}
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <Image
              src={card.imageSrc}
              alt={card.title}
              className="w-full h-35 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4 min-h-[3.5rem] sm:min-h-[3rem] line-clamp-2 overflow-hidden text-ellipsis">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
