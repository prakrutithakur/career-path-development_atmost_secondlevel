import styled from "styled-components";

const ForeignObjLeveltwo = ({
  cx,
  cy,
  r,
  text1,
  text2,
  fontfamily,
  fontsize,
  fontweight,
  letterspacing,
}) => {

  const reduce = Math.sqrt((r * r) / 2);
  const x = cx - r;
  const y = cy - r;

  return (
    <>
    <foreignObject
        x={`${x}px`}
        y={`${y}px`}
        fill="white"
        fontFamily={fontfamily}
        height={`${2 * r}`}
        width={`${2 * r}`}
        style={{
          letterSpacing: letterspacing,
          borderRadius:'50%'
        }}
      >
        <Styleddiv style={{ padding: `${r > 35 ? 10 : 9}px ${r > 35 ? 10 : 2}px 2px ${r > 35 ? 10 : 2}px` }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              textAlign: 'center',
              color: 'white',
              wordWrap: 'break-word',
              hyphens: 'auto',
              fontSize: fontsize.head,
              fontWeight: fontweight.head,
              width: '100%',
              letterSpacing: letterspacing,
              // border:'1px solid black'
            }}
          >
            <div>{text1}</div>      
          </div>
          <div style={{height:'1px !important',width:'70%',background:'white',fontSize:'0.5px',color:'transparent'}}>
              -
          </div>
          {text2 && <>
            <div
              style={{
                textAlign: 'center',
                color: 'white',
                wordWrap: 'break-word',
                hyphens: 'auto',
                fontSize: fontsize.body,
                fontWeight: fontweight.body,
                width: '100%',
                padding: `2px ${r > 30 ? 12 : 5}px 2px ${r > 30 ? 12 : 5}px`,
                letterSpacing: letterspacing,
                // border:'1px solid black'
              }}
            >
              {text2}
            </div>
          </>}
        </Styleddiv>
      </foreignObject>
    </>
      
  );
};

const Styleddiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  // border: 2px solid black;
`;

export default ForeignObjLeveltwo;
