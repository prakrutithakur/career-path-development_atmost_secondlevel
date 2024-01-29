import React from "react";
import styled from "styled-components";

const StyledGtag = ({
  children,
  id,
  // onClick, //disable clicking
  cx,
  cy,
  style,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <HoverGtag
      id={id}
      cx={cx}
      cy={cy}
      style={style}
      // onClick={onClick} //disable clicking
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </HoverGtag>
  );
};

export const HoverGtag = styled.g`
  &:hover {
    transform: scale(1.2);
  }
`;

export default StyledGtag;
