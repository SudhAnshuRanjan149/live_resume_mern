import React from "react";
import Icon_btns from "../Buttons/icon_btns/Icon_btns";
import { icons } from "../../../Assets/icons";

import "./Model.css";

const Model = ({ style, show, setShow, heading = "Edit", ModalBody = "" }) => {
  return (
    <div
      className="model"
      style={show ? { display: "flex" } : { display: "none" }}
    >
      <div className="background"></div>
      <div style={style} className="model_container">
        <div className="modelhead">
          <div className="modelhead_heading">{heading}</div>

          <Icon_btns
            Icon={<icons.CloseIcon />}
            toolTip="close"
            onClick={() => setShow((prev) => !prev)}
          />
        </div>
        <div className="modelbody">{ModalBody !== "" ? <ModalBody /> : ""}</div>
      </div>
    </div>
  );
};

export default Model;
