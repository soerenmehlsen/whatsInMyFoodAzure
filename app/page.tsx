
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WhyItMatters from "./components/WhyItMatters";
import SignUp from "./components/SignUpButton";



export default async function Home() {

  return (
      <div className="container text-center px-4 py-8 mx-auto">
        < HeroSection />
        < HowItWorks />
        < WhyItMatters />
          <div className="mt-10">
            <SignUp />
          </div>
      </div>
  );
}
