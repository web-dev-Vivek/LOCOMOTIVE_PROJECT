import Navbar from "../component/Navbar.jsx";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "../component/Footer.jsx";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const section2Ref = useRef(null); // IN EVENTS
  const section3Ref = useRef(null); // CONNECTIONS
  const section4Ref = useRef(null); // COLLABORATIONS
  const section5Ref = useRef(null); // SHOWING UP

  useEffect(() => {
    // Set initial positions
    gsap.set(section2Ref.current, { x: 0, y: 0 });
    gsap.set(section3Ref.current, { x: 0, y: 0 });

    // Section 2 Animation
    gsap.to(section2Ref.current, {
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top 80%",
        end: "top 10%",
        scrub: 2,
      },
      x: 680,
      y: 250,
      ease: "power1.out",
    });

    // Section 3 Animation (Trigger after section2 animation completes)
    gsap.to(section3Ref.current, {
      scrollTrigger: {
        trigger: section3Ref.current,
        start: "top 40%",
        end: "top 0%",
        scrub: 2,
      },
      x: -380,
      y: 250,
      ease: "power1.out",
    });

    gsap.to(section4Ref.current, {
      scrollTrigger: {
        trigger: section4Ref.current,
        start: "top 40%",
        end: "top 0%",
        scrub: 2,
      },
      x: 180,
      y: 500,
      ease: "power1.out",
    });
    gsap.to(section5Ref.current, {
      scrollTrigger: {
        trigger: section5Ref.current,
        start: "top 40%",
        end: "top 0%",
        scrub: 2,
      },
      x: -500,
      y: 500,
      ease: "power1.out",
    });
  }, []);

  return (
    <div>
      <Navbar />

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
          ref={section2Ref}
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
          ref={section3Ref}
          className="text-9xl font-bold  w-fit whitespace-normal relative"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          CONNECTIONS
        </h1>
      </div>

      {/* Section 3 */}
      <div className="w-[100vw] h-screen pl-10 flex-col ">
        <p className="text-sm" style={{ fontFamily: "'Limelight', display" }}>
          TURN INTO
        </p>
        <h1
          ref={section4Ref}
          className="text-9xl font-bold  w-fit whitespace-normal relative"
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
          className="text-9xl font-bold  w-fit whitespace-normal relative"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          INNOVATION
        </h1>
      </div>

      {/* Section 5 */}
      <div className="w-[100vw] h-screen pl-10 flex justify-start flex-col ">
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
      <Footer />
    </div>
  );
};

export default Home;
