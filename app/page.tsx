import { Fade } from "./components/ui/fade";
import { ImageUploader } from "./components/ImageUploader";

export default function Home() {
  return (
    <div className="container text-center px-4 py-8 max-w-full mx-auto">
      <Fade delay={400} direction="up">
        <div className="max-w-2xl text-center mx-auto sm:mt-20 mt-2">
          <h1 className="mb-6 text-balance text-6xl font-bold text-zinc-800">
            Understand your food ingredients with AI
          </h1>
        </div>
      </Fade>

      <div className="max-w-3xl text-center mx-auto">
        <Fade delay={600} direction="up">
          <p className="mb-8 text-lg text-gray-500 text-balance">
            Take a picture of your food&apos;s ingredient list and let AI help
            you understand each ingredient, so you know what you&apos;re eating.
          </p>
        </Fade>
      </div>

      <ImageUploader />
    </div>
  );
}
