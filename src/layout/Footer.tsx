import React from "react";
import { Link } from "react-router-dom";

import { useTheme } from "@mui/material/styles";

import "./Footer.css";
import { MenuConfig } from "./menu-items";

const Footer = () => {
  const theme = useTheme();

  // Dynamically set CSS variables for theme colors
  const rootStyle = {
    "--footer-bg-color": theme.palette.primary.main,
    "--footer-text-color": theme.palette.primary.contrastText,
  } as React.CSSProperties;

  return (
    <div className="footer" style={rootStyle}>
      {/* Links and socials sharing a single row */}
      <div className="row">
        <div className="links">
          {MenuConfig.map((item, index) => (
              <Link to={item.path} key={index}>{item.display}</Link>
          ))}
        </div>
        <div className="socials">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook-icon.svg" alt="Facebook" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram-icon.svg" alt="Twitter" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/youtube-icon.svg" alt="Twitter" />
          </a>
        </div>
      </div>

      {/* Acknowledgments spanning the full width */}
      <div className="acknowledgements">
        <div>
          <img src="/FLAGS/Australian_Aboriginal_Flag.svg" />
          <p>
            We respectfully acknowledge the Traditional Custodians of Country
            throughout Australia.
          </p>
        </div>
        <div>
          <img src="/FLAGS/Flag_of_the_Torres_Strait_Islanders.svg.png" />
          <p>We pay our respects to Elders past, present and emerging.</p>
        </div>
        <div>
          <img src="/FLAGS/gay-flag-svgrepo-com.svg" />
          <p>
            At The Tango Collective, we welcome and support the LGBTIQ+
            Community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
