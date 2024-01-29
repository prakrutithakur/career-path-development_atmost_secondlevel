import React, { useEffect, useRef } from "react";
import DynamicForeignObject from "./DynamicForeignObj";
// import DynamicForeignObj from './DynamicForeignObj';

const FirstLevel = ({
  circleData,
  onClick,
  bounds,
  setBounds,
  compFlip,
  setflipFromCompo,
}) => {
  const [{ content: content }] = circleData;
  const ref = useRef(null);

  useEffect(() => {
    // if (!bounds) {
    //   setBounds(ref.current.getBoundingClientRect());
    // }
    setflipFromCompo(false);
  }, []);

  return (
    <svg
      width="941"
      height="905"
      viewBox="-90 20 1100 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: "100%" }}
      ref={ref}
      onClick={() => onClick()}
    >
      <rect x="419.464" y="317" width="79" height="11" fill="#bababa" />
      <rect x="419.464" y="254" width="79" height="11" fill="#bababa" />
      <rect x="419.464" y="296" width="79" height="11" fill="#bababa" />
      <rect x="419.464" y="275" width="79" height="11" fill="#bababa" />

      <g
        id={1}
        onClick={(e) => {
          e.stopPropagation();
          const groupId = { target: { id: 1 } };
          onClick(groupId, e);
        }}
        cx="459.464"
        cy="130"
        style={{ cursor: "pointer" }}
      >
        <circle
          cx="459.464"
          cy="130"
          r="125"
          fill="#CE4128"
          id={1}
          onClick={(e) => onClick(e)}
        />
        <DynamicForeignObject
          cx="459.464"
          cy="130"
          r="125"
          text={"Lorem Ipsum"}
        />
        <circle
          cx="459.464"
          cy="130"
          r="130"
          stroke="#BBCCBB"
          stroke-opacity="0.92549"
          strokeWidth="10"
        />
      </g>

      {/* <text transform="translate(389.464 105)" fill="#CE4128" xml:space="preserve" style="white-space: pre" fontFamily="Poppins" fontSize="24" fontWeight="600" letterSpacing="0em"><tspan x="16.3477" y="21.9">PRACTICE </tspan><tspan x="5.9297" y="48.9">STATEMENT</tspan></text> */}
      <rect
        x="604.172"
        y="554.904"
        width="79"
        height="11"
        transform="rotate(132 604.172 554.904)"
        fill="#bababa"
      />
      <rect
        x="619.778"
        y="568.955"
        width="79"
        height="11"
        transform="rotate(132 619.778 568.955)"
        fill="#bababa"
      />
      <rect
        x="635.384"
        y="583.007"
        width="79"
        height="11"
        transform="rotate(132 635.384 583.007)"
        fill="#bababa"
      />
      <rect
        x="650.99"
        y="597.059"
        width="79"
        height="11"
        transform="rotate(132 650.99 597.059)"
        fill="#bababa"
      />
      <g
        id={2}
        onClick={(e) => {
          e.stopPropagation();
          const groupId = { target: { id: 2 } };
          onClick(groupId, e);
        }}
        cx="715.943"
        cy="708.692"
        style={{ cursor: "pointer" }}
      >
        <circle
          cx="715.943"
          cy="708.692"
          r="125"
          transform="rotate(-15 715.943 708.692)"
          fill="#CE4128"
          id={2}
          onClick={(e) => onClick(e)}
        />
        <DynamicForeignObject
          cx="715.943"
          cy="708.692"
          r="125"
          text={"Lorem Ipsum"}
        />
        <circle
          cx="715.943"
          cy="708.692"
          r="130"
          transform="rotate(-15 715.943 708.692)"
          stroke="#BBCCBB"
          stroke-opacity="0.92549"
          strokeWidth="10"
        />
      </g>
      {/* <text transform="translate(613.48 713.091) rotate(-15)" fill="#CE4128" xml:space="preserve" style="white-space: pre" fontFamily="Poppins" fontSize="23" fontWeight="600" letterSpacing="0em"><tspan x="5.063" y="21.55">EDUCATION AND </tspan><tspan x="32.2857" y="48.55">EXPERIENCE</tspan></text> */}
      <rect
        width="79"
        height="11"
        transform="matrix(0.669131 0.743145 0.743145 -0.669131 321.865 554.904)"
        fill="#bababa"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(0.669131 0.743145 0.743145 -0.669131 306.259 568.955)"
        fill="#bababa"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(0.669131 0.743145 0.743145 -0.669131 290.653 583.007)"
        fill="#bababa"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(0.669131 0.743145 0.743145 -0.669131 275.046 597.059)"
        fill="#bababa"
      />
      <g
        id={4}
        onClick={(e) => {
          e.stopPropagation();
          const groupId = { target: { id: 4 } };
          onClick(groupId, e);
        }}
        cx="463.464"
        cy="477"
        style={{ cursor: "pointer" }}
      >
        <circle
          cx="210.092375"
          cy="708.691375"
          r="125"
          fill="#CE4128"
          id={3}
          onClick={(e) => {
            e.stopPropagation();
            onClick(e);
          }}
        />
        <DynamicForeignObject
          cx="210.092375"
          cy="708.691375"
          r="125"
          text={"Lorem Ipsum"}
        />
        <circle
          cx="210.092375"
          cy="708.691375"
          r="130"
          stroke="#BBCCBB"
          stroke-opacity="0.92549"
          strokeWidth="10"
        />
      </g>
      {/* <text transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 312.556 713.091)" fill="#CE4128" xml:space="preserve" style="white-space: pre" fontFamily="Poppins" fontSize="23" fontWeight="600" letterSpacing="0em"><tspan x="5.063" y="21.55">EDUCATION AND </tspan><tspan x="32.2857" y="48.55">EXPERIENCE</tspan></text> */}
      <g
        id={4}
        onClick={(e) => {
          e.stopPropagation();
          // const groupId = { target: { id: 4 } };
          // onClick(groupId, e);
        }}
        cx="463.464"
        cy="477"
        // style={{ cursor: "pointer" }}
      >
        <circle cx="463.464" cy="477" r="150" fill="#CE4128" />
        <DynamicForeignObject
          cx="463.464"
          cy="477"
          r="150"
          text={
            !compFlip
              ? content.circle_six_content.content_1
              : content.circle_six_content.content_2
          }
        />
        <circle
          cx="463.464"
          cy="477"
          r="155"
          stroke="#BBCCBB"
          stroke-opacity="0.92549"
          strokeWidth="10"
        />
      </g>
    </svg>
  );
};

export default FirstLevel;
