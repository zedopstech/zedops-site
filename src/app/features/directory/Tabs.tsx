import { HandPlatter, BookUser} from "lucide-react";

export default function Tabs() {
  return (
    <div className="border-b border-gray-200 dark:border-gray-900">
      <div className="flex justify-center">
        <ul className="flex flex-wrap -mb-px text-lg font-medium text-center text-gray-900 dark:text-gray-400">
          <li className="me-8 group relative flex-shrink-0 flex-grow"> {/* Adjusted margin and grow */}
            <a
              href="#supplier-relations"
              className="flex flex-col items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              <HandPlatter
                className="w-7 h-7 mb-1 text-orange-600 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                aria-hidden="true"
              />
              <span>Supplier Relations</span> {/* Always visible */}
            </a>
            <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </li>
          <li className="me-8 group relative flex-shrink-0 flex-grow"> {/* Adjusted margin and grow */}
            <a
              href="#employee-operations"
              className="flex flex-col items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              <BookUser
                className="w-7 h-7 mb-1 text-orange-600 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                aria-hidden="true"
              />
              <span>Employee Operations</span> {/* Always visible */}
            </a>
            <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </li>
           
        </ul>
      </div>
    </div>
  );
}
