import React, { useEffect, useState } from "react";
import ForeignObjLeveltwo from "./ForeignObjLeveltwo";
import data from "./data.json";
// import { StyledGtag } from '../DarkBlueSection/SecondLevel';
import { hexToRGBA } from "../HighlighPathOpacity";
import StyledGtag from "../StyledGtag";

const SecondLevelPurple = ({ onClick, setChangeParent }) => {
  const [enablemouse, setEnableMouse] = useState(false);
  const [highlightedPathColor, sethighlightedPathColor] = useState("");
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
    sethighlightedPathColor("");
  };

  return (
    <>
      <svg
        width="750"
        height="750"
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          maxWidth: "100%",
          pointerEvents: enablemouse ? "auto" : "none",
          // cursor: enablemouse ? "auto" : "none",
        }}
      >
        <circle cx="450" cy="450" r="450" fill="#F6F7F8" />
        <ellipse cx="450" cy="450" rx="375" ry="375" fill="#D7DDE1" />
        <circle cx="450" cy="450" r="300" fill="#B3BDC3" />
        <circle cx="450" cy="450" r="230" fill="#8C979D" />
        {/* <path
          d="M560.071 473L524.5 480C512.678 501.616 490.604 521.458 483.081 525.177L479.991 512.003L437 551.793L493.022 569L489.932 554.213C528.086 536.791 555.28 488.145 560.071 473Z"
          fill="url(#paint0_linear_259_123)"
        />
        <path
          d="M560.071 427L524.5 420C512.678 398.384 490.604 378.542 483.081 374.823L479.991 387.997L437 348.207L493.022 331L489.932 345.787C528.086 363.209 555.28 411.855 560.071 427Z"
          fill="url(#paint1_linear_259_75)"
        /> */}

        <g
          onClick={() => {
            setChangeParent("darkblue");
          }}
          style={{ cursor: "pointer" }}
        >
          <path
            d="M560.071 427L524.5 420C512.678 398.384 490.604 378.542 483.081 374.823L479.991 387.997L437 348.207L493.022 331L489.932 345.787C528.086 363.209 555.28 411.855 560.071 427Z"
            fill="url(#paint1_linear_259_75)"
          />
          <text
            transform="matrix(0.893131 0.449795 -0.449793 0.893134 488.889 357.729)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.53641"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4848">
              A
            </tspan>
          </text>
          <text
            transform="matrix(0.864984 0.501797 -0.501796 0.864987 493.021 359.852)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.53641"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4848">
              R
            </tspan>
          </text>
          <text
            transform="matrix(0.834555 0.550924 -0.550922 0.834557 497.012 362.214)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.53641"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4848">
              C
            </tspan>
          </text>
          <text
            transform="matrix(0.799727 0.600363 -0.600361 0.799729 500.713 364.693)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.53641"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4848">
              H
            </tspan>
          </text>
          <text
            transform="matrix(0.768034 0.640409 -0.640407 0.768036 504.677 367.74)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.53641"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4848">
              I
            </tspan>
          </text>
          <text
            transform="matrix(0.737069 0.675818 -0.675816 0.737071 506.975 369.673)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.53641"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4848">
              T
            </tspan>
          </text>
          <text
            transform="matrix(0.697764 0.716328 -0.716326 0.697766 510.219 372.696)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.53641"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4848">
              E
            </tspan>
          </text>
          <text
            transform="matrix(0.656236 0.754556 -0.754554 0.656238 513.287 375.897)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.53641"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4848">
              C
            </tspan>
          </text>
          <text
            transform="matrix(0.612618 0.79038 -0.790378 0.612619 516.17 379.266)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.53641"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4848">
              T
            </tspan>
          </text>
          <text
            transform="matrix(0.563722 0.825966 -0.825964 0.563723 518.875 382.805)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.53641"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4848">
              U
            </tspan>
          </text>
          <text
            transform="matrix(0.511609 0.859219 -0.859217 0.51161 521.686 387.005)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.53641"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4848">
              R
            </tspan>
          </text>
          <text
            transform="matrix(0.461124 0.887337 -0.887335 0.461124 524.024 391.01)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.53641"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4848">
              E
            </tspan>
          </text>
        </g>
        <g
        // onClick={() => {
        //   setChangeParent('cyan');
        // }}
        // style={{ cursor: 'pointer' }}
        >
          <path
            d="M560.071 473L524.5 480C512.678 501.616 490.604 521.458 483.081 525.177L479.991 512.003L437 551.793L493.022 569L489.932 554.213C528.086 536.791 555.28 488.145 560.071 473Z"
            fill="url(#paint0_linear_259_123)"
          />
          <text
            transform="translate(490.2 531.125) rotate(-28.5098)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="6.35327"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.27765">
              R
            </tspan>
          </text>
          <text
            transform="translate(495.041 528.456) rotate(-32.4667)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="6.35327"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.27765">
              E
            </tspan>
          </text>
          <text
            transform="translate(499.325 525.697) rotate(-36.1861)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="6.35327"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.27765">
              S
            </tspan>
          </text>
          <text
            transform="translate(503.225 522.841) rotate(-40.3013)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="6.35327"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.27765">
              O
            </tspan>
          </text>
          <text
            transform="translate(507.899 518.834) rotate(-44.8122)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="6.35327"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.27765">
              U
            </tspan>
          </text>
          <text
            transform="translate(512.096 514.614) rotate(-49.0856)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="6.35327"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.27765">
              R
            </tspan>
          </text>
          <text
            transform="translate(515.686 510.43) rotate(-53.2008)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="6.35327"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.27765">
              C
            </tspan>
          </text>
          <text
            transform="translate(518.97 505.983) rotate(-57.1577)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="6.35327"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.27765">
              E
            </tspan>
          </text>
          <text
            transform="translate(521.709 501.686) rotate(-60.8771)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="6.35327"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="6.27765">
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
          x="599.031"
          y="420"
          width="60"
          height="108.032"
          transform="rotate(90 599.031 420)"
          // fill="#EAEBEB"
          fill={
            highlightedPathColor && hoveredCircleid === 1
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="1to2"
        />
        <path
          d="M701 387.285L711.048 374.81L797.907 447.115L789.316 459.712L701 387.285Z"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 4)
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="4to8"
        />
        <rect
          width="10.12"
          height="77.2482"
          transform="matrix(-0.506669 0.86214 -0.903481 -0.428627 846.25 581.923)"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 5 ||
              hoveredCircleid === 9)
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="9to13"
        />
        <rect
          width="16.08"
          height="66.17"
          transform="matrix(-0.506669 0.86214 -0.903481 -0.428627 769.271 541.924)"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 5)
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="5to9"
        />
        <rect
          width="24.79"
          height="114.139"
          transform="matrix(-0.506669 0.86214 -0.903481 -0.428627 707 506.924)"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 || hoveredCircleid === 2)
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="2to5"
        />

        <path
          d="M647.897 331.191L651.549 337.948L598.736 394.989L587.799 394.814L647.897 331.191Z"
          // fill="#5EB646"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 || hoveredCircleid === 2)
              ? highlightedPathColor
              : "#5EB646"
          }
        />
        <path
          d="M708.627 296.945L709.989 303.786L651.395 338.664L647.608 332.037L708.627 296.945Z"
          // fill="#5EB646"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 3)
              ? highlightedPathColor
              : "#5EB646"
          }
        />
        <path
          d="M774.311 260.384L775.369 267.386L708.767 304.929L708.354 297.436L774.311 260.384Z"
          // fill="#5EB646"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 3 ||
              hoveredCircleid === 6)
              ? highlightedPathColor
              : "#5EB646"
          }
        />
        <rect
          width="10.1237"
          height="91.117"
          transform="matrix(0.493917 0.869509 -0.90969 0.415287 847.491 310.211)"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 4 ||
              hoveredCircleid === 7)
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="7to11"
        />
        <rect
          width="16.0822"
          height="79.0029"
          transform="matrix(0.493917 0.869509 -0.90969 0.415287 770.082 342.353)"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 4)
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="4to7"
        />
        <rect
          width="24.7949"
          height="114.14"
          transform="matrix(0.493917 0.869509 -0.90969 0.415287 694.201 372.459)"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 || hoveredCircleid === 2)
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="2to4"
        />

        <rect
          width="16.08"
          height="112.229"
          transform="matrix(0.740644 0.671898 -0.734614 0.678485 780.445 445)"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 5)
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="5to8"
        />
        <rect
          x="794"
          y="440"
          width="68"
          height="20"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 4 ||
              hoveredCircleid === 8 ||
              hoveredCircleid === 5)
              ? highlightedPathColor
              : "white"
          }
          id="8to12"
        />
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
          // fontWeight="bolder"
          letterSpacing="0em"
          style={{ fontSize: "6px" }}
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
          style={{ fontSize: "6px" }}
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
          style={{ fontSize: "6px" }}
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
          fontSize="8"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="0.0429688" y="7.868">
            CID/NCIDQ
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
            borderRadius: "10px",
            fontfamily: "Montserrat",
            fontSize: "5.5px",
            paddingTop: "2px",
            paddingLeft: "7px",
            textAlign: "left",
            color: "white",
          }}
        >
          <span
            style={{
              color: "black",
              fontSize: "8px",
              fontWeight: "500",
              letterSpacing: "0em",
              paddingLeft: "5px",
            }}
          >
            Example Specialists
          </span>
          <ul style={{ paddingLeft: "10px" }}>
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
              WORKPLACE <br /> STRATEGIST
            </li>
          </ul>
        </foreignObject>
        <StyledGtag
          id={1}
          onClick={(e) => {
            const groupId = {
              target: { id: 1 },
              center: { x: 450.001, y: 450 },
            };
            onClick(groupId, e);
          }}
          cx="450.001"
          cy="450"
          style={{
            cursor: "pointer",
            transformOrigin: "450.001px 450px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 1);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="450.001"
            cy="450"
            r="56.5"
            fill="#683A96"
            stroke="#00ffff"
            strokeWidth="3"
            id={1}
          />
          <ForeignObjLeveltwo
            cx="450.001"
            cy="450"
            r="56.5"
            text1={data.purple_secondlevel.circle_id_1.head}
            text2={data.purple_secondlevel.circle_id_1.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "10px", body: "8px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={8}
          onClick={(e) => {
            const groupId = { target: { id: 8 }, center: { x: 787, y: 450 } };
            onClick(groupId, e);
          }}
          cx="787"
          cy="450"
          style={{
            cursor: "pointer",
            transformOrigin: "787px 450px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#CE4128", 8);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="787"
            cy="450"
            r="26"
            fill="#683A96"
            stroke="#CE4128"
            strokeWidth="2"
            id={8}
          />
          <ForeignObjLeveltwo
            cx="787"
            cy="450"
            r="26"
            text1={data.purple_secondlevel.circle_id_8.head}
            text2={data.purple_secondlevel.circle_id_8.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "6px", body: "5px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={11}
          onClick={(e) => {
            const groupId = {
              target: { id: 11 },
              center: { x: 844.123, y: 317.812 },
            };
            onClick(groupId, e);
          }}
          cx="844.123"
          cy="317.812"
          style={{
            cursor: "pointer",
            transformOrigin: "844.123px 317.812px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 11);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="844.123"
            cy="317.812"
            r="21.5"
            transform="rotate(-3.31002 844.123 317.812)"
            fill="#683A96"
            stroke="#EBAF3A"
            strokeWidth="3"
            id={11}
          />
          <ForeignObjLeveltwo
            cx="844.123"
            cy="317.812"
            r="21.5"
            text1={data.purple_secondlevel.circle_id_11.head}
            text2={data.purple_secondlevel.circle_id_11.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "5px", body: "4px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={12}
          onClick={(e) => {
            const groupId = {
              target: { id: 12 },
              center: { x: 863.121, y: 449.812 },
            };
            onClick(groupId, e);
          }}
          cx="863.121"
          cy="449.812"
          style={{
            cursor: "pointer",
            transformOrigin: "863.121px 449.812px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 12);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="863.121"
            cy="449.812"
            r="21.5"
            transform="rotate(-3.31002 863.121 449.812)"
            fill="#683A96"
            stroke="#CE4128"
            strokeWidth="3"
            id={12}
          />
          <ForeignObjLeveltwo
            cx="863.121"
            cy="449.812"
            r="21.5"
            text1={data.purple_secondlevel.circle_id_12.head}
            text2={data.purple_secondlevel.circle_id_12.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "5px", body: "4px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={4}
          onClick={(e) => {
            const groupId = {
              target: { id: 4 },
              center: { x: 708.921, y: 379.917 },
            };
            onClick(groupId, e);
          }}
          cx="708.921"
          cy="379.917"
          style={{
            cursor: "pointer",
            transformOrigin: "708.921px 379.917px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#CE4128", 4);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="708.921"
            cy="379.917"
            r="26"
            transform="rotate(-3.31002 708.921 379.917)"
            fill="#6A6D6D"
            stroke="#CE4128"
            strokeWidth="2"
            id={4}
          />
          <ForeignObjLeveltwo
            cx="708.921"
            cy="379.917"
            r="26"
            text1={data.purple_secondlevel.circle_id_4.head}
            text2={data.purple_secondlevel.circle_id_4.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "7px", body: "6px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={7}
          onClick={(e) => {
            const groupId = {
              target: { id: 7 },
              center: { x: 774.403, y: 347.402 },
            };
            onClick(groupId, e);
          }}
          cx="774.403"
          cy="347.402"
          style={{
            cursor: "pointer",
            transformOrigin: "774.403px 347.402px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#EBAF3A", 7);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="774.403"
            cy="347.402"
            r="26.5"
            transform="rotate(-3.31002 774.403 347.402)"
            fill="#683A96"
            stroke="#EBAF3A"
            strokeWidth="3"
            id={7}
          />
          <ForeignObjLeveltwo
            cx="774.403"
            cy="347.402"
            r="26.5"
            text1={data.purple_secondlevel.circle_id_7.head}
            text2={data.purple_secondlevel.circle_id_7.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "6px", body: "5px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={9}
          onClick={(e) => {
            const groupId = {
              target: { id: 9 },
              center: { x: 774.001, y: 555 },
            };
            onClick(groupId, e);
          }}
          cx="774.001"
          cy="555"
          style={{
            cursor: "pointer",
            transformOrigin: "774.001px 555px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 9);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="774.001"
            cy="555"
            r="26.5"
            fill="#6A6D6D"
            stroke="#00ffff"
            strokeWidth="3"
            id={9}
          />
          <ForeignObjLeveltwo
            cx="774.001"
            cy="555"
            r="26.5"
            text1={data.purple_secondlevel.circle_id_9.head}
            text2={data.purple_secondlevel.circle_id_9.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "5px", body: "5px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={5}
          onClick={(e) => {
            const groupId = {
              target: { id: 5 },
              center: { x: 707, y: 523.002 },
            };
            onClick(groupId, e);
          }}
          cx="707"
          cy="523.002"
          style={{
            cursor: "pointer",
            transformOrigin: "707px 523.002px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 5);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="707"
            cy="523.002"
            r="26.5"
            fill="#6A6D6D"
            stroke="#00ffff"
            strokeWidth="3"
            id={5}
          />
          <ForeignObjLeveltwo
            cx="707"
            cy="523.002"
            r="26.5"
            text1={data.purple_secondlevel.circle_id_5.head}
            text2={data.purple_secondlevel.circle_id_5.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "6px", body: "5px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={2}
          onClick={(e) => {
            const groupId = {
              target: { id: 2 },
              center: { x: 600.001, y: 450 },
            };
            onClick(groupId, e);
          }}
          cx="600.001"
          cy="450"
          style={{
            cursor: "pointer",
            transformOrigin: "600.001px 450px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 2);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="600.001"
            cy="450"
            r="56.5"
            fill="#683A96"
            stroke="#00ffff"
            strokeWidth="3"
            id={2}
          />
          <ForeignObjLeveltwo
            cx="600.001"
            cy="450"
            r="56.5"
            text1={data.purple_secondlevel.circle_id_2.head}
            text2={data.purple_secondlevel.circle_id_2.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "10px", body: "8px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={6}
          onClick={(e) => {
            const groupId = {
              target: { id: 6 },
              center: { x: 707.995, y: 297.957 },
            };
            onClick(groupId, e);
          }}
          cx="707.995"
          cy="297.957"
          style={{
            cursor: "pointer",
            transformOrigin: "707.995px 297.957px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 6);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="707.995"
            cy="297.957"
            r="23"
            fill="#5EB646"
            stroke="#00ffff"
            strokeWidth="2"
            id={6}
          />
          <ForeignObjLeveltwo
            cx="707.995"
            cy="297.957"
            r="23"
            text1={data.purple_secondlevel.circle_id_6.head}
            text2={data.purple_secondlevel.circle_id_6.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "6px", body: "6px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={10}
          onClick={(e) => {
            const groupId = {
              target: { id: 10 },
              center: { x: 772.239, y: 264.045 },
            };
            onClick(groupId, e);
          }}
          cx="772.239"
          cy="264.045"
          style={{
            cursor: "pointer",
            transformOrigin: "772.239px 264.045px",
            transition: "transform 0.3s ease",
          }}
        >
          <circle
            cx="772.239"
            cy="264.045"
            r="21.5"
            fill="#5EB646"
            stroke="#00ffff"
            strokeWidth="3"
            id={10}
          />
          <ForeignObjLeveltwo
            cx="772.239"
            cy="264.045"
            r="21.5"
            text1={data.purple_secondlevel.circle_id_10.head}
            text2={data.purple_secondlevel.circle_id_10.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "6px", body: "6px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={13}
          onClick={(e) => {
            const groupId = { target: { id: 13 }, center: { x: 842, y: 585 } };
            onClick(groupId, e);
          }}
          cx="842"
          cy="585"
          style={{
            cursor: "pointer",
            transformOrigin: "842px 585px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 13);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="842"
            cy="585"
            r="21.5"
            fill="#6A6D6D"
            stroke="#CE4128"
            strokeWidth="3"
            id={13}
          />
          <ForeignObjLeveltwo
            cx="842"
            cy="585"
            r="21.5"
            text1={data.purple_secondlevel.circle_id_13.head}
            text2={data.purple_secondlevel.circle_id_13.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "5px", body: "4px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={3}
          onClick={(e) => {
            const groupId = {
              target: { id: 3 },
              center: { x: 648.688, y: 334.644 },
            };
            onClick(groupId, e);
          }}
          cx="648.688"
          cy="334.644"
          style={{
            cursor: "pointer",
            transformOrigin: "648.688px 334.644px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 3);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="648.688"
            cy="334.644"
            r="26"
            fill="#5EB646"
            stroke="#00ffff"
            strokeWidth="2"
            id={3}
            onClick={(e) => onClick(e)}
          />
          <ForeignObjLeveltwo
            cx="648.688"
            cy="334.644"
            r="26"
            text1={data.purple_secondlevel.circle_id_3.head}
            text2={data.purple_secondlevel.circle_id_3.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "6px", body: "4px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>

        <circle cx="515" cy="569" r="9" stroke="#00ffff" strokeWidth="1.5" />
        <circle cx="515" cy="591" r="9" stroke="#EBAF3A" strokeWidth="1.5" />
        <circle cx="515" cy="613" r="9" stroke="#CE4128" strokeWidth="1.5" />
        <defs>
          {/* cyan */}
          <linearGradient
            id="paint0_linear_259_123"
            x1="437"
            y1="551.928"
            x2="535.78"
            y2="486.92"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.452429" stopColor="#34AAD7" />
            <stop offset="1" stopColor="#34AAD7" stopOpacity="0" />
          </linearGradient>
          {/* darkblue */}
          <linearGradient
            id="paint1_linear_259_75"
            x1="437"
            y1="348.072"
            x2="535.78"
            y2="413.08"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.452429" stopColor="#19447B" />
            <stop offset="1" stopColor="#19447B" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default SecondLevelPurple;
