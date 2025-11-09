import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthRedirect = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      // Clean up any Clerk handshake parameters from URL
      const urlParams = new URLSearchParams(location.search);
      if (urlParams.has("__clerk_handshake")) {
        // Clean redirect to Team page without URL parameters
        navigate("/Team", { replace: true });
      }
    }
  }, [isSignedIn, isLoaded, navigate, location]);

  return null;
};

export default AuthRedirect;
