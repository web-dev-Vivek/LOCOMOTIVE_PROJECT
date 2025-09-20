import { SignUp } from "@clerk/clerk-react";

function Signup() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignUp
        routing="/"
        signInUrl="/signin" // yaha apna signin route do
        redirectUrl="/home" // successful signup ke baad home page
      />
    </div>
  );
}

export default Signup;
