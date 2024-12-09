import { FaGithub } from "react-icons/fa";
export function Footer() {
  return (
  <footer className="bg-white border-t border-gray-200 mt-auto">
    <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-sm text-gray-500">
                    Created by Søren Mehlsen.
                </p>
            </div>
            <div className="flex space-x-4">
                <a href="https://github.com/soerenmehlsen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                    <FaGithub className="h-5 w-5" />
                    <span className="sr-only">Github</span>
                </a>
            </div>
        </div>
    </div>
  </footer>
  );
}
