import { SignUpButton } from "@clerk/nextjs";

const SignUp = ({buttonText = "Sign Up"}) => {
    return (
        <SignUpButton>
            <button
                className="bg-black hover:bg-gray-500 text-white text-xl font-bold py-3 px-12 rounded-3xl transition-colors duration-200 mb-10">
                {buttonText}
            </button>
        </SignUpButton>
    );
}

export default SignUp;