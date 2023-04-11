import React from 'react'
import { animated, useSpring } from "@react-spring/web";
import { siteInfo } from "../../constants/SiteInfo";
import "./sidemail.css"

export default function SideEmail() {
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
   <animated.aside style={spring} className="side-mail">
     <a href={`mailto:${siteInfo.email}`} className="mail" title={`${siteInfo.email}`}>
       {`${siteInfo.email}`}
     </a>
     <div className="decoration"></div>
   </animated.aside>
 );
}
