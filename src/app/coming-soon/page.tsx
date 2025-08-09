import { Badge } from "../../Components/UI/badge";
import { 
  Calendar, 
} from "lucide-react";
import Image from "next/image";

export default function ComingSoonPage() {

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center">
      {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                  <Image 
                    src="/images/logo.png"
                    alt="ZedOps Logo"
                    width={64}
                    height={64}
                    className="object-cover rounded-lg"
                  />
                </div>
                
              </div>
            </div>
            
            <Badge variant="secondary" className="mb-6 text-white">
              Coming Soon
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-white">
              ZedOps
            </h1>
            
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              The future of construction management is here. ZedOps is a comprehensive platform that will help you manage your projects, teams, and documents all in one place.
            </p>

            <div className="flex items-center justify-center gap-2 mb-8">
              <Calendar className="w-5 h-5 text-white" />
              <span className="text-white">Expected Launch: Q4 2025</span>
            </div>
          </div>
        </div>
      </div>
  );
}