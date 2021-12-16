import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var frontendTitle = this.props.sharedSkills.frontend.title;
      var frontendSkills = this.props.sharedSkills.frontend.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      var backendTitle = this.props.sharedSkills.backend.title;
      var backendSkills = this.props.sharedSkills.backend.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });

      var toolsTitle = this.props.sharedSkills.tools.title;
      var toolsSkills = this.props.sharedSkills.tools.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="row">
          <div className="col-md-4 text-center">
            <h2 className="skill-title">{frontendTitle}</h2>
            <ul className="list-inline mx-auto skill-icon">{frontendSkills}</ul>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="skill-title">{backendTitle}</h2>
            <ul className="list-inline mx-auto skill-icon">{backendSkills}</ul>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="skill-title">{toolsTitle}</h2>
            <ul className="list-inline mx-auto skill-icon">{toolsSkills}</ul>
          </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
