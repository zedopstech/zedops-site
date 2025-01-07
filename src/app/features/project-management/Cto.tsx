export default function Cto() {
  return (
    <div className="bg-gray-900">
      <div className="py-12 px-4 sm:px-6 sm:py-16 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-12 shadow-2xl rounded-lg sm:pt-16 md:pt-20 lg:flex lg:items-center lg:justify-center lg:px-16 lg:py-20">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 w-[48rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:w-[64rem] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          {/* Content container */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Manage your projects with Zedops
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Streamline your projects with powerful document management,
              designed to enhance efficiency and organization at every step.
            </p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
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
