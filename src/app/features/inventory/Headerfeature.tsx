// import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { BarChart2, Layers, MapPinCheck, ChartPie} from "lucide-react";

const features = [
  {
    name: 'Efficient Inventory',
    description:
      'Streamline material tracking and allocation effortlessly. Manage stock levels in real-time, minimize waste.',
    icon:BarChart2,
  },
  {
    name: 'Seamless Management',
    description:
      'Simplify operations with centralized inventory control. Ensure smooth workflows by tracking, allocating, and replenishing resources effortlessly.',
    icon: Layers,
  },
  {
    name: 'Smart Tracking',
    description:
      'Gain real-time visibility into inventory movements. Optimize stock levels and reduce errors with precise tracking solutions.',
    icon: MapPinCheck
  },
  {
    name: 'Resource Optimization',
    description:
      'Enhance project efficiency by tracking resources accurately. Minimize downtime with precise inventory control and streamlined allocation.',
    icon: ChartPie
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Optimized Control</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          Streamlined Inventory Management for Construction
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          With features like automated reorder alerts, mobile accessibility, and detailed reporting, 
          our solution simplifies inventory management while reducing costs.
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
