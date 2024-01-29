import React, { useRef } from 'react';

const FirstLevel = ({ circleData, onClick, bounds, setBounds, compFlip }) => {
  const ref = useRef(null);

  return (
    <svg
      width="941"
      height="905"
      viewBox="-90 20 1100 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: '100%' }}
      ref={ref}
    >
      <rect x="419.464" y="317" width="79" height="11" fill="#D9D9D9" />
      <rect x="419.464" y="254" width="79" height="11" fill="#D9D9D9" />
      <rect x="419.464" y="296" width="79" height="11" fill="#D9D9D9" />
      <rect x="419.464" y="275" width="79" height="11" fill="#D9D9D9" />
      <circle cx="459.464" cy="130" r="125" fill="#CE4128" id={1} onClick={(e) => onClick(e)} />
      <circle
        cx="459.464"
        cy="130"
        r="127.5"
        stroke="#BBCCBB"
        stroke-opacity="0.92549"
        strokeWidth="5"
      />
      <rect
        x="604.172"
        y="554.904"
        width="79"
        height="11"
        transform="rotate(132 604.172 554.904)"
        fill="#D9D9D9"
      />
      <rect
        x="619.778"
        y="568.955"
        width="79"
        height="11"
        transform="rotate(132 619.778 568.955)"
        fill="#D9D9D9"
      />
      <rect
        x="635.384"
        y="583.007"
        width="79"
        height="11"
        transform="rotate(132 635.384 583.007)"
        fill="#D9D9D9"
      />
      <rect
        x="650.99"
        y="597.059"
        width="79"
        height="11"
        transform="rotate(132 650.99 597.059)"
        fill="#D9D9D9"
      />
      <circle
        cx="715.943"
        cy="708.692"
        r="125"
        transform="rotate(-15 715.943 708.692)"
        fill="#CE4128"
        id={2}
        onClick={(e) => onClick(e)}
      />
      <circle
        cx="715.943"
        cy="708.692"
        r="127.5"
        transform="rotate(-15 715.943 708.692)"
        stroke="#BBCCBB"
        stroke-opacity="0.92549"
        strokeWidth="5"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(0.669131 0.743145 0.743145 -0.669131 321.865 554.904)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(0.669131 0.743145 0.743145 -0.669131 306.259 568.955)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(0.669131 0.743145 0.743145 -0.669131 290.653 583.007)"
        fill="#D9D9D9"
      />
      <rect
        width="79"
        height="11"
        transform="matrix(0.669131 0.743145 0.743145 -0.669131 275.046 597.059)"
        fill="#D9D9D9"
      />
      <circle
        cx="125"
        cy="125"
        r="125"
        transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 363.186 620.303)"
        fill="#CE4128"
        id={3}
        onClick={(e) => onClick(e)}
      />
      <circle
        cx="125"
        cy="125"
        r="127.5"
        transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 363.186 620.303)"
        stroke="#BBCCBB"
        stroke-opacity="0.92549"
        strokeWidth="5"
      />
      <circle cx="463.464" cy="477" r="150" fill="#CE4128" id={4} onClick={(e) => onClick(e)} />
      <circle
        cx="463.464"
        cy="477"
        r="152.5"
        stroke="#BBCCBB"
        stroke-opacity="0.92549"
        strokeWidth="5"
      />
    </svg>
  );
};

export default FirstLevel;
