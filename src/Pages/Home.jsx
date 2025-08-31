import Navbar from "../component/Navbar.jsx";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Footer from "../component/Footer.jsx";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return; // ❌ skip animations for mobile/tablet

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.set(section2Ref.current, { x: 0, y: 0 });
    gsap.set(section3Ref.current, { x: 0, y: 0 });

    gsap.to(section2Ref.current, {
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top 80%",
        end: "top 10%",
        scrub: 2,
      },
      x: "48vw",
      y: "40vh",
      ease: "power1.out",
    });

    gsap.to(section3Ref.current, {
      scrollTrigger: {
        trigger: section3Ref.current,
        start: "top 40%",
        end: "top 0%",
        scrub: 2,
      },
      x: "-27vw",
      y: "38vh",
      ease: "power1.out",
    });

    gsap.to(section4Ref.current, {
      scrollTrigger: {
        trigger: section4Ref.current,
        start: "top 40%",
        end: "top 0%",
        scrub: 2,
      },
      x: "12vw",
      y: "76vh",
      ease: "power1.out",
    });

    gsap.to(section5Ref.current, {
      scrollTrigger: {
        trigger: section5Ref.current,
        start: "top 40%",
        end: "top 0%",
        scrub: 2,
      },
      x: "-37vw",
      y: "77vh",
      ease: "power1.out",
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div>
      <Navbar />

      {/* 💻 Laptop/Desktop View */}
      <div className="hidden md:block">
        {/* Section 1 */}
        <div className="w-[100vw]  pl-10 flex justify-end flex-col h-[100vh]">
          <p className="text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Make Memories, Make future
          </p>
          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-9xl font-bold"
          >
            PARTICIPATE
          </h1>
          <h1
            ref={section2Ref}
            className="text-9xl font-bold w-fit whitespace-normal relative"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            IN EVENTS
          </h1>
        </div>

        {/* Section 2 */}
        <div className="w-[100vw]  overflow-hidden flex justify-center items-end pr-10 flex-col h-[100vh]">
          <h1
            className="font-bold text-sm"
            style={{ fontFamily: "'Limelight', display" }}
          >
            BUILD
          </h1>
          <h1
            ref={section3Ref}
            className="text-9xl font-bold w-fit whitespace-normal relative"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            CONNECTIONS
          </h1>
        </div>

        {/* Section 3 */}
        <div className="w-[100vw]  h-screen pl-10 flex-col ">
          <p className="text-sm" style={{ fontFamily: "'Limelight', display" }}>
            TURN INTO
          </p>
          <h1
            ref={section4Ref}
            className="text-9xl font-bold w-fit whitespace-normal relative"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            COLLABORATIONS
          </h1>
        </div>

        {/* Section 4 */}
        <div className="w-[100vw] pl-10 flex justify-start items-end pr-5 flex-col h-[100vh] ">
          <p
            className="font-bold text-sm"
            style={{ fontFamily: "'Limelight', display" }}
          >
            ignite
          </p>
          <h1
            ref={section5Ref}
            className="text-9xl font-bold w-fit whitespace-normal relative"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            INNOVATION
          </h1>
        </div>

        {/* Section 5 */}
        <div className="w-[100vw] h-[50vh] pl-10 flex justify-start flex-col ">
          <p
            className="font-bold text-sm"
            style={{ fontFamily: "'Limelight', display" }}
          >
            begins with
          </p>
          <h1
            className="text-9xl font-bold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            SHOWING UP
          </h1>
        </div>

        <div className="w-screen h-[50vh] flex items-start justify-center">
          <Link
            to="/events"
            className="relative z-[99] h-[7vh] inline-block px-6 py-3 text-white text-sm font-medium
             rounded-2xl shadow-md bg-black
             transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl
             hover:bg-white hover:text-black border border-black"
            style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
          >
            Let's Go →
          </Link>
        </div>
      </div>

      {/* 📱 Tablet/Mobile View */}
      <div className="block md:hidden bg-white text-black overflow-x-hidden">
        <div className="min-h-screen flex flex-col justify-center items-center px-4 text-left">
          <p
            className="text-2xl uppercase mb-5"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Make Memories, Make Future
          </p>

          <h1
            className="text-xl sm:text-4xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            PARTICIPATE IN
          </h1>
          <h1
            className="text-5xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            EVENTS
          </h1>

          <h1
            className="text-xl sm:text-4xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            BUILD
          </h1>

          <h1
            className="text-5xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            CONNECTIONS
          </h1>
          <h1
            className="text-xl sm:text-4xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            TURNS INTO
          </h1>

          <h1
            className="text-4xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            COLLABORATIONS
          </h1>
          <h1
            className="text-xl sm:text-4xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            IGNITE
          </h1>

          <h1
            className="text-5xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            INNOVATION
          </h1>
          <h1
            className="text-xl sm:text-4xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            COMES WITH
          </h1>
          <h1
            className="text-5xl sm:text-4xl font-bold mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            SHOWING UP
          </h1>

          <Link
            to="/events"
            className="relative z-[99] inline-block px-6 py-3 text-white text-sm font-medium
         rounded-xl shadow-md bg-black
         transition-all duration-300 ease-out hover:scale-105
         hover:bg-white hover:text-black border border-black"
            style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
          >
            Let's Go →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
