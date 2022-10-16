import React from "react";

// MUI
import Tooltip from "@mui/material/Tooltip";

// ICONS
import { icons } from "../../../../Assets/icons";

// CSS
import "./icon_btns.css";

const Icon_btns = ({
  Icon,
  onClick = "",
  toolTip = "Edit",
  size = "normal",
  path = "",
}) => {
  return (
    <Tooltip title={toolTip}>
      <div
        style={
          size === "small"
            ? {
                width: "1rem",
                height: "1rem",

                color: "black",
              }
            : {}
        }
        className="icon_btns"
        onClick={onClick === "" ? "" : onClick}
      >
        {Icon}
      </div>
    </Tooltip>
  );
};

export default Icon_btns;
