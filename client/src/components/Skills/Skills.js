import React from "react";
import Icon_btns from "../ui_components/Buttons/icon_btns/Icon_btns";
import { icons } from "../../Assets/icons";


const skills_data = [
  {
    title: "PROGRAMMING",
    list: [
      {
        subtitle: "Over 20000 lines:",
        skills_list: ["React JS", "JavaScript", "HTML", "CSS"],
      },
      {
        subtitle: "Over 5000 lines:",
        skills_list: [
          "Node JS",
          "Express JS",
          "Java",
          "SQL",
          "PostgreSQL",
          "SCSS",
        ],
      },
      {
        subtitle: "Over 2000 lines:",
        skills_list: ["C-Sharp", "DotNet API", "MongoDB", "Redux"],
      },
      {
        subtitle: "Familiar:",
        skills_list: [
          "GIT",
          "Github",
          "Postman",
          "JMeter",
          "VS Code",
          "Visual Studio",
          "NPM",
          "Azure Devops",
          "IIS Server",
        ],
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="Skils-section section">
      <div className="sidebar-title">SKILLS
	  
	  <div>
          {/* <Icon_btns Icon={<icons.EditIcon />} /> */}
        </div>
	  </div>
      <div className="skils-div">
        {skills_data.map((data, index) => (
          <div key={index}>
            <div className="section-title">{data.title}</div>
            {data.list.map((data1, index1) => (
              <div key={index1}>
                <div className="section-subtitle">{data1.subtitle}</div>
                <div className="section-body">
                  <div className="skills-list">
                    {data1.skills_list.map((skill, index2) => (
                      <span key={index2}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
