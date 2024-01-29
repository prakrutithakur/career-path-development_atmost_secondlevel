import React, { useEffect, useState } from "react";
import ForeignObjLeveltwo from "./ForeignObjLeveltwo";
import data from "./data.json";
// import { StyledGtag } from "../DarkBlueSection/SecondLevel";
import StyledGtag from '../StyledGtag';
import { hexToRGBA } from "../HighlighPathOpacity";

const SecondLevelRed = ({ onClick, setChangeParent }) => {
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
        }}
      >
        <circle cx="450" cy="450" r="450" fill="#F6F7F8" />
        <ellipse cx="450" cy="450" rx="375" ry="375" fill="#D7DDE1" />
        <circle cx="450" cy="450" r="300" fill="#B3BDC3" />
        <circle cx="450" cy="450" r="230" fill="#8C979D" />
        <g
          onClick={() => {
            setChangeParent("orange");
          }}
          style={{ cursor: "pointer" }}
        >
          <path
            d="M560.071 427L524.5 420C512.678 398.384 490.604 378.542 483.081 374.823L479.991 387.997L437 348.206L493.022 331L489.932 345.787C528.086 363.208 555.28 411.855 560.071 427Z"
            fill="url(#paint0_linear_259_75)"
          /><text transform="translate(490.845 360.975) rotate(27.8929)" fill="white"  style={{whiteSpace: "pre"}} font-family="Montserrat" font-size="5.48241" font-weight="bold" letter-spacing="0em"><tspan x="0" y="5.46545">E</tspan></text>
          <text transform="translate(495.245 363.335) rotate(31.4912)" fill="white"  style={{whiteSpace: "pre"}} font-family="Montserrat" font-size="5.48241" font-weight="bold" letter-spacing="0em"><tspan x="0" y="5.46545">N</tspan></text>
          <text transform="translate(500.16 366.4) rotate(35.2971)" fill="white"  style={{whiteSpace: "pre"}} font-family="Montserrat" font-size="5.48241" font-weight="bold" letter-spacing="0em"><tspan x="0" y="5.46545">G</tspan></text>
          <text transform="translate(504.632 369.641) rotate(38.2034)" fill="white"  style={{whiteSpace: "pre"}} font-family="Montserrat" font-size="5.48241" font-weight="bold" letter-spacing="0em"><tspan x="0" y="5.46545">I</tspan></text>
          <text transform="translate(507.132 371.606) rotate(41.1789)" fill="white"  style={{whiteSpace: "pre"}} font-family="Montserrat" font-size="5.48241" font-weight="bold" letter-spacing="0em"><tspan x="0" y="5.46545">N</tspan></text>
          <text transform="translate(511.445 375.448) rotate(44.7772)" fill="white"  style={{whiteSpace: "pre"}} font-family="Montserrat" font-size="5.48242" font-weight="bold" letter-spacing="0em"><tspan x="0" y="5.46545">E</tspan></text>
          <text transform="translate(514.947 378.974) rotate(48.0986)" fill="white"  style={{whiteSpace: "pre"}} font-family="Montserrat" font-size="5.48241" font-weight="bold" letter-spacing="0em"><tspan x="0" y="5.46545">E</tspan></text>
          <text transform="translate(518.25 382.703) rotate(51.5585)" fill="white"  style={{whiteSpace: "pre"}} font-family="Montserrat" font-size="5.48242" font-weight="bold" letter-spacing="0em"><tspan x="0" y="5.46545">R</tspan></text>
          <text transform="translate(521.513 386.906) rotate(54.3956)" fill="white"  style={{whiteSpace: "pre"}} font-family="Montserrat" font-size="5.48241" font-weight="bold" letter-spacing="0em"><tspan x="0" y="5.46545">I</tspan></text>
          <text transform="translate(523.366 389.491) rotate(57.3712)" fill="white"  style={{whiteSpace: "pre"}} font-family="Montserrat" font-size="5.48241" font-weight="bold" letter-spacing="0em"><tspan x="0" y="5.46545">N</tspan></text>
          <text transform="translate(526.45 394.394) rotate(61.177)" fill="white"  style={{whiteSpace: "pre"}} font-family="Montserrat" font-size="5.48241" font-weight="bold" letter-spacing="0em"><tspan x="0" y="5.46545">G</tspan></text>
        </g>
        <g
          onClick={() => {
            setChangeParent("darkblue");
          }}
          style={{ cursor: "pointer" }}
        >
          <path
            d="M560.071 473L524.5 480C512.678 501.616 490.604 521.458 483.081 525.177L479.991 512.003L437 551.793L493.022 569L489.932 554.213C528.086 536.791 555.28 488.145 560.071 473Z"
            fill="url(#paint0_linear_259_173)"
          />

          <text
            transform="translate(487.682 534.308) rotate(-26.4774)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.8089"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.58249">
              A
            </tspan>
          </text>
          <text
            transform="translate(491.482 532.391) rotate(-29.8659)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.8089"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.58249">
              R
            </tspan>
          </text>
          <text
            transform="translate(495.166 530.248) rotate(-33.1773)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.8089"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.58249">
              C
            </tspan>
          </text>
          <text
            transform="translate(498.542 528.026) rotate(-36.6428)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.80891"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.58249">
              H
            </tspan>
          </text>
          <text
            transform="translate(502.295 525.177) rotate(-39.5692)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.8089"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.58249">
              I
            </tspan>
          </text>
          <text
            transform="translate(504.344 523.482) rotate(-42.2646)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.8089"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.58249">
              T
            </tspan>
          </text>
          <text
            transform="translate(507.336 520.734) rotate(-45.499)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.8089"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.58249">
              E
            </tspan>
          </text>
          <text
            transform="translate(510.168 517.822) rotate(-48.7334)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.8089"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.58249">
              C
            </tspan>
          </text>
          <text
            transform="translate(512.832 514.755) rotate(-51.9679)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.8089"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.58249">
              T
            </tspan>
          </text>
          <text
            transform="translate(515.312 511.564) rotate(-55.4334)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.8089"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.58249">
              U
            </tspan>
          </text>
          <text
            transform="translate(517.93 507.714) rotate(-58.9758)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.8089"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.58249">
              R
            </tspan>
          </text>
          <text
            transform="translate(520.106 504.049) rotate(-62.2873)"
            fill="white"
            fontFamily="Montserrat"
            fontSize="5.80891"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0" y="5.58249">
              E
            </tspan>
          </text>
        </g>
        <path
          opacity="0.23"
          d="M839.711 675C879.175 606.648 899.966 529.118 900 450.192C900.033 371.265 879.308 293.718 839.903 225.332L450 450L839.711 675Z"
          fill="#5F6D73"
        />
        <path
          d="M650.244 335.833L654.325 342.392L604.085 405.895L593 406.779L650.244 335.833Z"
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
              hoveredCircleid === 3)
              ? highlightedPathColor
              : "#5EB646"
          }
        />
        <path
          d="M774.311 260.384L775.368 267.386L708.767 304.929L708.354 297.436L774.311 260.384Z"
          // fill="#5EB646"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 3 ||
              hoveredCircleid === 5)
              ? highlightedPathColor
              : "#5EB646"
          }
        />
        <rect
          x="464"
          y="420"
          width="151"
          height="61"
          fill={
            highlightedPathColor && hoveredCircleid === 1
              ? highlightedPathColor
              : "#EAEBEB"
          }
        />
        <rect
          x="605"
          y="430"
          width="118"
          height="41"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 || hoveredCircleid === 2)
              ? highlightedPathColor
              : "#EAEBEB"
          }
        />
        <rect
          x="711"
          y="437"
          width="85"
          height="27"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 4)
              ? highlightedPathColor
              : "#EAEBEB"
          }
        />
        <rect
          x="786"
          y="443"
          width="85"
          height="15"
          fill={
            highlightedPathColor &&
            (hoveredCircleid === 1 ||
              hoveredCircleid === 2 ||
              hoveredCircleid === 4 ||
              hoveredCircleid === 6)
              ? highlightedPathColor
              : "#EAEBEB"
          }
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
        {/* common text starts */}
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
          fontSize="7"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="0.0429688" y="2">
            SPECIALISED CERTIFICATION
          </tspan>
          <tspan x="0.0429688" y="12">
            (PMP, LEED, ETC)
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
              WORKPLACE <br />
              STRATEGIST
            </li>
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
            fill="#CE4128"
            stroke="#00ffff"
            strokeWidth="3"
            id={1}
          />
          <ForeignObjLeveltwo
            cx="450.001"
            cy="450"
            r="56.5"
            text1={data.red_secondlevel.circle_id_1.head}
            text2={data.red_secondlevel.circle_id_1.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "12px", body: "8px" }}
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
          cx="710"
          cy="450"
          style={{
            cursor: "pointer",
            transformOrigin: "710px 450px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 4);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="710"
            cy="450"
            r="31"
            fill="#CE4128"
            stroke="#00ffff"
            strokeWidth="2"
            id={4}
          />
          <ForeignObjLeveltwo
            cx="710"
            cy="450"
            r="31"
            text1={data.red_secondlevel.circle_id_4.head}
            text2={data.red_secondlevel.circle_id_4.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "7px", body: "6px" }}
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
            fill="#CE4128"
            stroke="#00ffff"
            strokeWidth="3"
            id={8}
          />
          <ForeignObjLeveltwo
            cx="862"
            cy="450"
            r="21.5"
            text1={data.red_secondlevel.circle_id_8.head}
            text2={data.red_secondlevel.circle_id_8.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "5px", body: "4px" }}
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
          cx="786"
          cy="450"
          style={{
            cursor: "pointer",
            transformOrigin: "786px 450px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 6);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="786"
            cy="450"
            r="26.5"
            fill="#CE4128"
            stroke="#00ffff"
            strokeWidth="3"
            id={6}
          />
          <ForeignObjLeveltwo
            cx="786"
            cy="450"
            r="26.5"
            text1={data.red_secondlevel.circle_id_6.head}
            text2={data.red_secondlevel.circle_id_6.body}
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
            const groupId = { target: { id: 2 } };
            onClick(groupId, e);
          }}
          cx="602"
          cy="450"
          style={{
            cursor: "pointer",
            transformOrigin: "602px 450px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 2);
          }}
          onMouseLeave={() => enablemouse && onMouseLeaveFunc()}
        >
          <circle
            cx="602"
            cy="450"
            r="56.5"
            fill="#CE4128"
            stroke="#00ffff"
            strokeWidth="3"
            id={2}
          />
          <ForeignObjLeveltwo
            cx="602"
            cy="450"
            r="56.5"
            text1={data.red_secondlevel.circle_id_2.head}
            text2={data.red_secondlevel.circle_id_2.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "10px", body: "8px" }}
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
          cx="707.995"
          cy="297.957"
          style={{
            cursor: "pointer",
            transformOrigin: "707.995px 297.957px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            enablemouse && onMouseHoverFunc("#00ffff", 5);
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
            id={5}
          />
          <ForeignObjLeveltwo
            cx="707.995"
            cy="297.957"
            r="23"
            text1={data.red_secondlevel.circle_id_5.head}
            text2={data.red_secondlevel.circle_id_5.body}
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
            id={7}
          />
          <ForeignObjLeveltwo
            cx="772.239"
            cy="264.045"
            r="21.5"
            text1={data.red_secondlevel.circle_id_7.head}
            text2={data.red_secondlevel.circle_id_7.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "5px", body: "5px" }}
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
          />
          <ForeignObjLeveltwo
            cx="648.688"
            cy="334.644"
            r="26"
            text1={data.red_secondlevel.circle_id_3.head}
            text2={data.red_secondlevel.circle_id_3.body}
            fill="white"
            fontfamily="Montserrat"
            fontsize={{ head: "6px", body: "6px" }}
            fontweight={{ head: "bold", body: "500" }}
            letterspacing="0em"
          />
        </StyledGtag>
        <circle cx="515" cy="569" r="9" stroke="#00ffff" strokeWidth="1.5" />
        <circle cx="515" cy="591" r="9" stroke="#EBAF3A" strokeWidth="1.5" />
        <circle cx="515" cy="613" r="9" stroke="#CE4128" strokeWidth="1.5" />
        <defs>
          {/* drakblue */}
          <linearGradient
            id="paint0_linear_259_173"
            x1="437"
            y1="551.928"
            x2="535.78"
            y2="486.92"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.452429" stopColor="#19447B" />
            <stop offset="1" stopColor="#19447B" stopOpacity="0" />
          </linearGradient>
          {/* orange */}
          <linearGradient
            id="paint0_linear_259_75"
            x1="437"
            y1="348.072"
            x2="535.78"
            y2="413.08"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.452429" stopColor="#E07127" />
            <stop offset="1" stopColor="#E07127" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default SecondLevelRed;
