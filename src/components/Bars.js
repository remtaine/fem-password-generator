import React from "react";
import PropTypes from "prop-types";
import Bar from "./Bar";

function Bars(props) {
  const { score } = props;
  const colors = ["bg-fem-600", "bg-fem-700", "bg-fem-800", "bg-fem-500"];
  return (
    <div className="inline-block flex gap-[3px]">
      <Bar
        color={
          score >= 1 ? colors[score - 1] : "border border-1 border-fem-300"
        }
      />
      <Bar
        color={
          score >= 2 ? colors[score - 1] : "border border-1 border-fem-300"
        }
      />
      <Bar
        color={
          score >= 3 ? colors[score - 1] : "border border-1 border-fem-300"
        }
      />
      <Bar
        color={
          score >= 4 ? colors[score - 1] : "border border-1 border-fem-300"
        }
      />
    </div>
  );
}

Bars.propTypes = { score: PropTypes.number };
Bars.defaultProps = { score: 2 };

export default Bars;
