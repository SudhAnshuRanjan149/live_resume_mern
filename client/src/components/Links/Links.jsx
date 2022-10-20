import React from "react";
import { icons } from "../../Assets/icons";

// IMAGE-ICON
import LinkedIn from "../../Assets/linkedin.png";
import Github from "../../Assets/github.png";
import Youtube from "../../Assets/youtube.png";
import Icon_btns from "../ui_components/Buttons/icon_btns/Icon_btns";

const links_data = [
  {
    name: "LinkedIn",
    icon: "../../Assets/linkedin.png",
    url: "https://www.linkedin.com/in/sudhanshuranjan149/",
    profile_name: "sudhanshuranjan149",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/user/SARIDHANT/videos",
    profile_name: "Sudhanshu-Ranjan",
  },
  {
    name: "Github",
    url: "https://github.com/SudhAnshuRanjan149",
    profile_name: "sudhanshuranjan149",
  },
];

const Links = () => {
  return (
    <div className="Links-section">
      <div className="sidebar-title">
        LINKS
        <div>
          {/* <Icon_btns Icon={<icons.EditIcon />} /> */}
        </div>
      </div>

      <div className="links-div-container">
        {links_data.map((link, index) => (
          <div key={index} className="links-div-container-child">
            {link.name === "LinkedIn" && <img src={LinkedIn} alt="logo" />}
            {link.name === "Youtube" && <img src={Youtube} alt="logo" />}
            {link.name === "Github" && <img src={Github} alt="logo" />}

            <div className="section-subtitle">{`${link.name}:`}</div>
            <div className="section-body">
              <a href={link.url} target="_blank">
                {link.profile_name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
