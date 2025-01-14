import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/UI/accordion";
import { Button } from "@/Components/UI/button";


export default function BIMPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
     

      {/* Hero Section */}
      <section className="bg-blue-50 py-14" style={{backgroundImage:"url('/bg bim.webp')"}}>
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left ml-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">BIM</h1>
            <p className="text-gray-700 text-lg">
              BIM software for construction managemnt
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Constructing dreams,one brick at a time</h1>
            <p className="text-gray-700 text-lg">
              Revolutionize your construction projects with smarter planning and enhanced collaboration.
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
        <Button  variant={"secondary"} size="lg" className="bg-black text-white hover:bg-orange-500">
          Watch Demo
        </Button>
        <Button  variant={"secondary"} size="lg"className="bg-white text-black hover:bg-orange-500" >
          Get Started
        </Button>
        </div>
       </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
      {/* Video that behaves like a GIF */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="mx-auto rounded-lg shadow-lg w-98 h-56 object-cover"
      >
      <source src="/demo bim.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
      </section>

      {/* Collaboration Section */}
      <section className="container mx-auto py-12 flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2 ml-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Collaboration</h2>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect BIM</h2>
          <ul className="text-2xl list-disc pl-5 text-gray-700 space-y-2 list-orange">
            <li>View and navigate complex models instantly on any device - no modeling software needed</li>
            <li>Mark up issues and share feedback in real-time between field and office teams</li>
            <li>Access projects offline in low-connectivity areas with automatic sync when back online</li>
            <li>Reduce costs by eliminating expensive software licenses and hardware requirements</li>
            <li>Measure, review and validate field conditions against the model during site walks</li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/bim collab.webp"
            alt="Collaboration in BIM"
            width={600}
            height={300}
            className="mx-auto rounded-lg"
          />
        </div>
      </section>

      {/* Innovation Section */}
      <section className="container mx-auto py-12 flex flex-col md:flex-row-reverse items-center px-4">
        <div className="md:w-1/2 ml-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Innovation</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">2D Designs</h3>
          <ul className="text-2xl list-disc pl-5 text-gray-600 space-y-2 list-orange">
            <li>Create installation-ready drawings instantly by cutting sections at any point in your model</li>
            <li>Automate lift plans and equipment layouts without redrawing in CAD or Revit</li>
            <li>Track every building component with exact coordinates and measurements for precise field installation</li>
            <li>Share custom views and markups with field teams immediately for faster decision-making</li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/bim 2d.webp"
            alt="Innovation in BIM"
            width={600}
            height={300}
            className="mx-auto rounded lg"
          />
        </div>
      </section>

      {/* Savings Section */}
      <section className="container mx-auto py-12 flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2 ml-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Savings</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Reduce Installation Errors</h3>
          <ul className="text-2xl list-disc pl-5 text-gray-600 space-y-2 list-orange">
            <li>Spot and solve construction conflicts before they become costly field issues using immersive 3D visualization</li>
            <li>Verify construction sequencing and installation clearances by walking through the virtual building first</li>
            <li>Flag and track coordination problems with automatic notifications to responsible team members</li>
            <li>Accelerate design approvals by showing stakeholders realistic 3D views of the finished space</li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/bim save.webp"
            alt="Savings in BIM"
            width={600}
            height={300}
            className="mx-auto rounded-lg"
          />
        </div>
      </section>

      {/* Breakdown Silos Section */}
      <section className="container mx-auto py-12 flex flex-col md:flex-row-reverse items-center px-4">
        <div className="md:w-1/2 ml-16">
          <h2 className="text-2xl font-semibold text-gray-00 mb-4">Cordinating</h2>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Breakdown Silos</h2>
          <ul className=" text-2xl list-disc pl-5 text-gray-600 space-y-2 list-orange">
            <li>Monitor team performance with real-time coordination metrics and automated progress tracking</li>
            <li>Convert coordination issues to RFIs instantly, with all context and model data automatically attached</li>
            <li>Streamline communication between design, construction, and field teams in one connected platform</li>
            <li>Accelerate coordination meetings by having all stakeholders work from the same live model data</li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/bim break.png"
            alt="Breakdown silos in BIM"
            width={600}
            height={300}
            className="mx-auto rounded-lg"
          />
        </div>
      </section>

  {/* FAQ Section */}
       <section className="bg-gray-100 py-12">
        <div className="container mx-auto flex justify-center items-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {/* Question 1 */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
                  Who uses the BIM software?
                </AccordionTrigger>
                <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
                  BIM software is used by architects, engineers, construction managers, facility managers, and contractors. These professionals rely on it for designing, planning, managing, and maintaining construction projects efficiently. It helps in collaboration, visualization, and reducing errors across all stages of a project.
                </AccordionContent>
              </AccordionItem>

              {/* Question 2 */}
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
                  How upload and access 3D models?
                </AccordionTrigger>
                <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
                  Once uploaded, access the models through the platform’s viewer, which typically includes tools for navigation, zoom, and editing. Cloud-based platforms also enable sharing and collaboration on 3D models in real-time.
                </AccordionContent>
              </AccordionItem>

              {/* Question 3 */}
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
                  Is BIM suitable for small projects?
                </AccordionTrigger>
                <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
                  BIM is suitable for small projects. It helps improve project visualization and planning, even for limited scopes. BIM reduces errors, enhances collaboration, and ensures efficient resource management, saving time and costs. Its scalability allows small teams to benefit from centralized data and streamlined workflows. By adopting BIM, small projects can achieve higher quality and better outcomes.
                </AccordionContent>
              </AccordionItem>

              {/* Question 4 */}
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-semibold text-gray-900 text-center bg-gray-200 rounded-lg py-3 px-4 hover:bg-gray-300 transition-all duration-200">
                  What are the cost benefits of BIM?
                </AccordionTrigger>
                <AccordionContent className="text-gray-900 text-left px-6 py-4 bg-white rounded-lg shadow-md">
                  BIM offers significant cost benefits by reducing material waste through precise planning and accurate quantity takeoffs. It minimizes rework by identifying design conflicts early in the process. Efficient collaboration and centralized data help avoid costly delays and miscommunications.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}