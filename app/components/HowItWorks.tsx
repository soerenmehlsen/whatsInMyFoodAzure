import { Fade } from "react-awesome-reveal"

const HowItWorks = () => {

    const steps = [
        {
            number: 1,
            title: "Take a picture",
            description: "Take a picture of your food's ingredient list.",
        },
        {
            number: 2,
            title: "Process the image",
            description: "The image will now be scanned for ingredients with AI.",
        },
        {
            number: 3,
            title: "Get the results",
            description: "You will get a detailed breakdown of each ingredient and how processed it is.",
        },
    ];
    
    return (
        <div>
            <Fade direction="up" delay={300} cascade damping={0.1} triggerOnce={true}>
        <div>
            <h1 className="sm:mt-36 mt-20 text-balance text-4xl font-bold text-zinc-800">
                Here&apos;s how it works
            </h1>
        </div>
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center sm:mt-20 mt-10">
                    {steps.map((step, index) => (
                        <div key={index} className="w-full sm:w-1/3 px-4">
                            <div className="flex flex-col items-center sm:mt-2 mt-10">
                                <h1 className="text-2xl font-bold text-white mb-4 bg-black rounded-full w-12 h-12 flex items-center justify-center">
                                    {step.number}
                                </h1>
                                <h2 className="text-2xl font-bold text-zinc-800 mb-4">
                                    {step.title}
                                </h2>
                                <p className="text-gray-500">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
        
    );
}

export default HowItWorks;
