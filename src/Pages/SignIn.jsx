import { SignIn } from "@clerk/clerk-react";

function Signin() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignIn
        routing="/login"
        signUpUrl="/" // yaha apna signup route do
        redirectUrl="/home" // successful login ke baad home page
      />
    </div>
  );
}

export default Signin;
