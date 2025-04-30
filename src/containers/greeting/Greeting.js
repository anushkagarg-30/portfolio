import React from "react";
import "./Greeting.css";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          {/* Profile image on left */}
          <div className="greeting-image-div">
            <img
              src={require("../../assests/images/profile.jpg")}
              alt="Anushka Garg"
              className="profile-image"
            />
          </div>

          {/* Text on right */}
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
