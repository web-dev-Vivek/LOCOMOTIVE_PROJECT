import { SignIn } from "@clerk/clerk-react";

function Signin() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignIn forceredirect="/" />
    </div>
  );
}

export default Signin;
