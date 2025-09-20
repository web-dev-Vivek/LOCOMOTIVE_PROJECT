import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    // Skip for mobile/tablet
    if (window.innerWidth < 768) return;

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

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />

      {/* 💻 Desktop / Laptop View */}
      <div className="hidden md:block">
        {/* Section 1 */}
        <div className="w-[100vw] pl-10 flex justify-end flex-col h-[100vh]">
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
            className="text-9xl font-bold w-fit whitespace-normal relative"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            IN EVENTS
          </h1>
        </div>

        {/* Section 2 */}
        <div className="w-[100vw] overflow-hidden flex justify-center items-end pr-10 flex-col h-[100vh]">
          <h1
            className="font-bold text-sm"
            style={{ fontFamily: "'Limelight', display" }}
          >
            BUILD
          </h1>
          <h1
            className="text-9xl font-bold w-fit whitespace-normal relative"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            CONNECTIONS
          </h1>
        </div>

        {/* Section 3 */}
        <div className="w-[100vw] h-screen pl-10 flex-col">
          <p className="text-sm" style={{ fontFamily: "'Limelight', display" }}>
            TURN INTO
          </p>
          <h1
            className="text-9xl font-bold w-fit whitespace-normal relative"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            COLLABORATIONS
          </h1>
        </div>

        {/* Section 4 */}
        <div className="w-[100vw] pl-10 flex justify-start items-end pr-5 flex-col h-[100vh]">
          <p
            className="font-bold text-sm"
            style={{ fontFamily: "'Limelight', display" }}
          >
            ignite
          </p>
          <h1
            className="text-9xl font-bold w-fit whitespace-normal relative"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            INNOVATION
          </h1>
        </div>

        {/* Section 5 */}
        <div className="w-[100vw] h-[50vh] pl-10 flex justify-start flex-col">
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

      {/* 📱 Mobile/Tablet View */}
      <div className="block md:hidden mt-20 bg-white text-black overflow-x-hidden">
        {/* ...same mobile content as before... */}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
