import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  const sections = [
    { label: "Problem", text: repo.problem },
    { label: "Approach", text: repo.approach },
    { label: "Results", text: repo.results },
  ].filter((section) => section.text);

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>

          {sections.length > 0 ? (
            <div className="project-sections">
              {sections.map((section) => (
                <div className="project-section" key={section.label}>
                  <span
                    className="project-section-label"
                    style={{ color: theme.accentColor }}
                  >
                    {section.label}
                  </span>
                  <p
                    className="project-section-text"
                    style={{ color: theme.text }}
                  >
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="repo-description" style={{ color: theme.text }}>
              {repo.description}
            </p>
          )}

          <div className="flexDiv">
            <div className="repo-details Leftitem">
              <ProjectLanguages logos={repo.languages} />
            </div>
            <div className="repo-details Rightitem">
              <ProjectLinks logos={repo.links} />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
