import {  Calculator ,Lightbulb} from 'lucide-react';
export default function Example() {
    return (
      <div className="relative isolate overflow-hidden bg-sky-950 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-white">
              Excel with Smarter Estimation
              </h2>
              <p className="mt-4 text-lg text-gray-300">
              Accurately predict costs, optimize resources, and streamline budgeting to ensure your 
              projects stay on time and within budget.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <button
                  type="submit"
                  className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
               Request Demo
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <Calculator  aria-hidden="true" className="size-6 text-orange-500" />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                Efficient Estimation Starts Here
                </dt>
                <dd className="mt-2 text-base/7 text-white">
                Streamline cost analysis, forecast budgets, and enhance project planning with powerful estimation tools.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <Lightbulb aria-hidden="true" className="size-6 text-orange-500" />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">Smart Estimation Made Simple</dt>
                <dd className="mt-2 text-base/7  text-white">
                Simplify cost calculations, optimize resource allocation, and ensure project success.
                </dd>
              </div>
            </dl>
          </div>
        </div>
       
      </div>
    );
  }
  