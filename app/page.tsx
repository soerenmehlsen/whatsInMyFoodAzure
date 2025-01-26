import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WhyItMatters from "./components/WhyItMatters";
import SignUp from "./components/SignUpButton";



export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
      <div className="container text-center px-4 py-8 mx-auto">
        < HeroSection />
        < HowItWorks />
        < WhyItMatters />
          <div className="mt-10">
          <SignedOut>
              <SignUp buttonText="Get Started" />
          </SignedOut>
          </div>
      </div>
  );
}
