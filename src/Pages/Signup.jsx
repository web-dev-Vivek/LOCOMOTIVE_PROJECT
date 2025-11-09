import { SignUp } from "@clerk/clerk-react";

function Signup() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: "bg-indigo-600 hover:bg-indigo-700 text-white",
            card: "shadow-xl",
          },
        }}
        signInUrl="/sign-in"
        afterSignInUrl="/Team"
        afterSignUpUrl="/Team"
      />
    </div>
  );
}

export default Signup;
