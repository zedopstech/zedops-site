import React from 'react';

interface BulletsProps {
  items: string[];  // Array of items to be displayed as bullets
  title?: string;   // Optional title for the list
}

const Bullets: React.FC<BulletsProps> = ({ items, title }) => {
  return (
    <section className="flex flex-col md:flex-row w-full mx-auto  px-4 bg-gray-100 text-black">
      {/* Optional Title */}
      {title && <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>}

      {/* Bullet List (Aligned Right) */}
      <div className="md:w-1/2 flex flex-col justify-center ml-auto">
        <ul className="list-disc list-inside text-lg text-gray-700 pl-8">
          {items.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Bullets;
