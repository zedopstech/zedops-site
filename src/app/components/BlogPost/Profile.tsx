import React from 'react';

interface ProfileProps {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const Profile: React.FC<ProfileProps> = ({ name, role, image, quote }) => {
  return (
    <section className="flex flex-col space-y-4 py-8 px-8 md:px-8 lg:px-96 bg-gray-100 text-black">
      {/* Quote with darker color for the quotation marks */}
      <p className="text-lg italic font-bold text-gray-900 max-w-xl ml-96">
        <span className="text-black font-bold text-5xl">"</span>{quote}
      </p>

      {/* Profile Details (Maintaining Alignment) */}
      <div className="flex flex-col items-start space-y-4 mt-4 ml-96">
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
