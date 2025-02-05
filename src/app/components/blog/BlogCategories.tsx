export default function BlogCategories({ 
  title, 
  description, 
  color 
}: { 
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className={`${color} rounded-lg p-6 hover:shadow-lg transition-shadow`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-blue-600 font-medium">View all →</a>
    </div>
  )
} 