import { animated, useSpring } from "@react-spring/web";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteInfo } from "../../constants/siteInfo";
import "./sidelinks.css";

export default function SideLinks() {
  const spring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 3000,
    config: {
      duration: 300,
    },
  });
  return (
    <animated.aside style={spring} className="side-links">
      <div className="links-box">
        <a href={siteInfo.github.url} target="_blank" className="link">
          <FaGithub />
        </a>
        <a href={siteInfo.blog.url} target="_blank" className="link">
          <FaLinkedin />
        </a>
      </div>
      <div className="decoration"></div>
    </animated.aside>
  );
}
