import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import {
  animated,
  easings,
  useSpringRef,
  useTransition,
} from "@react-spring/web";
import DarkBlueParent from "./components/DarkBlueSection";
import MainComp from "./MainComp";
import styles from "./styles.module.css";
import OrangeParent from "./components/OrangeSection";
import CyanParent from "./components/CyanSection";
import PurpleParent from "./components/PurpleSection";
import RedParent from "./components/RedSection";

const MainScreen = () => {
  const [currentComponent, setCurrentComp] = useState({ comp: "Home" });
  const [selectedsection, setSelectedSection] = useState(null);
  const [selectedarea, setselectedarea] = useState("");
  const [compFlip, setCompFlip] = useState(false);

  const homeIcon = `${process.env.PUBLIC_URL}/home-icon.svg`;
  const backIcon = `${process.env.PUBLIC_URL}/back-icon.svg`;

  const handleBackButton = () => {
    setCompFlip(false);
    if (selectedarea === "darkblue" || selectedarea === "purple") {
      switch (currentComponent.comp) {
        case "LevelTwo":
          setSelectedSection(null);
          setCurrentComp({ comp: "Home" });
          break;
        case "LevelThree":
          setCurrentComp({ comp: "LevelTwo" });
          break;
        case "LevelFour":
          setCurrentComp({ comp: "LevelThree" });
          break;
        case "LevelFive":
          setCurrentComp({ comp: "LevelThree" });
          break;
        case "LevelSix":
          setCurrentComp({ comp: "LevelFive" });
          break;
        default:
          setCompFlip(false);
          setSelectedSection(null);
          setCurrentComp({ comp: "Home" });
      }
    } else {
      switch (currentComponent.comp) {
        case "LevelTwo":
          setSelectedSection(null);
          setCurrentComp({ comp: "Home" });
          break;
        case "LevelThree":
          setCurrentComp({ comp: "LevelTwo" });
          break;
        case "LevelFour":
          setCurrentComp({ comp: "LevelThree" });
          break;
        case "LevelFive":
          setCurrentComp({ comp: "LevelFour" });
          break;
        case "LevelSix":
          setCurrentComp({ comp: "LevelFour" });
          break;
        case "LevelSeven":
          setCurrentComp({ comp: "LevelSix" });
          break;
        default:
          setCompFlip(false);
          setSelectedSection(null);
          setCurrentComp({ comp: "Home" });
      }
    }
  };

  const components = {
    Home: ({ style }) =>
      React.createElement(
        animated.div,
        { style: { ...style, overflow: "hidden" } },
        <MainComp
          setSelectedSection={setSelectedSection}
          setselectedarea={setselectedarea}
        />
      ),
  };

  const renderCorrespondingComp = useCallback(
    (selectedsection) => {
      switch (selectedsection) {
        case null:
          return components["Home"];
        case 1:
          return (
            <PurpleParent
              currentComponent={currentComponent}
              setCurrentComp={setCurrentComp}
              compFlip={compFlip}
              setCompFlip={setCompFlip}
              setselectedarea={setselectedarea}
            />
          );
        case 2:
          return (
            <CyanParent
              currentComponent={currentComponent}
              setCurrentComp={setCurrentComp}
              compFlip={compFlip}
              setCompFlip={setCompFlip}
              setselectedarea={setselectedarea}
            />
          );
        case 3:
          return (
            <OrangeParent
              currentComponent={currentComponent}
              setCurrentComp={setCurrentComp}
              compFlip={compFlip}
              setCompFlip={setCompFlip}
              setselectedarea={setselectedarea}
            />
          );
        case 4:
          return (
            <RedParent
              currentComponent={currentComponent}
              setCurrentComp={setCurrentComp}
              compFlip={compFlip}
              setCompFlip={setCompFlip}
              setselectedarea={setselectedarea}
            />
          );
        case 5:
          return (
            <DarkBlueParent
              currentComponent={currentComponent}
              setCurrentComp={setCurrentComp}
              compFlip={compFlip}
              setCompFlip={setCompFlip}
              setselectedarea={setselectedarea}
            />
          );
        default:
          return components["Home"];
      }
    },
    [selectedsection, currentComponent, compFlip]
  );

  function TransitionWrapper({ selectedsection, renderCorrespondingComp }) {
    const transRef = useSpringRef();
    const keyframes = Array.from({ length: 46 }, (_, index) => ({
      transform: `scale(1) translate(0px, 5px) rotate(${index * 40}deg)`,
      config: { duration: 5 + 5 * index }, // Start with 5ms and add 5ms at each step
      // config: { duration: 0},//testing purpose
    }));

    const homeTransition = useTransition(selectedsection, {
      ref: transRef,
      keys: null,
      from: {
        opacity: 1,
        transform: "scale(1) translate(0px, 5px) rotate(0deg)",
      },
      enter: [
        {
          opacity: 1,
          transform: "scale(1) translate(0px, 5px) rotate(-40deg)",
          config: { duration: 500 },
        },
        ...keyframes,
        {
          transform: "scale(1) translate(0px, 5px) rotate(1805deg)",
          config: { duration: 180, easing: easings.linear },
        },
        {
          transform: "scale(1) translate(0px, 5px) rotate(1795deg)",
          config: { duration: 180 },
        },
        {
          transform: "scale(1) translate(0px, 5px) rotate(1800deg)",
          config: { duration: 180 },
        },
      ],
      leave: {
        opacity: 1,
        transform: "scale(1) translate(0px, 5px) rotate(0deg)",
      },
      config: { duration: 3000, easing: (t) => t },
      loop: { reverse: true },
    });

    useEffect(() => {
      transRef.start();
      return () => {
        // Clean up and stop all transitions
        transRef.stop();
      };
    }, [selectedsection]);

    return homeTransition((style) => {
      return React.createElement(renderCorrespondingComp(selectedsection), {
        style: style,
      });
    });
  }

  return (
    <Container>
      {selectedsection && (
        <div style={{ position: "relative" }}>
          <IconSpan
            style={{
              position: "absolute",
              top: "20px",
              left: "50px",
              borderRadius: "50%",
            }}
            onClick={() => {
              setSelectedSection(null);
              setCurrentComp({ comp: "Home" });
              setCompFlip(false);
            }}
          >
            <img
              src={homeIcon}
              style={{
                width: "32px",
                height: "32px",
                top: 0,
                cursor: "pointer",
                left: 0,
                borderRadius: "50%",
              }}
              alt="back"
            />
          </IconSpan>
          <IconSpan
            style={{
              position: "absolute",
              top: "20px",
              left: 0,
              borderRadius: "50%",
            }}
            onClick={() => {
              handleBackButton();
            }}
          >
            <img
              src={backIcon}
              style={{
                width: "32px",
                height: "32px",
                top: 0,
                cursor: "pointer",
                left: 0,
                borderRadius: "50%",
              }}
              alt="back"
            />
          </IconSpan>
        </div>
      )}
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div
            style={{
              width: "100%",
              height: "100vh",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "800px",
                height: "100vh",
                overflow: "hidden",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {!selectedsection ? (
                <div className={`${styles.container12}`}>
                  <TransitionWrapper
                    selectedsection={selectedsection}
                    renderCorrespondingComp={renderCorrespondingComp}
                  />
                </div>
              ) : (
                renderCorrespondingComp(selectedsection)
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainScreen;

const IconSpan = styled.span`
  &:hover {
    opacity: 0.6;
    transition: opacity 0.3s;
  }
`;
