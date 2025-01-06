export default function Cto() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:justify-center lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            {/* Flexbox container for centering content */}
            <div className="flex items-center justify-center mx-auto max-w-md lg:mx-0 lg:flex lg:flex-col lg:items-center lg:justify-center lg:py-32 lg:text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Manage your projects with Zedops.
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                "Streamline your projects with powerful document management, designed to enhance efficiency and organization at every step."
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Request Demo
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  