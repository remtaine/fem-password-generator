import React from "react";
import PropTypes from "prop-types";

function BarScore(props) {
  const { score } = props;
  const ratings = ["too weak!", "weak", "medium", "strong"];
  return <span className="uppercase text-2xs">{ratings[score - 1]}</span>;
}

BarScore.propTypes = { score: PropTypes.number };
BarScore.defaultProps = { score: 2 };

export default BarScore;
