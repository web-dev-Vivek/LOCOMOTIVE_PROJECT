import { SignIn } from "@clerk/clerk-react";

function Signin() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: "bg-indigo-600 hover:bg-indigo-700 text-white",
            card: "shadow-xl",
          },
        }}
        signUpUrl="/sign-up"
        afterSignInUrl="/Team"
        afterSignUpUrl="/Team"
      />
    </div>
  );
}

export default Signin;
