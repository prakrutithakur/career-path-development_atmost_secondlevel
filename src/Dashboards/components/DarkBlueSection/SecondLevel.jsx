import React, { useEffect, useState } from 'react';
import ForeignObjLeveltwo from './ForeignObjLeveltwo';
import data from './data.json';
// import styled from 'styled-components';
import { hexToRGBA } from '../HighlighPathOpacity';
import StyledGtag from '../StyledGtag';

const SecondLevelDarkblue = ({ onClick, setChangeParent }) => {
  const [enablemouse, setEnableMouse] = useState(false);
  const [highlightedPathColor, sethighlightedPathColor] = useState('');
  const [hoveredCircleid, sethoveredCircleid] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setEnableMouse(true);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const onMouseHoverFunc = (color, id) => {
    const reducedOpacityColor = hexToRGBA(color, 0.7);

    sethoveredCircleid(id);
    sethighlightedPathColor(reducedOpacityColor);
  };

  const onMouseLeaveFunc = () => {
    sethoveredCircleid(0);
    sethighlightedPathColor('');
  };

  return (
    <svg
      width="750"
      height="750"
      viewBox="0 0 900 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        maxWidth: '100%',
        pointerEvents: enablemouse ? 'auto' : 'none',
      }}
    >
      <g>
        <circle cx="450" cy="450" r="450" fill="#F6F7F8" />
        <ellipse cx="450" cy="450" rx="375" ry="375" fill="#D7DDE1" />
        <circle cx="450" cy="450" r="300" fill="#B3BDC3" />
        <circle cx="450" cy="450" r="230" fill="#8C979D" />
        <text
          transform="translate(559 518)"
          fill="black"
          fontFamily="Montserrat"
          fontSize="10"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="1.28125" y="9.585">
            PROJECT&#10;
          </tspan>
          <tspan x="0.158203" y="21.585">
            SUPPORT
          </tspan>
        </text>
        <text
          transform="translate(623 556)"
          fill="black"
          fontFamily="Montserrat"
          fontSize="10"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="0.178711" y="9.585">
            ADVANCED &#x2028;
          </tspan>
          <tspan x="7.78125" y="21.585">
            PROJECT
          </tspan>
        </text>
        <text
          transform="translate(680 591)"
          fill="black"
          fontFamily="Montserrat"
          fontSize="10"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="8.36523" y="9.585">
            PROJECT &#x2028;
          </tspan>
          <tspan x="0.108398" y="21.585">
            LEADERSHIP
          </tspan>
        </text>
        <text
          fill="white"
          fontFamily="Montserrat"
          fontSize="5.5"
          letterSpacing="0em"
          style={{ fontSize: '6px' }}
        >
          <tspan x="530.261" y="571.472">
            NO LICENSE REQUIRED
          </tspan>
        </text>
        <text
          fill="white"
          fontFamily="Montserrat"
          fontSize="5.5"
          fontWeight="bold"
          letterSpacing="0em"
          style={{ fontSize: '6px' }}
        >
          <tspan x="530.318" y="593.472">
            LICENCE REQUIRED
          </tspan>
        </text>
        <text
          fill="white"
          fontFamily="Montserrat"
          fontSize="5.5"
          fontWeight="bold"
          letterSpacing="0em"
          style={{ fontSize: '6px' }}
        >
          <tspan x="530.361" y="615.472">
            LICENSE PREFERRED
          </tspan>
        </text>
        <text
          transform="translate(745 629)"
          fill="black"
          fontFamily="Montserrat"
          fontSize="10"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="10.1572" y="9.585">
            MARKET &#x2028;
          </tspan>
          <tspan x="0.108398" y="21.585">
            LEADERSHIP
          </tspan>
        </text>
        <text
          transform="translate(812 664)"
          fill="black"
          fontFamily="Montserrat"
          fontSize="10"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="6.30957" y="9.585">
            THOUGHT &#x2028;
          </tspan>
          <tspan x="0.108398" y="21.585">
            LEADERSHIP
          </tspan>
        </text>
        <text
          transform="translate(526 550)"
          fill="white"
          fontFamily="Montserrat"
          fontSize="7"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="2.1429688" y="10">
            ARCHITECT LICENSE
          </tspan>
        </text>

        <rect
          x="529.006"
          y="221.827"
          width="133"
          height="124"
          rx="11"
          transform="rotate(-0.353356 529.006 221.827)"
          fill="#5EB646"
          stroke="#A7A9AC"
          strokeWidth="2"
        />
        <foreignObject
          x="529.006"
          y="221.827"
          width="133"
          height="124"
          style={{
            borderRadius: '10px',
            fontfamily: 'Montserrat',
            fontSize: '5.5px',
            paddingTop: '2px',
            paddingLeft: '7px',
            textAlign: 'left',
            color: 'white',
          }}
        >
          <span
            style={{
              color: 'black',
              fontSize: '8px',
              fontWeight: '500',
              letterSpacing: '0em',
              paddingLeft: '5px',
            }}
          >
            Example Specialists
          </span>
          <ul style={{ paddingLeft: '10px' }}>
            <li>ACOUSTICS</li>
            <li>AUDIO VISUAL</li>
            <li>BUILDING FORENSICS</li>
            <li>CONSTRUCTION ADMINISTRATOR</li>
            <li>HEALTHCARE PLANNER</li>
            <li>LAB PLANNER</li>
            <li>LIGHTING DESIGNER</li>
            <li>MISSION CRITICAL</li>
            <li>SPECIFIER</li>
            <li>SUSTAINABILITY</li>
            <li>VIRTUAL REALITY</li>
            <li>
              WORKPLACE <br />
              STRATEGIST
            </li>
          </ul>
        </foreignObject>
        <path
          d="M123.071 142L87.5 149C75.6776 170.616 53.604 190.458 46.0806 194.177L42.9907 181.003L0 220.793L56.0222 238L52.9322 223.213C91.0864 205.791 118.28 157.145 123.071 142Z"
          fill="url(#paint0_linear_259_30)"
        />
        <g
          onClick={() => {
            setChangeParent('red');
          }}
          style={{ cursor: 'pointer' }}
        >
          <path
            d="M564.071 427L528.5 420C516.678 398.384 494.604 378.542 487.081 374.823L483.991 387.997L441 348.207L497.022 331L493.932 345.787C532.086 363.209 559.28 411.855 564.071 427Z"
            fill="url(#paint1_linear_259_12)"
          />
          <text
            transform="translate(495.698 360.417) rotate(27.7959)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="6.69515"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.40021">
              T
            </tspan>
          </text>
          <text
            transform="translate(500.482 363.002) rotate(31.7539)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="6.69515"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.40021">
              E
            </tspan>
          </text>
          <text
            transform="translate(505.076 365.911) rotate(35.7118)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="6.69515"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.40021">
              C
            </tspan>
          </text>
          <text
            transform="translate(509.489 369.141) rotate(39.9524)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="6.69515"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.40021">
              H
            </tspan>
          </text>
          <text
            transform="translate(514.211 373.183) rotate(44.4758)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="6.69515"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.40021">
              N
            </tspan>
          </text>
          <text
            transform="translate(518.513 377.528) rotate(48.0568)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="6.69515"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.40021">
              I
            </tspan>
          </text>
          <text
            transform="translate(520.967 380.29) rotate(51.355)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="6.69515"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.40021">
              C
            </tspan>
          </text>
          <text
            transform="translate(524.266 384.525) rotate(54.6533)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="6.69515"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.40021">
              I
            </tspan>
          </text>
          <text
            transform="translate(526.395 387.557) rotate(58.0458)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="6.69515"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.40021">
              A
            </tspan>
          </text>
          <text
            transform="translate(529.375 392.437) rotate(62.3807)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="6.69515"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.40021">
              N
            </tspan>
          </text>
        </g>
        <g
          onClick={() => {
            setChangeParent('purple');
          }}
          style={{ cursor: 'pointer' }}
        >
          <path
            d="M564.071 473L528.5 480C516.678 501.616 494.604 521.458 487.081 525.177L483.991 512.003L441 551.793L497.022 569L493.932 554.213C532.086 536.791 559.28 488.145 564.071 473Z"
            fill="url(#paint0_linear_259_12)"
          />
          <text
            transform="matrix(0.907391 -0.420288 0.420662 0.907217 494.312 530.184)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="7.01682"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="7.01553">
              I
            </tspan>
          </text>
          <text
            transform="matrix(0.875062 -0.484011 0.484299 0.874903 497.095 528.913)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="7.01682"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="7.01553">
              N
            </tspan>
          </text>
          <text
            transform="matrix(0.831011 -0.556256 0.556439 0.830888 501.867 526.22)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="7.01682"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="7.01553">
              T
            </tspan>
          </text>
          <text
            transform="matrix(0.784521 -0.620103 0.620193 0.784449 505.81 523.545)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="7.01682"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="7.01553">
              E
            </tspan>
          </text>
          <text
            transform="matrix(0.731855 -0.681461 0.681463 0.731853 509.522 520.579)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="7.01682"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="7.01553">
              R
            </tspan>
          </text>
          <text
            transform="matrix(0.684067 -0.72942 0.729357 0.684133 513.2 517.069)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="7.01682"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="7.01553">
              I
            </tspan>
          </text>
          <text
            transform="matrix(0.628766 -0.777595 0.777475 0.628914 515.301 514.861)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="7.01682"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="7.01553">
              O
            </tspan>
          </text>
          <text
            transform="matrix(0.557658 -0.830071 0.8299 0.557912 518.852 510.394)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="7.01682"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="7.01553">
              R
            </tspan>
          </text>
          <text
            transform="matrix(0.490416 -0.871488 0.871292 0.490765 521.615 506.21)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="7.01682"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="7.01553">
              S
            </tspan>
          </text>
        </g>
        <path
          opacity="0.23"
          d="M839.711 675C879.175 606.648 899.966 529.118 900 450.192C900.033 371.265 879.308 293.718 839.903 225.332L450 450L839.711 675Z"
          fill="#5F6D73"
        />
        <rect
          x="603.031"
          y="420"
          width="60"
          height="108.032"
          transform="rotate(90 603.031 420)"
          fill={highlightedPathColor && hoveredCircleid === 1 ? highlightedPathColor : '#EAEBEB'}
          id="1to2"
        />
        <rect
          width="24.79"
          height="114.14"
          transform="matrix(0.0787418 0.996895 -0.999955 -0.00950633 713.135 438.085)"
          fill={
            highlightedPathColor && (hoveredCircleid === 1 || hoveredCircleid === 2)
              ? highlightedPathColor
              : '#EAEBEB'
          }
          id="2to5"
        />
        <rect
          width="16.08"
          height="122.03"
          transform="matrix(0.907466 0.420125 -0.498539 0.866867 843.837 314)"
          id="9to13"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 5 ||
              hoveredCircleid === 9)
              ? highlightedPathColor
              : '#EAEBEB'
          }
        />
        <rect
          width="10.12"
          height="86.7219"
          transform="matrix(0.508225 0.861224 -0.9027 0.430271 868.644 386.128)"
          id="9to14"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 5 ||
              hoveredCircleid === 9)
              ? highlightedPathColor
              : '#EAEBEB'
          }
        />
        <rect
          width="10.12"
          height="80.305"
          transform="matrix(-0.263452 0.964673 -0.937671 -0.347523 872 506.909)"
          id="10to15"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 5 ||
              hoveredCircleid === 6 ||
              hoveredCircleid === 10)
              ? highlightedPathColor
              : '#EAEBEB'
          }
        />
        <path
          d="M773.188 351.679L786.41 360.721L721.119 452.968L707.889 445.389L773.188 351.679Z"
          id="5to8"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 || hoveredCircleid === 2 || hoveredCircleid === 5)
              ? highlightedPathColor
              : '#EAEBEB'
          }
        />
        <path
          d="M791.808 413.386L797.638 428.31L712.699 458.181L706.264 444.358L791.808 413.386Z"
          id="5to9"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 || hoveredCircleid === 2 || hoveredCircleid === 5)
              ? highlightedPathColor
              : '#EAEBEB'
          }
        />
        <path
          d="M798.608 477.935L793.17 493.001L687.572 452.948L691.592 438.24L798.608 477.935Z"
          id="5to10"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 || hoveredCircleid === 2 || hoveredCircleid === 5)
              ? highlightedPathColor
              : '#EAEBEB'
          }
        />
        <rect
          width="10.12"
          height="78.3511"
          transform="matrix(-0.506669 0.86214 -0.903481 -0.428627 850.25 581.923)"
          id="11to16"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 6 ||
              hoveredCircleid === 11)
              ? highlightedPathColor
              : '#EAEBEB'
          }
        />
        <rect
          width="16.08"
          height="70.8044"
          transform="matrix(-0.506669 0.86214 -0.903481 -0.428627 781.016 545.598)"
          id="6to11"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 || hoveredCircleid === 2 || hoveredCircleid === 6)
              ? highlightedPathColor
              : '#EAEBEB'
          }
        />
        <rect
          width="24.79"
          height="114.139"
          transform="matrix(-0.506669 0.86214 -0.903481 -0.428627 711 506.924)"
          fill={
            highlightedPathColor && (hoveredCircleid === 1 || hoveredCircleid === 2)
              ? highlightedPathColor
              : '#EAEBEB'
          }
          id="2to6"
        />

        <path
          d="M651.897 331.191L655.549 337.948L602.736 394.989L591.799 394.814L651.897 331.191Z"
          fill={
            highlightedPathColor && (hoveredCircleid === 1 || hoveredCircleid === 2)
              ? highlightedPathColor
              : '#5EB646'
          }
        />
        <path
          d="M712.627 296.945L713.989 303.786L655.395 338.664L651.608 332.037L712.627 296.945Z"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 || hoveredCircleid === 2 || hoveredCircleid === 3)
              ? highlightedPathColor
              : '#5EB646'
          }
        />
        <path
          d="M778.311 260.384L779.369 267.386L712.767 304.929L712.354 297.436L778.311 260.384Z"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 3 ||
              hoveredCircleid === 7)
              ? highlightedPathColor
              : '#5EB646'
          }
        />
        <rect
          width="16.08"
          height="84.0914"
          transform="matrix(0.428124 0.90372 -0.937964 0.346733 777.439 486.001)"
          id="6to10"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 || hoveredCircleid === 2 || hoveredCircleid === 6)
              ? highlightedPathColor
              : '#EAEBEB'
          }
        />
        <rect
          width="10.1237"
          height="86.8053"
          transform="matrix(0.493917 0.869509 -0.90969 0.415287 851.491 310.211)"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 4 ||
              hoveredCircleid === 8 ||
              hoveredCircleid === 5)
              ? highlightedPathColor
              : '#EAEBEB'
          }
          id="8to13"
        />
        <rect
          width="16.0822"
          height="74.5751"
          transform="matrix(0.493917 0.869509 -0.90969 0.415287 774.082 342.353)"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 || hoveredCircleid === 2 || hoveredCircleid === 4)
              ? highlightedPathColor
              : '#EAEBEB'
          }
          id="4to8"
        />
        <rect
          width="24.7949"
          height="114.14"
          transform="matrix(0.493917 0.869509 -0.90969 0.415287 698.201 372.459)"
          fill={
            highlightedPathColor && (hoveredCircleid === 1 || hoveredCircleid === 2)
              ? highlightedPathColor
              : '#EAEBEB'
          }
          id="2to4"
        />

        <StyledGtag
          id={15}
          onClick={(e) => {
            const groupId = {
              target: { id: 15 },
              center: { x: e.screenX, y: e.screenY },
            };
            onClick(groupId, e);
          }}
          cx="865.189"
          cy="508.104"
          style={{
            cursor: 'pointer',
            transformOrigin: '865.189px 508.104px',
            transition: 'transform 0.3s ease',
          }}
        >
          <circle
            cx="865.189"
            cy="508.104"
            r="21.5"
            transform="rotate(38.5304 865.189 508.104)"
            fill="#19447B"
            stroke="#CE4128"
            strokeWidth="3"
            id={15}
          />
          <ForeignObjLeveltwo
            cx="865.189"
            cy="508.104"
            r="21.5"
            text1={data.darkblue_level_2.circle_id_15.head}
            text2={data.darkblue_level_2.circle_id_15.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '5px', body: '4px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>

        <StyledGtag
          id={5}
          onClick={(e) => {
            const groupId = {
              target: { id: 5 },
              center: { x: e.screenX, y: e.screenY },
            };
            onClick(groupId, e);
          }}
          cx="714.001"
          cy="450"
          style={{
            cursor: 'pointer',
            transformOrigin: '714.001px 450px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc('#00ffff', 5);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="714.001"
            cy="450"
            r="26"
            fill="#19447B"
            stroke="#00ffff"
            strokeWidth="2"
            id={5}
          />
          <ForeignObjLeveltwo
            cx="714.001"
            cy="450"
            r="26"
            text1={data.darkblue_level_2.circle_id_5.head}
            text2={data.darkblue_level_2.circle_id_5.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '6px', body: '6px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>

        <StyledGtag
          id={13}
          onClick={(e) => {
            const groupId = {
              target: { id: 13 },
              center: { x: e.screenX, y: e.screenY },
            };
            onClick(groupId, e);
          }}
          cx="848.123"
          cy="317.812"
          style={{
            cursor: 'pointer',
            transformOrigin: '848.123px 317.812px',
            transition: 'transform 0.3s ease',
          }}
        >
          <circle
            cx="848.123"
            cy="317.812"
            r="21.5"
            transform="rotate(-3.31002 848.123 317.812)"
            fill="#19447B"
            stroke="#EBAF3A"
            strokeWidth="3"
            id={13}
            onClick={(e) => onClick(e)}
          />
          <ForeignObjLeveltwo
            cx="848.123"
            cy="317.812"
            r="21.5"
            text1={data.darkblue_level_2.circle_id_13.head}
            text2={data.darkblue_level_2.circle_id_13.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '4px', body: '4px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>

        <StyledGtag
          id={14}
          onClick={(e) => {
            const groupId = {
              target: { id: 14 },
              center: { x: e.screenX, y: e.screenY },
            };
            onClick(groupId, e);
          }}
          cx="866.123"
          cy="391.812"
          style={{
            cursor: 'pointer',
            transformOrigin: '866.123px 391.812px',
            transition: 'transform 0.3s ease',
          }}
        >
          <circle
            cx="866.123"
            cy="391.812"
            r="21.5"
            transform="rotate(-3.31002 866.123 391.812)"
            fill="#19447B"
            stroke="#CE4128"
            strokeWidth="3"
            id={14}
          />
          <ForeignObjLeveltwo
            cx="866.123"
            cy="391.812"
            r="21.5"
            text1={data.darkblue_level_2.circle_id_14.head}
            text2={data.darkblue_level_2.circle_id_14.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '5px', body: '4px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={4}
          onClick={(e) => {
            const groupId = {
              target: { id: 4 },
              center: { x: e.screenX, y: e.screenY },
            };
            onClick(groupId, e);
          }}
          cx="712.921"
          cy="379.917"
          style={{
            cursor: 'pointer',
            transformOrigin: '712.921px 379.917px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc('#EBAF3A', 4);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="712.921"
            cy="379.917"
            r="26"
            transform="rotate(-3.31002 712.921 379.917)"
            fill="#19447B"
            stroke="#EBAF3A"
            strokeWidth="2"
            id={4}
            onClick={(e) => onClick(e)}
          />
          <ForeignObjLeveltwo
            cx="712.921"
            cy="379.917"
            r="26"
            text1={data.darkblue_level_2.circle_id_4.head}
            text2={data.darkblue_level_2.circle_id_4.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '6px', body: '6px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>

        <StyledGtag
          id={8}
          onClick={(e) => {
            const groupId = {
              target: { id: 8 },
              center: { x: e.screenX, y: e.screenY },
            };
            onClick(groupId, e);
          }}
          cx="778.403"
          cy="347.402"
          style={{
            cursor: 'pointer',
            transformOrigin: '778.403px 347.402px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc('#EBAF3A', 8);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="778.403"
            cy="347.402"
            r="26.5"
            transform="rotate(-3.31002 778.403 347.402)"
            fill="#19447B"
            stroke="#EBAF3A"
            strokeWidth="3"
            id={8}
          />
          <ForeignObjLeveltwo
            cx="778.403"
            cy="347.402"
            r="26.5"
            text1={data.darkblue_level_2.circle_id_8.head}
            text2={data.darkblue_level_2.circle_id_8.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '6px', body: '5px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>

        <StyledGtag
          id={9}
          onClick={(e) => {
            const groupId = {
              target: { id: 9 },
              center: { x: e.screenX, y: e.screenY },
            };
            onClick(groupId, e);
          }}
          cx="793.349"
          cy="419.576"
          style={{
            cursor: 'pointer',
            transformOrigin: '793.349px 419.576px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc('#CE4128', 9);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="793.349"
            cy="419.576"
            r="26.5"
            transform="rotate(-3.17685 793.349 419.576)"
            fill="#19447B"
            stroke="#CE4128"
            strokeWidth="3"
            id={9}
          />
          <ForeignObjLeveltwo
            cx="793.349"
            cy="419.576"
            r="26.5"
            text1={data.darkblue_level_2.circle_id_9.head}
            text2={data.darkblue_level_2.circle_id_9.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '6px', body: '5px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>

        <StyledGtag
          id={10}
          onClick={(e) => {
            const groupId = {
              target: { id: 10 },
              center: { x: e.screenX, y: e.screenY },
            };
            onClick(groupId, e);
          }}
          cx="795.001"
          cy="487"
          style={{
            cursor: 'pointer',
            transformOrigin: '795.001px 487px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc('#CE4128', 10);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="795.001"
            cy="487"
            r="26.5"
            fill="#19447B"
            stroke="#CE4128"
            strokeWidth="3"
            id={10}
          />
          <ForeignObjLeveltwo
            cx="795.001"
            cy="487"
            r="26.5"
            text1={data.darkblue_level_2.circle_id_10.head}
            text2={data.darkblue_level_2.circle_id_10.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '6px', body: '6px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={11}
          onClick={(e) => {
            const groupId = {
              target: { id: 11 },
              center: { x: e.screenX, y: e.screenY },
            };
            onClick(groupId, e);
          }}
          cx="778.001"
          cy="555"
          style={{
            cursor: 'pointer',
            transformOrigin: '778.001px 555px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc('#EBAF3A', 11);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="778.001"
            cy="555"
            r="26.5"
            fill="#19447B"
            stroke="#EBAF3A"
            strokeWidth="3"
            id={11}
          />
          <ForeignObjLeveltwo
            cx="778.001"
            cy="555"
            r="26.5"
            text1={data.darkblue_level_2.circle_id_11.head}
            text2={data.darkblue_level_2.circle_id_11.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '6px', body: '6px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={6}
          onClick={(e) => {
            const groupId = {
              target: { id: 6 },
              center: { x: e.screenX, y: e.screenY },
            };
            onClick(groupId, e);
          }}
          cx="711"
          cy="523.002"
          style={{
            cursor: 'pointer',
            transformOrigin: '711px 523.002px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc('#EBAF3A', 6);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="711"
            cy="523.002"
            r="26.5"
            fill="#19447B"
            stroke="#EBAF3A"
            strokeWidth="3"
            id={6}
          />
          <ForeignObjLeveltwo
            cx="711"
            cy="523.002"
            r="26.5"
            text1={data.darkblue_level_2.circle_id_6.head}
            text2={data.darkblue_level_2.circle_id_6.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '6px', body: '6px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={7}
          onClick={(e) => {
            const groupId = {
              target: { id: 7 },
              center: { x: e.screenX, y: e.screenY },
            };
            onClick(groupId, e);
          }}
          cx="711.995"
          cy="297.957"
          style={{
            cursor: 'pointer',
            transformOrigin: '711.995px 297.957px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc('#00ffff', 7);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="711.995"
            cy="297.957"
            r="23"
            fill="#5EB646"
            stroke="#00ffff"
            strokeWidth="2"
            id={7}
          />
          <ForeignObjLeveltwo
            cx="711.995"
            cy="297.957"
            r="23"
            text1={data.darkblue_level_2.circle_id_7.head}
            text2={data.darkblue_level_2.circle_id_7.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '5px', body: '4px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={12}
          onClick={(e) => {
            const groupId = {
              target: { id: 12 },
              center: { x: e.screenX, y: e.screenY },
            };
            onClick(groupId, e);
          }}
          cx="776.239"
          cy="264.045"
          style={{
            cursor: 'pointer',
            transformOrigin: '776.239px 264.045px',
            transition: 'transform 0.3s ease',
          }}
        >
          <circle
            cx="776.239"
            cy="264.045"
            r="21.5"
            fill="#5EB646"
            stroke="#00ffff"
            strokeWidth="3"
            id={12}
          />
          <ForeignObjLeveltwo
            cx="776.239"
            cy="264.045"
            r="21.5"
            text1={data.darkblue_level_2.circle_id_12.head}
            text2={data.darkblue_level_2.circle_id_12.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '5px', body: '4px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={16}
          onClick={(e) => {
            const groupId = { target: { id: 16 } };
            onClick(groupId, e);
          }}
          cx="846"
          cy="585"
          style={{
            cursor: 'pointer',
            transformOrigin: '846px 585px',
            transition: 'transform 0.3s ease',
          }}
        >
          <circle
            cx="846"
            cy="585"
            r="21.5"
            fill="#19447B"
            stroke="#EBAF3A"
            strokeWidth="3"
            id={16}
          />
          <ForeignObjLeveltwo
            cx="846"
            cy="585"
            r="21.5"
            text1={data.darkblue_level_2.circle_id_16.head}
            text2={data.darkblue_level_2.circle_id_16.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '5px', body: '4px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={2}
          onClick={(e) => {
            const groupId = {
              target: { id: 2 },
              center: { x: e.screenX, y: e.screenY },
            };
            onClick(groupId, e);
          }}
          cx="604.001"
          cy="450"
          style={{
            cursor: 'pointer',
            transformOrigin: '604.001px 450px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc('#00ffff', 2);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="604.001"
            cy="450"
            r="56.5"
            fill="#19447B"
            stroke="#00ffff"
            strokeWidth="3"
            id={2}
          />
          <ForeignObjLeveltwo
            cx="604.001"
            cy="450"
            r="56.5"
            text1={data.darkblue_level_2.circle_id_2.head}
            text2={data.darkblue_level_2.circle_id_2.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '10px', body: '8px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={1}
          onClick={(e) => {
            const groupId = {
              target: { id: 1 },
              center: { x: e.screenX, y: e.screenY },
            };
            onClick(groupId, e);
          }}
          cx="450"
          cy="450"
          style={{
            cursor: 'pointer',
            transformOrigin: '450px 450px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc('#00ffff', 1);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="450"
            cy="450"
            r="56.5"
            fill="#19447B"
            stroke="#00ffff"
            strokeWidth="3"
            id={1}
          />
          <ForeignObjLeveltwo
            cx="450"
            cy="450"
            r="56.5"
            text1={data.darkblue_level_2.circle_id_1.head}
            text2={data.darkblue_level_2.circle_id_1.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '10px', body: '8px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={3}
          onClick={(e) => {
            const groupId = {
              target: { id: 3 },
              center: { x: e.screenX, y: e.screenY },
            };
            onClick(groupId, e);
          }}
          cx="652.688"
          cy="334.644"
          style={{
            cursor: 'pointer',
            transformOrigin: '652.688px 334.644px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc('#00ffff', 3);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
          // className='scalable-g'
        >
          <circle
            cx="652.688"
            cy="334.644"
            r="26"
            fill="#5EB646"
            stroke="#00ffff"
            strokeWidth="2"
            id={3}
          />
          <ForeignObjLeveltwo
            cx="652.688"
            cy="334.644"
            r="26"
            text1={data.darkblue_level_2.circle_id_3.head}
            text2={data.darkblue_level_2.circle_id_3.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: '6px', body: '6px' }}
            fontweight={{ head: 'bold', body: '500' }}
            letterspacing="0em"
          />
        </StyledGtag>
        <circle cx="519" cy="569" r="9" stroke="#00ffff" strokeWidth="1.5" />
        <circle cx="519" cy="591" r="9" stroke="#EBAF3A" strokeWidth="1.5" />
        <circle cx="519" cy="613" r="9" stroke="#CE4128" strokeWidth="1.5" />
      </g>
      <defs>
        <filter
          id="filter0_d_259_12"
          x="0"
          y="0"
          width="919"
          height="908"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_259_12" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_259_12"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_259_12"
          x1="441"
          y1="551.928"
          x2="539.78"
          y2="486.92"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.452429" stopColor="#683A96" />
          <stop offset="1" stopColor="#683A96" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_259_12"
          x1="441"
          y1="348.072"
          x2="539.78"
          y2="413.08"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.452429" stopColor="#CE4128" />
          <stop offset="1" stopColor="#CE4128" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// export const StyledGtag = styled.g`
//   &:hover {
//     transform: scale(1.2);
//   }
// `;

export default SecondLevelDarkblue;
