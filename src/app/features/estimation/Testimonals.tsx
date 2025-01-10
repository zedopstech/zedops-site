import { TrendingUp,ClockAlert,ChartLine,Map} from 'lucide-react';

const features = [
  {
    name: 'Accurate Estimation',
    description:
      'Deliver precise project cost assessments with advanced tools. Minimize risks, control budgets, and enhance for construction success.',
    icon:TrendingUp,
  },
  {
    name: 'Efficient Estimation',
    description:
      'Streamline project planning with automated estimation workflows. Ensure timely, accurate, and detailed cost projections for seamless execution.',
    icon:ClockAlert
  },
  {
    name: 'Data-Driven Estimation',
    description:
      'Empower your construction process with data-backed cost analysis. Optimize resources, reduce waste, and align budgets with project goals.',
      icon:ChartLine
  },
  {
    name: 'Strategic Strategic Estimation',
    description:
      'Achieve excellence with comprehensive estimation strategies. Guarantee cost efficiency, resource optimization, and on-time project delivery.',
      icon:Map
  },
]

export default function Example() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Optimized Control</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          Estimation Management for Construction
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          With advanced tools for cost analysis and real-time budget tracking, streamlines 
          estimation processes while ensuring accuracy and cost efficiency.
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
