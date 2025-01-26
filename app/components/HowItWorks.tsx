const HowItWorks = () => {
    return (
        <div>
        <div>
            <h1 className="sm:mt-36 mt-20 text-balance text-4xl font-bold text-zinc-800">
                Here&apos;s how it works
            </h1>
        </div>

    <div className="max-w-7xl mx-auto flex flex-wrap justify-center sm:mt-20 mt-10">
        <div className="w-full sm:w-1/3 px-4">
            <div className="flex flex-col items-center sm:mt-2 mt-10">
                <h1 className="text-2xl font-bold text-white mb-4 bg-black rounded-full w-12 h-12 flex items-center justify-center">
                    1
                </h1>
                <h2 className="text-2xl font-bold text-zinc-800 mb-4">
                    Take a picture
                </h2>
                <p className="text-gray-500">
                    Take a picture of your food&apos;s ingredient list.
                </p>
            </div>
        </div>
        <div className="w-full sm:w-1/3 px-4">
            <div className="flex flex-col items-center sm:mt-2 mt-10">
                <h1 className="text-2xl font-bold text-white mb-4 bg-black rounded-full w-12 h-12 flex items-center justify-center">
                    2
                </h1>
                <h2 className="text-2xl font-bold text-zinc-800 mb-4">
                    Process the image
                </h2>
                <p className="text-gray-500">
                    The image will now be scanned for ingredients with AI.
                </p>
            </div>
        </div>
        <div className="w-full sm:w-1/3 px-4">
            <div className="flex flex-col items-center sm:mt-2 mt-10">
                <h1 className="text-2xl font-bold text-white mb-4 bg-black rounded-full w-12 h-12 flex items-center justify-center">
                    3
                </h1>
                <h2 className="text-2xl font-bold text-zinc-800 mb-4">
                    Get the results
                </h2>
                <p className="text-gray-500">
                    You will get a detailed breakdown of each ingredient and how processed it is.
                </p>
            </div>
        </div>
    </div>
</div>
    );
}

export default HowItWorks;