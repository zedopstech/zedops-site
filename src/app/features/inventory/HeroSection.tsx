export default function Hero() {
  return (
    <div className="bg-white">
      <div 
        className="relative isolate px-6 lg:px-8 bg-cover bg-center" 
        style={{ backgroundImage: "url('/bg-2.png')" }}
      >
        <div className="max-w-2xl py-32 sm:py-48 lg:py-36 flex flex-col justify-start items-start text-left pl-6">
          <div>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Material Management
            </h1>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Inventory
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-900 sm:text-xl">
              Inventory management streamlines stock tracking, ensuring optimal levels
              to reduce costs and prevent shortages. It boosts efficiency, supports demand,
              and enhances overall operational control.
            </p>
            <div className="mt-10 flex items-start gap-x-6">
              <a
                href="#"
                className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
