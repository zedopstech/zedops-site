import { FilePlus, LogOut, Calendar } from "lucide-react";

export default function Tabs() {
  return (
    <div className="border-b border-gray-200 dark:border-gray-900">
      <div className="flex justify-center">
        <ul className="flex flex-wrap -mb-px text-lg font-medium text-center text-gray-900 dark:text-gray-400">
          <li className="me-16 group relative"> {/* Increased margin */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              <FilePlus
                className="w-7 h-7 me-2 text-orange-600 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                aria-hidden="true"
              />
              Projects
            </a>
            <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </li>
          <li className="me-16 group relative"> {/* Increased margin */}
            <a
              href="#daily-logs"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              <LogOut
                className="w-7 h-7 me-2 text-orange-600 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                aria-hidden="true"
              />
              Daily logs
            </a>
            <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </li>
          <li className="me-16 group relative"> {/* Increased margin */}
            <a
              href="#scheduling"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              <Calendar
                className="w-7 h-7 me-2 text-orange-600 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                aria-hidden="true"
              />
              Scheduling
            </a>
            <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
