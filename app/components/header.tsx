import Link from "next/link";
import { MdOutlineFastfood } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { UserButton, SignedOut, SignInButton, SignUpButton, SignedIn} from '@clerk/nextjs'

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

          <SignedOut>
            <div className="flex space-x-2">
              <SignInButton>
                <button
                    className="bg-white hover:bg-gray-200 text-black font-semibold rounded-3xl border transition-colors duration-200 px-8 py-3">
                  Login
                </button>
              </SignInButton>
              <SignUpButton>
                <button
                    className="bg-black hover:bg-gray-500 text-white font-semibold rounded-3xl transition-colors duration-200 px-8 py-3">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
          
          <SignedIn>
            <UserButton
                showName
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8",
                  },
                }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
