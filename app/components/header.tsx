import Link from "next/link";
import { MdOutlineFastfood } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export function Header() {
  return (
    <header className=" bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <MdOutlineFastfood className="h-8 w-8 text-gray-800" />
            <span className="text-xl font-bold text-gray-800 sm:text-2xl">What&apos;s in my food?</span>
          </Link>

          <a
           className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100"
           href=""
           target="_blank"
          >
            <FaGithub className="h-5 w-5" />
            <span>Code on Github</span>
          </a>
        </div>
       </div>
    </header>
  );
}
