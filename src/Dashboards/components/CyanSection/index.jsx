import React, { useState, useEffect } from 'react';
import { useTransition, animated, useSpringRef, easings } from '@react-spring/web';
import SecondLevel from './SecondLevel';
import ThirdLevel from './ThirdLevel';
import SixthLevel from './SixthLevel';
import styles from './../../styles.module.css';
import data from './data.json';

const CyanParent = ({ currentComponent, setCurrentComp, compFlip, setCompFlip }) => {
  const [circleData, setCircleData] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [levelSixBounds, setLevelSixBounds] = useState(null);
  const [translateX, setTranslateX] = useState(null);
  const [translateY, setTranslateY] = useState(null);
  const { dark_blue_circle } = data;

  const transRef = useSpringRef();

  const homeToLevelTwo = useTransition(currentComponent, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'scale(1) translate(0px, 0px)' },
    enter: { opacity: 1, transform: 'scale(1.5) translate(-110px, 0px)' },
    leave: { opacity: 0, transform: 'scale(2.5) translate(-110px, 0px)' },
    config: { easing: easings.easeIn, duration: 900 },
  });

  const levelTwoToLevelThree = useTransition(currentComponent, {
    ref: transRef,
    keys: null,
    from: { opacity: 0.5, transform: 'scale(0.5) translate(0px, 0px)' },
    enter: { opacity: 1, transform: 'scale(1) translate(0px, -50px)' },
    leave: { opacity: 0, transform: 'scale(1.2) translate(0px, 0px)' },
    config: { tension: 280, friction: 60 },
  });

  const levelThreeToLevelFour = useTransition(currentComponent, {
    ref: transRef,
    keys: null,
    from: { opacity: 0.5, transform: `scale(0.5) translate(${translateX}px, ${translateY}px)` },
    enter: { opacity: 1, transform: `scale(1.5) translate(${translateX}px, ${translateY}px)` },
    leave: { opacity: 0, transform: `scale(1.7) translate(${translateX}px, ${translateY}px)` },
    config: { tension: 280, friction: 60 },
  });

  const levelFourtoLevelFive = useTransition(currentComponent, {
    ref: transRef,
    keys: null,
    from: { opacity: 0.5, transform: 'scale(0.5) translate(0px, 0px)' },
    enter: { opacity: 1, transform: 'scale(1) translate(0px, 10px)' },
    leave: { opacity: 0, transform: 'scale(1.2) translate(0px, 0px)' },
    config: { tension: 280, friction: 60 },
  });

  const levelFivetoLevelSix = useTransition(currentComponent, {
    ref: transRef,
    keys: null,
    from: { opacity: 0.5, transform: `scale(0.5) translate(${translateX}px, ${translateY}px)` },
    enter: { opacity: 1, transform: `scale(1.5) translate(${translateX}px, ${translateY}px)` },
    leave: { opacity: 0, transform: `scale(0.8) translate(${translateX}px, ${translateY}px)` },
    config: { tension: 280, friction: 60 },
  });

  useEffect(() => {
    transRef.start();
  }, [currentComponent]);

  const handleLevelThree = (event) => {
    setCurrentComp({ comp: 'LevelThree' });
    const darkBlueCircleData = dark_blue_circle
      .filter((x) => x.circle_id == event.target.id)
      .map((x) => x.circle_details);
    setCircleData(darkBlueCircleData);
  };

  const handleLevelFive = (groupId, event) => {
    if (!compFlip) {
      setCurrentComp({ comp: 'LevelFour' });
      const circle1 = event.target;
      const rect = bounds;

      if (circle1 && groupId.target.id !== 'keys') {
        setCompFlip(!compFlip);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const circleRect = circle1.getBoundingClientRect();
        const circleRadius = circleRect.width / 2;
        const x = centerX - (circleRect.left - rect.left + circleRect.width / 2);
        const y = centerY - (circleRect.top - rect.top + circleRect.height / 2) - circleRadius;

        setTranslateX(x);
        setTranslateY(y);
      }
      if (circle1 && groupId.target.id === 'keys') {
        handleLevelSix();
      }
    }
  };

  const handleLevelSix = () => {
    setCurrentComp({ comp: 'LevelFive' });
  };

  const handleLevelSeven = (groupId, event) => {
    if (!compFlip) {
      setCurrentComp({ comp: 'LevelSix' });
      const circle1 = event.target;
      const rect = bounds;

      if (circle1 && groupId.target.id !== 'keys') {
        setCompFlip(!compFlip);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const circleRect = circle1.getBoundingClientRect();
        const circleRadius = circleRect.width / 2;
        const x = centerX - (circleRect.left - rect.left + circleRect.width / 2);
        const y = centerY - (circleRect.top - rect.top + circleRect.height / 2) - circleRadius / 2;

        setTranslateX(x);
        setTranslateY(y);
      }
      if (circle1 && groupId.target.id === 'keys') {
        handleLevelSix();
      }
    }
  };

  const components = {
    LevelTwo: ({ style }) =>
      React.createElement(
        animated.div,
        { style: { ...style, overflow: 'hidden' } },
        <SecondLevel onClick={handleLevelThree} />
      ),
    LevelThree: ({ style }) =>
      React.createElement(
        animated.div,
        { style: { ...style, overflow: 'hidden' } },
        <ThirdLevel
          circleData={circleData}
          compFlip={compFlip}
          bounds={bounds}
          setBounds={setBounds}
          onClick={handleLevelFive}
        />
      ),
    LevelFour: ({ style }) =>
      React.createElement(
        animated.div,
        { style: { ...style, overflow: 'hidden' } },
        <ThirdLevel
          circleData={circleData}
          compFlip={compFlip}
          bounds={bounds}
          setBounds={setBounds}
          onClick={handleLevelFive}
        />
      ),
    LevelFive: ({ style }) =>
      React.createElement(
        animated.div,
        { style: { ...style, overflow: 'hidden' } },
        <SixthLevel
          circleData={circleData}
          levelSixBounds={levelSixBounds}
          setLevelSixBounds={setLevelSixBounds}
          compFlip={compFlip}
          onClick={handleLevelSeven}
        />
      ),
    LevelSix: ({ style }) =>
      React.createElement(
        animated.div,
        { style: { ...style, overflow: 'hidden' } },
        <SixthLevel
          circleData={circleData}
          levelSixBounds={levelSixBounds}
          setLevelSixBounds={setLevelSixBounds}
          onClick={handleLevelSeven}
          compFlip={compFlip}
        />
      ),
  };

  const renderCorrespondingComp = (targetComp) => {
    switch (targetComp) {
      case 'LevelTwo':
        return components['LevelTwo'];
      case 'LevelThree':
        return components['LevelThree'];
      case 'LevelFour':
        return components['LevelFour'];
      case 'LevelFive':
        return components['LevelFive'];
      case 'LevelSix':
        return components['LevelSix'];
      default:
        return components['LevelTwo'];
    }
  };

  return currentComponent.comp === 'LevelTwo'
    ? React.createElement(
        'div',
        { className: `${styles.container12}` },
        homeToLevelTwo((style, currentComponent) => {
          return React.createElement(renderCorrespondingComp(currentComponent.comp), {
            style: style,
          });
        })
      )
    : currentComponent.comp === 'LevelFour' && compFlip
    ? React.createElement(
        'div',
        { className: `${styles.container12}` },
        levelThreeToLevelFour((style, currentComponent) => {
          return React.createElement(renderCorrespondingComp(currentComponent.comp), {
            style: style,
          });
        })
      )
    : currentComponent.comp === 'LevelFive'
    ? React.createElement(
        'div',
        { className: `${styles.container12}` },
        levelFourtoLevelFive((style, currentComponent) => {
          return React.createElement(renderCorrespondingComp(currentComponent.comp), {
            style: style,
          });
        })
      )
    : currentComponent.comp === 'LevelSix'
    ? React.createElement(
        'div',
        { className: `${styles.container12}` },
        levelFivetoLevelSix((style, currentComponent) => {
          return React.createElement(renderCorrespondingComp(currentComponent.comp), {
            style: style,
          });
        })
      )
    : React.createElement(
        'div',
        { className: `${styles.container12}` },
        levelTwoToLevelThree((style, currentComponent) => {
          return React.createElement(renderCorrespondingComp(currentComponent.comp), {
            style: style,
          });
        })
      );
};

export default CyanParent;

// const OverlayDiv = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(255, 255, 255, 0.9);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 999;
// `;
