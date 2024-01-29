import React, { useEffect, useRef } from "react";
import DynamicForeignObj from "./DynamicForeignObj";

const ThirdLevel = ({ circleData, onClick, bounds, setBounds, compFlip }) => {
  const [{ content: content }] = circleData;
  const ref = useRef(null);

  useEffect(() => {
    if (!bounds) {
      setBounds(ref.current.getBoundingClientRect());
    }
  }, []);

  return (
    <svg
      width="941"
      height="905"
      viewBox="-90 20 1100 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: "100%" }}
      onClick={() => onClick()}
      ref={ref}
    >
      <rect
        x="618.91"
        y="409.021"
        width="79"
        height="11"
        transform="rotate(79.7778 618.91 409.021)"
        fill="#D9D9D9"
      />
      <rect
        x="639.577"
        y="405.293"
        width="79"
        height="11"
        transform="rotate(79.7778 639.577 405.293)"
        fill="#D9D9D9"
      />
      <rect
        x="660.244"
        y="401.566"
        width="79"
        height="11"
        transform="rotate(79.7778 660.244 401.566)"
        fill="#D9D9D9"
      />
      <rect
        x="680.91"
        y="397.84"
        width="79"
        height="11"
        transform="rotate(79.7778 680.91 397.84)"
        fill="#D9D9D9"
      />
      <rect x="425" y="317" width="79" height="11" fill="#D9D9D9" />
      <rect x="425" y="254" width="79" height="11" fill="#D9D9D9" />
      <rect x="425" y="296" width="79" height="11" fill="#D9D9D9" />
      <rect x="425" y="275" width="79" height="11" fill="#D9D9D9" />
      <rect
        x="591.951"
        y="587.794"
        width="79"
        height="11"
        transform="rotate(147 591.951 587.794)"
        fill="#D9D9D9"
      />
      <rect
        x="603.388"
        y="605.405"
        width="79"
        height="11"
        transform="rotate(147 603.388 605.405)"
        fill="#D9D9D9"
      />
      <rect
        x="614.825"
        y="623.018"
        width="79"
        height="11"
        transform="rotate(147 614.825 623.018)"
        fill="#D9D9D9"
      />
      <rect
        x="626.263"
        y="640.63"
        width="79"
        height="11"
        transform="rotate(147 626.263 640.63)"
        fill="#D9D9D9"
      />
      <rect
        x="427.551"
        y="632.575"
        width="79"
        height="11"
        transform="rotate(-150 427.551 632.575)"
        fill="#D9D9D9"
      />
      <rect
        x="417.051"
        y="650.762"
        width="79"
        height="11"
        transform="rotate(-150 417.051 650.762)"
        fill="#D9D9D9"
      />
      <rect
        x="406.551"
        y="668.948"
        width="79"
        height="11"
        transform="rotate(-150 406.551 668.948)"
        fill="#D9D9D9"
      />
      <rect
        x="396.051"
        y="687.135"
        width="79"
        height="11"
        transform="rotate(-150 396.051 687.135)"
        fill="#D9D9D9"
      />
      <rect
        x="306.482"
        y="482.45"
        width="79"
        height="11"
        transform="rotate(-79.0108 306.482 482.45)"
        fill="#D9D9D9"
      />
      <rect
        x="285.867"
        y="478.447"
        width="79"
        height="11"
        transform="rotate(-79.0108 285.867 478.447)"
        fill="#D9D9D9"
      />
      <rect
        x="265.252"
        y="474.444"
        width="79"
        height="11"
        transform="rotate(-79.0108 265.252 474.444)"
        fill="#D9D9D9"
      />
      <rect
        x="244.637"
        y="470.44"
        width="79"
        height="11"
        transform="rotate(-79.0108 244.637 470.44)"
        fill="#D9D9D9"
      />
      <g
        id={"keys"}
        onClick={(e) => {
          e.stopPropagation();
          const groupId = { target: { id: "keys" } };
          onClick(groupId, e);
        }}
        cx="810.169"
        cy="413.199"
      >
        <circle cx="810.169" cy="413.199" r="125" fill="#E07127" />
        <circle
          cx="810.169"
          cy="413.199"
          r="130"
          stroke="#BBCCBB"
          strokeOpacity="0.92549"
          strokeWidth="10"
        />
        <DynamicForeignObj
          cx="810.169"
          cy="413.199"
          r="125"
          text={content.circle_two_content.content_1}
        />
      </g>
      <g
        id={2}
        onClick={(e) => {
          e.stopPropagation();

          const groupId = { target: { id: 2 } };
          onClick(groupId, e);
        }}
        cx="465"
        cy="130"
      >
        <circle cx="465" cy="130" r="125" fill="#E07127" />
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
              ? content.circle_one_content.content_1
              : content.circle_one_content.content_2
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
        cx="660.11"
        cy="765.27"
      >
        <circle cx="660.11" cy="765.27" r="125" fill="#E07127" />
        <circle
          cx="660.11"
          cy="765.27"
          r="130"
          stroke="#BBCCBB"
          strokeOpacity="0.92549"
          strokeWidth="10"
        />
        <DynamicForeignObj
          cx="660.11"
          cy="765.27"
          r="125"
          text={
            !compFlip
              ? content.circle_three_content.content_1
              : content.circle_three_content.content_2
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
        cx="299.802"
        cy="774.745"
      >
        <circle cx="299.802" cy="774.745" r="125" fill="#E07127" />
        <circle
          cx="299.802"
          cy="774.745"
          r="130"
          stroke="#BBCCBB"
          strokeOpacity="0.92549"
          strokeWidth="10"
        />
        <DynamicForeignObj
          cx="299.802"
          cy="774.745"
          r="125"
          text={
            !compFlip
              ? content.circle_four_content.content_1
              : content.circle_four_content.content_2
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
        cx="130.536"
        cy="407.536"
      >
        <circle cx="130.536" cy="407.536" r="125" fill="#E07127" />
        <circle
          cx="130.536"
          cy="407.536"
          r="130"
          stroke="#BBCCBB"
          strokeOpacity="0.92549"
          strokeWidth="10"
        />
        <DynamicForeignObj
          cx="130.536"
          cy="407.536"
          r="125"
          text={
            !compFlip
              ? content.circle_five_content.content_1
              : content.circle_five_content.content_2
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
        cx="469"
        cy="477"
      >
        <circle cx="469" cy="477" r="150" fill="#E07127" />
        <circle
          cx="469"
          cy="477"
          r="152.5"
          stroke="#BBCCBB"
          strokeOpacity="0.92549"
          strokeWidth="10"
        />
        <DynamicForeignObj
          cx="469"
          cy="477"
          r="150"
          text={
            !compFlip
              ? content.circle_six_content.content_1
              : content.circle_six_content.content_2
          }
        />
      </g>
    </svg>
  );
};

export default ThirdLevel;
