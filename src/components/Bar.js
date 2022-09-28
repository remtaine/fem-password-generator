import React from "react";
import PropTypes from "prop-types";

function Bar(props) {
  const { color } = props;
  return <div className={"w-1 h-3" + " " + color}></div>;
}

Bar.propTypes = { color: PropTypes.string };

Bar.defaultProps = { color: "bg-blue-500" };
export default Bar;
