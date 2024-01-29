import React, { useEffect, useState } from "react";
import ForeignObjLeveltwo from "./ForeignObjLeveltwo";
import data from "./data.json";
// import { StyledGtag } from "../DarkBlueSection/SecondLevel";
import { hexToRGBA } from "../HighlighPathOpacity";
import StyledGtag from "../StyledGtag";

const SecondLevelOrange = ({ onClick, setChangeParent }) => {
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
          fill="url(#paint0_linear_35_164)"
          // onClick={() => setChangeParent("cyan")}
        />
        <path
          d="M560.071 427L524.5 420C512.678 398.384 490.604 378.542 483.081 374.823L479.991 387.997L437 348.207L493.022 331L489.932 345.787C528.086 363.209 555.28 411.855 560.071 427Z"
          fill="url(#paint1_linear_35_164)"
          onClick={() => setChangeParent("purple")}
          style={{ cursor: "pointer" }}
        /> */}

        {/* <g onClick={()=>{}} style={{ cursor: 'pointer' }}>  add component name*/}
        <g>
          <path
            d="M560.071 427L524.5 420C512.678 398.384 490.604 378.542 483.081 374.823L479.991 387.997L437 348.207L493.022 331L489.932 345.787C528.086 363.209 555.28 411.855 560.071 427Z"
            fill="url(#paint0_linear_259_123)"
          />
          <text
            transform="translate(492.33 361.983) rotate(27.955)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.4993"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4715">
              R
            </tspan>
          </text>
          <text
            transform="translate(497.102 364.574) rotate(31.9119)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.4993"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4715">
              E
            </tspan>
          </text>
          <text
            transform="translate(501.337 367.264) rotate(35.6314)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.4993"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4715">
              S
            </tspan>
          </text>
          <text
            transform="translate(505.268 370.113) rotate(39.7466)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.4993"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4715">
              O
            </tspan>
          </text>
          <text
            transform="translate(509.894 374.035) rotate(44.2574)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.4993"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4715">
              U
            </tspan>
          </text>
          <text
            transform="translate(514.043 378.157) rotate(48.5309)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.4993"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4715">
              R
            </tspan>
          </text>
          <text
            transform="translate(517.612 382.267) rotate(52.646)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.4993"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4715">
              C
            </tspan>
          </text>
          <text
            transform="translate(520.865 386.615) rotate(56.6029)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.4993"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4715">
              E
            </tspan>
          </text>
          <text
            transform="translate(523.589 390.828) rotate(60.3224)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.4993"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.4715">
              S
            </tspan>
          </text>
        </g>
        <g>
          <path
            d="M560.071 473L524.5 480C512.678 501.616 490.604 521.458 483.081 525.177L479.991 512.003L437 551.793L493.022 569L489.932 554.213C528.086 536.791 555.28 488.145 560.071 473Z"
            fill="url(#paint0_linear_259_12)"
            onClick={() => setChangeParent("red")}
          />
          <text
            transform="translate(487.524 532.301) rotate(-24.9493)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.97403"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.64169">
              T
            </tspan>
          </text>
          <text
            transform="translate(491.673 530.348) rotate(-28.5884)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.97403"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.64169">
              E
            </tspan>
          </text>
          <text
            transform="translate(495.861 528.046) rotate(-32.4597)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.97403"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.64169">
              C
            </tspan>
          </text>
          <text
            transform="translate(500.221 525.252) rotate(-36.6408)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.97403"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.64169">
              H
            </tspan>
          </text>
          <text
            transform="translate(504.692 521.894) rotate(-40.9767)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.97403"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.64169">
              N
            </tspan>
          </text>
          <text
            transform="translate(508.938 518.123) rotate(-44.306)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.97403"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.64169">
              I
            </tspan>
          </text>
          <text
            transform="translate(511.035 516.091) rotate(-47.4805)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.97403"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.64169">
              C
            </tspan>
          </text>
          <text
            transform="translate(514.554 512.173) rotate(-50.655)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.97403"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.64169">
              I
            </tspan>
          </text>
          <text
            transform="translate(516.413 509.929) rotate(-53.9069)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.97403"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.64169">
              A
            </tspan>
          </text>
          <text
            transform="translate(519.567 505.565) rotate(-58.1654)"
            fill="white"
            style={{ whiteSpace: "pre" }}
            fontFamily="Montserrat"
            fontSize="5.97403"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.64169">
              N
            </tspan>
          </text>
        </g>
        <path
          opacity="0.23"
          d="M839.711 675C879.175 606.648 899.966 529.118 900 450.192C900.033 371.265 879.308 293.718 839.903 225.332L450 450L839.711 675Z"
          fill="#5F6D73"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M606.973 434.312L590.161 389.018L480.068 419.141L491.96 451.182L481.726 478.755L591.82 508.878L606.967 468.068L545.287 451.191L606.973 434.312Z"
          fill={
            highlightedPathColor && hoveredCircleid === 1
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="1to2&3"
        />
        {/* <rect
          width="48.3141"
          height="114.14"
          transform="matrix(0.347975 0.937504 -0.964546 0.263916 590.161 389.018)"
          // fill="#EAEBEB"
          fill={
            highlightedPathColor && hoveredCircleid === 1
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="1to2"
        />
        <rect
          width="43.5307"
          height="114.14"
          transform="matrix(-0.347975 0.937504 0.964546 0.263916 496.874 437.944)"
          // fill="#EAEBEB"
          fill={
            highlightedPathColor && hoveredCircleid === 1
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="1to3"
        /> */}
        <path
          d="M769.188 351.679L782.41 360.721L717.119 452.968L703.889 445.389L769.188 351.679Z"
          // fill="purple"
          id="6to9"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 6)
              ? highlightedPathColor
              : "#EAEBEB"
          }
        />
        <path
          d="M698.819 462.831L697.99 446.83L785.538 445.469L787.263 460.619L698.819 462.831Z"
          // fill="#EAEBEB"
          id="6to10"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 6)
              ? highlightedPathColor
              : "#EAEBEB"
          }
        />
        <path
          d="M788.533 458.677L788.138 447.703L863.478 446.388L864.661 456.773L788.533 458.677Z"
          // fill="#EAEBEB"
          id="10to13"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 3 ||
              hoveredCircleid === 10 ||
              hoveredCircleid === 7 ||
              hoveredCircleid === 6)
              ? highlightedPathColor
              : "#EAEBEB"
          }
        />

        {/* <path
          d="M698.819 462.831L698.883 446.807L865.365 443.473L867.089 458.622L698.819 462.831Z"
          // fill="#EAEBEB"
          fill={
            highlightedPathColor && hoveredCircleid === 1
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="10to12"
        /> */}
        <rect
          width="10.12"
          height="76.2049"
          transform="matrix(-0.506669 0.86214 -0.903481 -0.428627 846.25 581.923)"
          // fill="#EAEBEB"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 7 ||
              hoveredCircleid === 11 ||
              hoveredCircleid === 3)
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="11to14"
        />
        <rect
          width="16.08"
          height="67.1969"
          transform="matrix(-0.506669 0.86214 -0.903481 -0.428627 769.271 541.924)"
          // fill="#EAEBEB"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 7 ||
              hoveredCircleid === 3)
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="7to11"
        />
        <rect
          width="24.79"
          height="114.139"
          transform="matrix(-0.506669 0.86214 -0.903481 -0.428627 707 506.924)"
          // fill="#EAEBEB"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 || hoveredCircleid === 3)
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="3to7"
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
          d="M708.626 296.945L709.989 303.786L651.395 338.664L647.607 332.037L708.626 296.945Z"
          // fill="#5EB646"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 4)
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
              hoveredCircleid === 4 ||
              hoveredCircleid === 8)
              ? highlightedPathColor
              : "#5EB646"
          }
        />
        <rect
          width="16.0822"
          height="75.4319"
          transform="matrix(0.493917 0.869509 -0.90969 0.415287 770.082 342.353)"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 5)
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="5to9"
          // fill="black"
        />
        <rect
          width="24.7949"
          height="114.14"
          transform="matrix(0.34968 0.936869 -0.964064 0.265671 710.038 369)"
          // fill="#EAEBEB"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 || hoveredCircleid === 2)
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="2to5"
        />

        <rect
          width="24.7949"
          height="84.2487"
          transform="matrix(-0.320966 0.947091 -0.915084 -0.403262 720.199 444.869)"
          // fill="#EAEBEB"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 || hoveredCircleid === 2)
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="2to6"
        />
        <rect
          width="16.08"
          height="109.052"
          transform="matrix(0.701362 0.712805 -0.771897 0.635747 783.177 450)"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 3 ||
              hoveredCircleid === 7)
              ? highlightedPathColor
              : "#EAEBEB"
          }
          id="7to10"
        />
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
        <text
          transform="translate(559 518)"
          fill="black"
          fontFamily="Montserrat"
          fontSize="10"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="-30" y="15">
            PROJECT&#10;
          </tspan>
          <tspan x="-30.3" y="26">
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
          fontSize="6"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="0.0429688" y="4">
            STRUCTURAL/PROFESSIONAL
          </tspan>
          <tspan x="0.0429688" y="12">
            ENGINEER(SE/PE)
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
            <li>BIM</li>
            <li>BUILDING FORENSICS</li>
            <li>COMPUTATIONAL FLUID DYNAMICS</li>
            <li>DYNAMO</li>
            <li>ENERGY MODELING</li>
            <li>FIRE PROTECTION ENGINEER</li>
            <li>INFORMATION TECHNOLOGIES</li>
            <li>LIGHTING DESIGNER</li>
            <li>REVIT</li>
            <li>SUSTAINABILITY</li>
            <li>VIRTUAL REALITY</li>
          </ul>
        </foreignObject>
        {/* common text ends */}
        <StyledGtag
          id={1}
          onClick={(e) => {
            const groupId = { target: { id: 1 } };
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
            fill="#E07127"
            stroke="#00ffff"
            strokeWidth="3"
          />
          <ForeignObjLeveltwo
            cx="450.001"
            cy="450"
            r="56.5"
            text1={data.orange_level_2.circle_id_1.head}
            text2={data.orange_level_2.circle_id_1.body}
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
            const groupId = { target: { id: 6 } };
            onClick(groupId, e);
          }}
          cx="710"
          cy="450"
          style={{
            cursor: "pointer",
            transformOrigin: "710px 450px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 6);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="710"
            cy="450"
            r="26"
            fill="#E07127"
            stroke="#00ffff"
            strokeWidth="2"
          />
          <ForeignObjLeveltwo
            cx="710"
            cy="450"
            r="26"
            text1={data.orange_level_2.circle_id_6.head}
            text2={data.orange_level_2.circle_id_6.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "7px", body: "5px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={13}
          onClick={(e) => {
            const groupId = { target: { id: 13 } };
            onClick(groupId, e);
          }}
          cx="862"
          cy="450"
          style={{
            cursor: "pointer",
            transformOrigin: "862px 450px",
            transition: "transform 0.3s ease",
          }}
        >
          <circle
            cx="862"
            cy="450"
            r="21.5"
            fill="#6A6D6D"
            stroke="#CE4128"
            strokeWidth="3"
          />
          <ForeignObjLeveltwo
            cx="862"
            cy="450"
            r="21.5"
            text1={data.orange_level_2.circle_id_13.head}
            text2={data.orange_level_2.circle_id_13.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "5px", body: "4px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={5}
          onClick={(e) => {
            const groupId = { target: { id: 5 } };
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
            enablemouse && onMouseHoverFunc("#EBAF3A", 5);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="708.921"
            cy="379.917"
            r="26"
            transform="rotate(-3.31002 708.921 379.917)"
            fill="#E07127"
            stroke="#EBAF3A"
            strokeWidth="2"
          />
          <ForeignObjLeveltwo
            cx="708.921"
            cy="379.917"
            r="26"
            text1={data.orange_level_2.circle_id_5.head}
            text2={data.orange_level_2.circle_id_5.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "7px", body: "5px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={9}
          onClick={(e) => {
            const groupId = { target: { id: 9 } };
            onClick(groupId, e);
          }}
          cx="774.403"
          cy="347.402"
          style={{
            cursor: "pointer",
            transformOrigin: "774.403px 347.402px",
            transition: "transform 0.3s ease",
          }}
        >
          <circle
            cx="774.403"
            cy="347.402"
            r="26.5"
            transform="rotate(-3.31002 774.403 347.402)"
            fill="#6A6D6D"
            stroke="#00ffff"
            strokeWidth="3"
          />
          <ForeignObjLeveltwo
            cx="774.403"
            cy="347.402"
            r="26.5"
            text1={data.orange_level_2.circle_id_9.head}
            text2={data.orange_level_2.circle_id_9.body}
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
            const groupId = { target: { id: 10 } };
            onClick(groupId, e);
          }}
          cx="786"
          cy="453"
          style={{
            cursor: "pointer",
            transformOrigin: "786px 453px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#CE4128", 10);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="786"
            cy="453"
            r="26.5"
            fill="#6A6D6D"
            stroke="#CE4128"
            strokeWidth="3"
          />
          <ForeignObjLeveltwo
            cx="786"
            cy="453"
            r="26.5"
            text1={data.orange_level_2.circle_id_10.head}
            text2={data.orange_level_2.circle_id_10.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "6px", body: "4px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={11}
          onClick={(e) => {
            const groupId = { target: { id: 11 } };
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
            enablemouse && onMouseHoverFunc("#EBAF3A", 11);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="774.001"
            cy="555"
            r="26.5"
            fill="#E07127"
            stroke="#EBAF3A"
            strokeWidth="3"
          />
          <ForeignObjLeveltwo
            cx="774.001"
            cy="555"
            r="26.5"
            text1={data.orange_level_2.circle_id_11.head}
            text2={data.orange_level_2.circle_id_11.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "6px", body: "5px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={7}
          onClick={(e) => {
            const groupId = { target: { id: 7 } };
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
            enablemouse && onMouseHoverFunc("#EBAF3A", 7);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="707"
            cy="523.002"
            r="26.5"
            fill="#E07127"
            stroke="#EBAF3A"
            strokeWidth="3"
          />
          <ForeignObjLeveltwo
            cx="707"
            cy="523.002"
            r="26.5"
            text1={data.orange_level_2.circle_id_7.head}
            text2={data.orange_level_2.circle_id_7.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "7px", body: "5px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={3}
          onClick={(e) => {
            const groupId = { target: { id: 3 } };
            onClick(groupId, e);
          }}
          cx="611"
          cy="497"
          style={{
            cursor: "pointer",
            transformOrigin: "611px 497px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 3);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="611"
            cy="497"
            r="41.5"
            fill="#E07127"
            stroke="#00ffff"
            strokeWidth="3"
          />
          <ForeignObjLeveltwo
            cx="611"
            cy="497"
            r="41.5"
            text1={data.orange_level_2.circle_id_3.head}
            text2={data.orange_level_2.circle_id_3.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "8px", body: "7px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={2}
          onClick={(e) => {
            const groupId = { target: { id: 2 } };
            onClick(groupId, e);
          }}
          cx="611"
          cy="409"
          style={{
            cursor: "pointer",
            transformOrigin: "611px 409px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 2);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="611"
            cy="409"
            r="41.5"
            fill="#6A6D6D"
            stroke="#00ffff"
            strokeWidth="3"
          />
          <ForeignObjLeveltwo
            cx="611"
            cy="409"
            r="41.5"
            text1={data.orange_level_2.circle_id_2.head}
            text2={data.orange_level_2.circle_id_2.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "8px", body: "7px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={8}
          onClick={(e) => {
            const groupId = { target: { id: 8 } };
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
            enablemouse && onMouseHoverFunc("#00ffff", 8);
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
          />
          <ForeignObjLeveltwo
            cx="707.995"
            cy="297.957"
            r="23"
            text1={data.orange_level_2.circle_id_8.head}
            text2={data.orange_level_2.circle_id_8.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "6px", body: "4px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={12}
          onClick={(e) => {
            const groupId = { target: { id: 12 } };
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
          />
          <ForeignObjLeveltwo
            cx="772.239"
            cy="264.045"
            r="21.5"
            text1={data.orange_level_2.circle_id_12.head}
            text2={data.orange_level_2.circle_id_12.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "6px", body: "4px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <StyledGtag
          id={14}
          onClick={(e) => {
            const groupId = { target: { id: 14 } };
            onClick(groupId, e);
          }}
          cx="842"
          cy="585"
          style={{
            cursor: "pointer",
            transformOrigin: "842px 585px",
            transition: "transform 0.3s ease",
          }}
        >
          <circle
            cx="842"
            cy="585"
            r="21.5"
            fill="#E07127"
            stroke="#EBAF3A"
            strokeWidth="3"
            id={14}
          />
          <ForeignObjLeveltwo
            cx="842"
            cy="585"
            r="21.5"
            text1={data.orange_level_2.circle_id_14.head}
            text2={data.orange_level_2.circle_id_14.body}
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
            const groupId = { target: { id: 4 } };
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
            enablemouse && onMouseHoverFunc("#00ffff", 4);
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
          />
          <ForeignObjLeveltwo
            cx="648.688"
            cy="334.644"
            r="26"
            text1={data.orange_level_2.circle_id_4.head}
            text2={data.orange_level_2.circle_id_4.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "7px", body: "4px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <circle cx="515" cy="569" r="9" stroke="#00ffff" strokeWidth="1.5" />
        <circle cx="515" cy="591" r="9" stroke="#EBAF3A" strokeWidth="1.5" />
        <circle cx="515" cy="613" r="9" stroke="#CE4128" strokeWidth="1.5" />
        <defs>
          {/* red */}
          <linearGradient
            id="paint0_linear_259_12"
            x1="437"
            y1="551.928"
            x2="535.78"
            y2="486.92"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.452429" stopColor="#CE4128" />
            <stop offset="1" stopColor="#CE4128" stopOpacity="0" />
          </linearGradient>
          {/* cyan */}
          <linearGradient
            id="paint0_linear_259_123"
            x1="437"
            y1="348.072"
            x2="535.78"
            y2="413.08"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.452429" stopColor="#34AAD7" />
            <stop offset="1" stopColor="#34AAD7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default SecondLevelOrange;
