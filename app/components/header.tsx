import Link from "next/link";
import { MdOutlineFastfood } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { UserButton } from '@clerk/nextjs'

export function Header() {
  return (
    <header className=" bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <MdOutlineFastfood className="h-8 w-8 text-gray-800" />
            <span className="text-xl font-bold text-gray-800 sm:text-2xl">
              What&apos;s in my food?
            </span>
          </Link>

          <UserButton showName className="text-center" />
        </div>
      </div>
    </header>
  );
}
