import React from 'react';

interface ProfileProps {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const Profile: React.FC<ProfileProps> = ({ name, role, image, quote }) => {
  return (
    <section className="flex flex-col space-y-4 py-8 px-48 bg-gray-100 text-black items-end">
      {/* Quote */}
      <p className="text-lg italic text-gray-700 max-w-xl text-left">{quote}</p>

      {/* Profile Details */}
      <div className="flex flex-col items-start px-96 space-y-4 mt-4">
        {/* Profile Image */}
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={image} alt={name} className="object-cover w-full h-full" />

        </div>

        {/* Profile Name and Role */}
        <div className="text-left">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
