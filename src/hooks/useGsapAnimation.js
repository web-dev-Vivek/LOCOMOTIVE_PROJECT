// src/hooks/useGsapAnimation.js
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ✅ ScrollTrigger ko register karo
gsap.registerPlugin(ScrollTrigger);

const useGsapAnimation = (targetRef, animationFn, deps = []) => {
  useEffect(() => {
    if (targetRef.current) {
      const ctx = gsap.context(() => {
        animationFn(); // scroll animation yaha pass hoti hai
      }, targetRef);

      return () => ctx.revert(); // cleanup
    }
  }, deps);
};

export default useGsapAnimation;
