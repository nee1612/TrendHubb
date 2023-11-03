import React from "react";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";

const Star = ({ stars, count }) => {
  const ratingStart = Array.from({ length: 5 }, (el, elemet) => {
    let number = elemet + 0.5;
    return (
      <span key={elemet}>
        {stars >= elemet + 1 ? (
          <BiSolidStar size={17} style={{ fill: "#005B41" }} />
        ) : stars >= number ? (
          <BiSolidStarHalf size={17} style={{ fill: "#005B41" }} />
        ) : (
          <BiStar size={17} style={{ fill: "#005B41" }} />
        )}
      </span>
    );
  });
  return (
    <>
      <div>{ratingStart} </div>
    </>
  );
};

export default Star;
