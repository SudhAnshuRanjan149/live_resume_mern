import React from "react";
import Icon_btns from "../ui_components/Buttons/icon_btns/Icon_btns";
import { icons } from "../../Assets/icons";

const education_data = [
  {
    institute: "LAXMI NARAIN COLLEGE OF TECHNOLOGY, BHOPAL (RGPV)",
    grad_type: "ME in Power Electronics",
    grad_year: "Grad. Aug 2021",
    result: "CGPA: 9.33",
  },
  {
    institute: "LAXMI NARAIN COLLEGE OF TECHNOLOGY, BHOPAL (RGPV)",
    grad_type: "BE in Electrical and Electronics Engineering",
    grad_year: "Grad. Aug 2019",
    result: "CGPA: 7.63",
  },
  {
    institute: "R B S INTER COLLEGE, PATNA",
    grad_type: "12th standard with PCM (BSEB)",
    grad_year: "Grad. Mar 2015",
    result: "Percentage: 67.6",
  },
  {
    institute: "HIMALAYAN INTERNATIONAL SCHOOL, PATNA",
    grad_type: "10th standard (CBSE)",
    grad_year: "Grad. Mar 2012",
    result: "CGPA: 10",
  },
];

const Education = () => {
  return (
    <div className="EDUCATION-section section">
      <div className="sidebar-title">
        <div>EDUCATION</div>

        <div>
          {/* <Icon_btns Icon={<icons.EditIcon />} /> */}
        </div>
      </div>

      {education_data.map((data, index) => (
        <div key={index}>
          <div className="section-title">{data.institute}</div>
          <div className="section-subtitle">{data.grad_type}</div>
          <div className="section-body">
            <span>{data.grad_year}</span>
            <span>{data.result}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
