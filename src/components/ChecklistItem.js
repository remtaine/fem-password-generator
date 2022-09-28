import React from "react";
// import PropTypes from "prop-types";
import Checkbox from "./ui/Checkbox";

function ChecklistItem(props) {
  return (
    <div className="flex items-center gap-2 pl-0">
      <Checkbox />
      <span className="text-xs">{props.children}</span>
    </div>
  );
}

ChecklistItem.propTypes = {};

export default ChecklistItem;
