import React, { useEffect, useRef } from "react";
import DynamicForeignObj from "./DynamicForeignObj";

const SixthLevel = ({
  onClick,
  circleData,
  levelSixBounds,
  setLevelSixBounds,
  compFlip,
}) => {
  const [{ content: content }] = circleData;
  const ref = useRef(null);

  useEffect(() => {
    if (!levelSixBounds) {
      setLevelSixBounds(ref.current.getBoundingClientRect());
    }
  }, []);

  return (
    <svg
      width="941"
      height="905"
      viewBox="-90 130 1120 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      style={{ maxWidth: "100%" }}
      onClick={() => onClick()}
    >
      <rect
        width="79"
        height="11"
        transform="matrix(-0.589361 0.807869 0.807869 0.589361 359.116 366.825)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(-0.589361 0.807869 0.807869 0.589361 376.56 378.842)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(-0.589361 0.807869 0.807869 0.589361 342.15 354.448)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(-0.589361 0.807869 0.807869 0.589361 325.186 342.072)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(-0.589361 0.807869 0.807869 0.589361 308.22 329.695)"
        fill="#D9D9D9"
      />
      <rect
        x="566.615"
        y="372.104"
        width="79"
        height="11"
        transform="rotate(51.8909 566.615 372.104)"
        fill="#D9D9D9"
      />
      <rect
        x="549.6"
        y="384.722"
        width="79"
        height="11"
        transform="rotate(51.8909 549.6 384.722)"
        fill="#D9D9D9"
      />
      <rect
        x="583.139"
        y="359.143"
        width="79"
        height="11"
        transform="rotate(51.8909 583.139 359.143)"
        fill="#D9D9D9"
      />
      <rect
        x="599.662"
        y="346.183"
        width="79"
        height="11"
        transform="rotate(51.8909 599.662 346.183)"
        fill="#D9D9D9"
      />
      <rect
        x="616.186"
        y="333.223"
        width="79"
        height="11"
        transform="rotate(51.8909 616.186 333.223)"
        fill="#D9D9D9"
      />
      <rect x="426.294" y="252.213" width="79" height="11" fill="#D9D9D9" />
      <rect x="426.294" y="273.213" width="79" height="11" fill="#D9D9D9" />
      <rect x="426.294" y="294.213" width="79" height="11" fill="#D9D9D9" />
      <rect x="426.294" y="315.213" width="79" height="11" fill="#D9D9D9" />
      <rect x="426.294" y="336.213" width="79" height="11" fill="#D9D9D9" />
      <rect
        x="362.961"
        y="580.896"
        width="79"
        height="11"
        transform="rotate(-128.109 362.961 580.896)"
        fill="#D9D9D9"
      />
      <rect
        x="379.976"
        y="568.278"
        width="79"
        height="11"
        transform="rotate(-128.109 379.976 568.278)"
        fill="#D9D9D9"
      />
      <rect
        x="346.438"
        y="593.857"
        width="79"
        height="11"
        transform="rotate(-128.109 346.438 593.857)"
        fill="#D9D9D9"
      />
      <rect
        x="329.914"
        y="606.817"
        width="79"
        height="11"
        transform="rotate(-128.109 329.914 606.817)"
        fill="#D9D9D9"
      />
      <rect
        x="313.391"
        y="619.777"
        width="79"
        height="11"
        transform="rotate(-128.109 313.391 619.777)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(1 0 0 -1 426.294 690.567)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(1 0 0 -1 426.294 669.567)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(0.589361 -0.807869 -0.807869 -0.589361 570.537 587.175)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(0.589361 -0.807869 -0.807869 -0.589361 553.092 575.157)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(0.589361 -0.807869 -0.807869 -0.589361 587.502 599.552)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(0.589361 -0.807869 -0.807869 -0.589361 604.467 611.928)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(0.589361 -0.807869 -0.807869 -0.589361 622.887 623.305)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(1 0 0 -1 426.294 648.567)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(1 0 0 -1 426.294 627.567)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(1 0 0 -1 426.294 606.567)"
        fill="#D9D9D9"
      />
      <g
        id={7}
        cx="465"
        cy="470"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <circle cx="465" cy="470" r="125" fill="#CE4128" />
        <circle
          cx="465"
          cy="470"
          r="130"
          stroke="#BBCCBB"
          strokeOpacity="0.92549"
          strokeWidth="10"
        />
        <DynamicForeignObj
          cx="465"
          cy="470"
          r="125"
          text={
            !compFlip
              ? content.circle_two_content.content_2
              : content.circle_two_content.content_2
          }
        />
      </g>
      <g
        id={6}
        onClick={(e) => {
          e.stopPropagation();
          const groupId = { target: { id: 6 } };
          onClick(groupId, e);
        }}
        cx="185"
        cy="286"
      >
        <circle cx="185" cy="286" r="125" fill="#CE4128" />
        <circle
          cx="185"
          cy="286"
          r="130"
          stroke="#BBCCBB"
          strokeOpacity="0.92549"
          strokeWidth="10"
        />
        <DynamicForeignObj
          cx="185"
          cy="286"
          r="125"
          text={
            !compFlip
              ? content.circle_two_content.content_3[4].key_circle_content_1
              : content.circle_two_content.content_3[4].key_circle_content_2
          }
        />
      </g>
      <g
        id={5}
        onClick={(e) => {
          e.stopPropagation();
          const groupId = { target: { id: 5 } };
          onClick(groupId, e);
        }}
        cx="191.959"
        cy="666.659"
      >
        <circle cx="191.959" cy="666.659" r="125" fill="#CE4128" />
        <circle
          cx="191.959"
          cy="666.659"
          r="130"
          stroke="#BBCCBB"
          strokeOpacity="0.92549"
          strokeWidth="10"
        />
        <DynamicForeignObj
          cx="191.959"
          cy="666.659"
          r="125"
          text={
            !compFlip
              ? content.circle_two_content.content_3[4].key_circle_content_1
              : content.circle_two_content.content_3[4].key_circle_content_2
          }
        />
      </g>
      <g
        id={4}
        onClick={(e) => {
          e.stopPropagation();
          const groupId = { target: { id: 4 } };
          onClick(groupId, e);
        }}
        cx="465"
        cy="813"
      >
        <circle cx="465" cy="813" r="125" fill="#CE4128" />
        <circle
          cx="465"
          cy="813"
          r="130"
          stroke="#BBCCBB"
          strokeOpacity="0.92549"
          strokeWidth="10"
        />
        <DynamicForeignObj
          cx="465"
          cy="813"
          r="125"
          text={
            !compFlip
              ? content.circle_two_content.content_3[3].key_circle_content_1
              : content.circle_two_content.content_3[3].key_circle_content_2
          }
        />
      </g>
      <g
        id={3}
        onClick={(e) => {
          e.stopPropagation();
          const groupId = { target: { id: 3 } };
          onClick(groupId, e);
        }}
        cx="744"
        cy="667"
      >
        <circle cx="744" cy="667" r="125" fill="#CE4128" />
        <circle
          cx="744"
          cy="667"
          r="130"
          stroke="#BBCCBB"
          strokeOpacity="0.92549"
          strokeWidth="10"
        />
        <DynamicForeignObj
          cx="744"
          cy="667"
          r="125"
          text={
            !compFlip
              ? content.circle_two_content.content_3[2].key_circle_content_1
              : content.circle_two_content.content_3[2].key_circle_content_2
          }
        />
      </g>
      <g
        id={2}
        onClick={(e) => {
          e.stopPropagation();
          const groupId = { target: { id: 2 } };
          onClick(groupId, e);
        }}
        cx="737.617"
        cy="286.341"
      >
        <circle cx="737.617" cy="286.341" r="125" fill="#CE4128" />
        <circle
          cx="737.617"
          cy="286.341"
          r="130"
          stroke="#BBCCBB"
          strokeOpacity="0.92549"
          strokeWidth="10"
        />
        <DynamicForeignObj
          cx="737.617"
          cy="286.341"
          r="125"
          text={
            !compFlip
              ? content.circle_two_content.content_3[1].key_circle_content_1
              : content.circle_two_content.content_3[1].key_circle_content_2
          }
        />
      </g>
      <g
        id={1}
        onClick={(e) => {
          e.stopPropagation();
          const groupId = { target: { id: 1 } };
          onClick(groupId, e);
        }}
        cx="465"
        cy="130"
      >
        <circle cx="465" cy="130" r="125" fill="#CE4128" />
        <circle
          cx="465"
          cy="130"
          r="130"
          stroke="#BBCCBB"
          strokeOpacity="0.92549"
          strokeWidth="10"
        />
        <DynamicForeignObj
          cx="465"
          cy="130"
          r="125"
          text={
            !compFlip
              ? content.circle_two_content.content_3[0].key_circle_content_1
              : content.circle_two_content.content_3[0].key_circle_content_2
          }
        />
      </g>
    </svg>
  );
};

export default SixthLevel;
