import { Lightbulb, Layers, PackageCheck,ChartNoAxesCombined} from "lucide-react";

const features = [
  {
    name: 'Smart Procurement',
    description:
      'Optimize sourcing and supplier coordination seamlessly. Ensure timely deliveries, control costs, and maintain quality standards.',
    icon:Lightbulb,
  },
  {
    name: 'Seamless Procurement',
    description:
      'Streamline sourcing with centralized vendor management.Ensure smooth workflows by tracking, managing, and optimizing purchases effortlessly.',
    icon: Layers,
  },
  {
    name: 'Optimized Sourcing',
    description:
      'Enhance procurement efficiency with data-driven decisions.Build strong vendor relationships and ensure timely, cost-effective acquisitions.',
    icon: PackageCheck
  },
  {
    name: 'Strategic Procurement',
    description:
      'Drive value with well-planned sourcing strategies. Ensure quality, cost efficiency, and timely delivery for every project need.',
    icon: ChartNoAxesCombined
  },
]

export default function Example() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Optimized Control</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          Efficient Procurement Management for Construction
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          With features like vendor management and real-time purchase order monitoring,streamlines procurement
          processes while ensuring cost control.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-orange-500">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
