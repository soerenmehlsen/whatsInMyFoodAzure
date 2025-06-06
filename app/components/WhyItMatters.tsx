import ArticleShowcase from "./articleShowcase";
import { Fade } from "react-awesome-reveal"

const WhyItMatters = () => {
  return (
      <Fade direction="up" delay={300} cascade damping={0.1} triggerOnce={true}>
      <div>
          <h1 className="sm:mt-36 mt-20 text-balance text-4xl font-bold text-zinc-800">
              Why it matters
          </h1>

          <p className="text-gray-500 mt-4 text-center">
              Understanding the ingredients in your food is important for making informed dietary choices and maintaining a healthy lifestyle.
          </p>

          <div className="flex justify-center sm:mt-20 mt-10">
              <ArticleShowcase />
          </div>
      </div>
        </Fade>
  );
}

export default WhyItMatters;