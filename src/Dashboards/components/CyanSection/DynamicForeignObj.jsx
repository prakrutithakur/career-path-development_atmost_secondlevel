import styled from 'styled-components';

const DynamicForeignObject = ({ cx, cy, r, text }) => {
  const reduce = Math.sqrt((r * r) / 2);
  const x = cx - reduce;
  const y = cy - reduce;

  return (
    <foreignObject
      x={`${x}px`}
      y={`${y}px`}
      fill="white"
      fontFamily="Montserrat"
      height={`${2 * reduce}`}
      width={`${2 * reduce}`}
      style={{
        fontWeight: 'bold',
        padding: '0',
        margin: '0',
      }}
    >
      <Styleddiv>
        <p
          style={{
            textAlign: 'center',
            color: 'white',
            paddingTop: '12px',
            maxWidth: '100%',
            maxHeight: '100%',
            wordWrap: 'break-word',
            hyphens: 'auto',
          }}
        >
          {text}
        </p>
      </Styleddiv>
    </foreignObject>
  );
};
const Styleddiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  max-width: 100%;
  max-height: 100%;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(211, 211, 211, 0.5);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(211, 211, 211, 0.5);
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &:hover {
    /* Use &:hover, not &hover: */
    &::-webkit-scrollbar {
      width: 8px;
      height: 2px;
    }
  }
`;

export default DynamicForeignObject;
