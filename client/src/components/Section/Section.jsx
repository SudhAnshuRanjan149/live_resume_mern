import React, { useState } from "react";

// ICONS
import { icons } from "../../Assets/icons";

// LOCAL
import Icon_btns from "../ui_components/Buttons/icon_btns/Icon_btns";
import SuccessBtn from "../ui_components/Buttons/simple_btns/SuccessBtn";
import InputField from "../ui_components/InputFields/InputField";
import Model from "../ui_components/Models/Model";
import Accordion from "../ui_components/Accordian/Accordian";

const Section = ({ section_data, last = false }) => {
  const [show, setShow] = useState(false);

  const ModalBody = (section_data) => {
    const [heading, setHeading] = useState("Ram");
    const [subHeading, setSubHeading] = useState("Ram");
    const [moreInfoList, setMoreInfoList] = useState([]);
    const [itemDetailsList, setItemDetailsList] = useState([]);

    const onClickOnSuccessBtn = () => {
      console.log("onClickOnSuccessBtn called");
    };

    const Body = () => {
      return (
        <>
          <InputField value={heading} setValue={setHeading} label="Heading" />
          <InputField
            value={subHeading}
            setValue={setSubHeading}
            label="Sub Heading"
          />
          <InputField
            value={moreInfoList}
            setValue={setMoreInfoList}
            label="More Info List"
          />
          <InputField
            value={itemDetailsList}
            setValue={setItemDetailsList}
            label="Item Details List"
          />
        </>
      );
    };
    return (
      <>
        <div className="modalInnerBody">
          <Accordion Body={Body} />
          <Accordion Body={Body} />
        </div>

        <div className="modelfoot">
          <SuccessBtn onClick={onClickOnSuccessBtn} />
        </div>
      </>
    );
  };

  return (
    <>
      <Model
        show={show}
        setShow={setShow}
        style={{ width: "30rem", height: "28rem" }}
        ModalBody={() => ModalBody(section_data)}
        heading={`Edit ${section_data.title}`}
      />

      <div
        className="section_container"
        style={
          !last
            ? { borderBottom: "1px solid rgb(219, 219, 219)" }
            : { borderBottom: "none" }
        }
      >
        <div className="section_title">
          <div>{section_data.title}</div>
          <Icon_btns
            Icon={<icons.EditIcon />}
            onClick={() => setShow((prev) => !prev)}
          />
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
    </>
  );
};

export default Section;
