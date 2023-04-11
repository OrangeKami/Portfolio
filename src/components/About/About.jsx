import { useInView, animated } from "@react-spring/web";
import "./about.css";

export default function About() {
  const [ref, springs] = useInView(
    () => ({
      from: {
        y: 50,
        opacity: 0,
      },
      to: {
        y: -20,
        opacity: 1,
      },
      config: {
        duration: 500,
      },
    }),
    {
      once: true,
      rootMargin: "0px 0px -25% 0px",
    }
  );

  return (
    <section id="about" className="about">
      <animated.div ref={ref} style={springs}>
        <div className="text-box">
          <h3 className="title">About</h3>
          <p className="text">placeholder text</p>

          <p className="text">placeholder</p>

          <p className="text">placeholder</p>
        </div>
      </animated.div>
    </section>
  );
};


