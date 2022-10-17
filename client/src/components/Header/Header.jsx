import React, { useState } from "react";

// MUI
import Tooltip from "@mui/material/Tooltip";

// LOCAL
import copyToClicpBoard from "../common_functions/copyToClicpBoard";
import Icon_btns from "../ui_components/Buttons/icon_btns/Icon_btns";
import { icons } from "../../Assets/icons";
import Model from "../ui_components/Models/Model";
import InputField from "../ui_components/InputFields/InputField";
import SuccessBtn from "../ui_components/Buttons/simple_btns/SuccessBtn";

const profile_data = {
  name: "Sudhanshu Ranjan",
  linkedIn: {
    url: "https://www.linkedin.com/in/sudhanshuranjan149/",
    profile_name: "sudhanshuranjan149",
  },
  email: "sudhanshuranjan149@gmail.com",
  mobileNo: "+91-7987245525",
};

const Header = () => {
  const [show, setShow] = useState(false);


  const ModalBody = () => {
    const [name, setName] = useState("Ram");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [website, setWebsite] = useState("");

	const onClickOnSuccessBtn = () => {
		console.log("onClickOnSuccessBtn called");
	  };
    return (
      <>
        <div className="modalInnerBody">
          <InputField value={name} setValue={setName} label="Name" />
          <InputField
            value={email}
            setValue={setEmail}
            label="Email"
            type="email"
          />
          <InputField
            value={contactNo}
            setValue={setContactNo}
            label="Mobile No"
            type="number"
          />
          <InputField
            value={website}
            setValue={setWebsite}
            label="Website"
            required={false}
          />
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
        ModalBody={ModalBody}
        heading="Edit Heading"
      />
      <div className="resume-heading-container">
        <div className="body_add_icon">
          <Icon_btns
            Icon={<icons.EditIcon />}
            onClick={() => setShow((prev) => !prev)}
          />
        </div>
        <div className="resume-title">{profile_data.name}</div>

        <div className="contact-details">
          <div>
            <span className="label">LinkedIn : </span>
            <Tooltip title="Click here to see LinkedIN profile">
              <span className="value">
                <a href={profile_data.linkedIn.url} target="_blank">
                  {profile_data.linkedIn.profile_name}
                </a>
              </span>
            </Tooltip>
          </div>

          <div>
            <span className="email-label label">Email-id : </span>
            <Tooltip title="Click here to copy email to the clipboard">
              <span
                onClick={copyToClicpBoard}
                value={profile_data.email}
                className="email-id value"
              >
                {profile_data.email}
              </span>
            </Tooltip>
          </div>
          <div>
            <span className="label">Contact No : </span>
            <Tooltip title="Click here to copy Mobile no to the clipboard">
              <span
                onClick={copyToClicpBoard}
                value={profile_data.mobileNo}
                className="value"
              >
                {profile_data.mobileNo}
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
