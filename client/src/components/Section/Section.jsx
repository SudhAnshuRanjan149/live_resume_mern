import React from "react";

// ICONS
import { icons } from "../../Assets/icons";
import Icon_btns from "../ui_components/Buttons/icon_btns/Icon_btns";

const Section = ({ section_data, last = false }) => {
  return (
    <div
      className="section_container"
      style={
        !last
          ? { borderBottom: "1px solid rgb(219, 219, 219)" }
          : { borderBottom: "none" }
      }
    >
      <div className="section_title">
        <div> {section_data.title}</div>
        <Icon_btns Icon={<icons.EditIcon />} />
      </div>

      {section_data.list.map((data, index) => (
        <div key={index} className="section_items">
          <div className="item_head">
            <span className="item_heading">{data.heading}</span>
            <span className="item_subheading">{data.subHeading}</span>

            {data?.links?.code && (
              <a href={data?.links?.code} target="_blank">
                <Icon_btns
                  size="small"
                  toolTip="code"
                  Icon={
                    <icons.GitHubIcon
                      style={{ width: "1rem", height: "1rem" }}
                    />
                  }
                />
              </a>
            )}
            {data?.links?.live && (
              <a href={data?.links?.live} target="_blank">
                <Icon_btns
                  size="small"
                  toolTip="Live"
                  Icon={
                    <icons.RocketLaunchIcon
                      style={{ width: "1rem", height: "1rem" }}
                    />
                  }
                />
              </a>
            )}
          </div>
          <div className="item_info">
            {data.more_info_list.map((info, index2) => (
              <span key={index2} className="info">
                {info}
              </span>
            ))}
          </div>

          <div className="item_details">
            {data.item_details_list.map((detail, index3) => (
              <li key={index3} className="item_detail">
                {detail}
              </li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section;
