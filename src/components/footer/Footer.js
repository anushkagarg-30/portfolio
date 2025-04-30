import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting} from "../../portfolio";
import { useHistory } from "react-router-dom";
import SocialMedia from "../socialMedia/SocialMedia";

export default function Footer(props) {
  const theme = props.theme;
  const history = useHistory();

  return (
    <div className="footer-container">
      <Fade bottom duration={1000} distance="20px">
        <div className="footer-line" />

        <div className="footer-main">
          {/* Left: Social Media */}
          <div className="footer-left">
            <SocialMedia />
          </div>

          {/* Center: Copyright */}
          <div className="footer-center">
            <p className="footer-text" style={{ color: theme.secondaryText }}>
              © {greeting.full_name}
            </p>
          </div>

          {/* Right: Contact Me button */}
          <div className="footer-right">
            <button
              className="footer-button"
              style={{
                backgroundColor: theme.accentBright,
                color: theme.body,
              }}
              onClick={() => history.push("/contact")}
            >
              Contact Me
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
}
