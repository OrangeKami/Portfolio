import React from "react";
import "./footer.css";
import { siteInfo } from "../../constants/siteInfo";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <div className="text-box">
        <p className="text">
          &copy; {date.getFullYear()} {siteInfo.firstName} {siteInfo.lastName} 
        </p>
      </div>
    </footer>
  );
}
