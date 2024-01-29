import React, { useState, useEffect } from 'react';
import { useTransition, animated, useSpringRef, easings } from '@react-spring/web';
import SecondLevelDarkblue from './SecondLevel';
import ThirdLevel from './ThirdLevel';
import SixthLevel from './SixthLevel';
import styles from './../../styles.module.css';
import data from './data.json';
import MainCompSvg from '../MainCompSvg';
import RedParent from '../RedSection';
import PurpleParent from '../PurpleSection';
import SecondLevelPurple from '../PurpleSection/SecondLevel';
import SecondLevelRed from '../RedSection/SecondLevel';

const DarkBlueParent = ({
  currentComponent,
  setCurrentComp,
  compFlip,
  setCompFlip,
  renderedFromComponent,
  setselectedarea,
}) => {
  const [circleData, setCircleData] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [levelSixBounds, setLevelSixBounds] = useState(null);
  const [translateX, setTranslateX] = useState(null);
  const [translateY, setTranslateY] = useState(null);
  const { dark_blue_circle } = data;

  const [changeParent, setChangeParent] = useState('');
  const [flipFromCompo, setflipFromCompo] = useState(renderedFromComponent ? true : false);
  const [flipp, setflipp] = useState(flipFromCompo ? true : false);

  const transRef = useSpringRef();

  const purpleleave = useTransition(currentComponent, {
    ref: transRef,
    keys: null,
    from: {
      opacity: 1,
      transform: 'scale(1.5) translate(-110px, 0px) rotate(360deg)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1.5) translate(-110px, 0px) rotate(180deg)',
    },
    leave: {
      opacity: 1,
      transform: 'scale(2.5) translate(-110px, 0px) rotate(180deg)',
    },
    config: { easing: easings.easeIn, duration: 300 },
    onRest: () => {
      setflipp(false);
    },
    exitBeforeEnter: true,
  });

  const redleave = useTransition(currentComponent, {
    ref: transRef,
    keys: null,
    from: {
      opacity: 1,
      transform: 'scale(1.5) translate(-110px, 0px) rotate(0deg)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1.5) translate(-110px, 0px) rotate(180deg)',
    },
    leave: {
      opacity: 1,
      transform: 'scale(2.5) translate(-110px, 0px) rotate(180deg)',
    },
    config: { easing: easings.easeIn, duration: 300 },
    onRest: () => {
      setflipp(false);
    },
    exitBeforeEnter: true,
  });

  const homeTransition = useTransition(currentComponent, {
    ref: transRef,
    keys: null,
    from: {
      opacity: 1,
      transform: 'scale(1) translate(0px, 5px) rotate(0deg)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1) translate(0px, 5px) rotate(0deg)',
    },
    leave: {
      opacity: 0,
      transform: 'scale(1.5) translate(0px, 5px) rotate(0deg)',
    },
    config: { duration: 2000 }, // Adjust the duration as needed
    loop: { reverse: true },
  });

  const fromComponentTransition = flipFromCompo
    ? {
        ref: transRef,
        keys: null,
        from: {
          opacity: 1,
          transform: `scale(1.5) translate(-110px, 0px) rotate(180deg)`,
        },
        enter: {
          opacity: 1,
          transform: `scale(1.5) translate(-110px, 0px) rotate(${
            renderedFromComponent === 'red' && currentComponent.comp === 'LevelTwo' ? 360 : 0
          }deg)`,
        },
        leave: {
          opacity: 0,
          transform: 'scale(2.5) translate(-110px, 0px) rotate(90deg)',
        },
        config: { easing: easings.easeIn, duration: 300 },
        delay:
          (renderedFromComponent === 'purple' || renderedFromComponent === 'red') &&
          currentComponent.comp === 'LevelTwo'
            ? 300
            : 0,
        exitBeforeEnter: true,
      }
    : {
        ref: transRef,
        keys: null,
        from: {
          opacity: 0,
          transform: 'scale(1) translate(0px, 0px) rotate(0deg)',
        },
        enter: {
          opacity: 1,
          transform: 'scale(1.5) translate(-110px, 0px) rotate(0deg)',
        },
        leave: {
          opacity: 0,
          transform: 'scale(2.5) translate(-110px, 0px) rotate(0deg)',
        },
        config: { easing: easings.easeIn, duration: 900 },
      };

  const homeToLevelTwo = useTransition(currentComponent, fromComponentTransition);
  const leveltwothreeleave =
    currentComponent.comp === 'LevelFour'
      ? {
          ref: transRef,
          keys: null,
          from: { opacity: 0.5, transform: 'scale(0.5) translate(0px, 0px)' },
          enter: { opacity: 1, transform: 'scale(1) translate(0px, -50px)' },
          leave: { opacity: 0, transform: 'scale(1.2) translate(0px, 0px)' },
          config: { tension: 280, friction: 60 },
          // onStart:()=>{
          //   setShowBackground(false);
          // }
        }
      : {
          ref: transRef,
          keys: null,
          from: { opacity: 0.5, transform: 'scale(0.5) translate(0px, 0px)' },
          enter: { opacity: 1, transform: 'scale(1) translate(0px, -50px)' },
          // leave: { opacity: 0.2, transform: "scale(2) translate(10px, -10px)" },
          config: { tension: 280, friction: 60 },
          // onRest:()=>{
          //   setShowBackground(true);
          // }
        };

  const levelTwoToLevelThree = useTransition(currentComponent, leveltwothreeleave);

  const levelThreeToLevelFour = useTransition(currentComponent, {
    ref: transRef,
    keys: null,
    from: {
      opacity: 0.5,
      transform: `scale(0.5) translate(${translateX}px, ${translateY}px)`,
    },
    enter: {
      opacity: 1,
      transform: `scale(1.5) translate(${translateX}px, ${translateY}px)`,
    },
    leave: {
      opacity: 0,
      transform: `scale(1.7) translate(${translateX}px, ${translateY}px)`,
    },
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
    from: {
      opacity: 0.5,
      transform: `scale(0.5) translate(${translateX}px, ${translateY}px)`,
    },
    enter: {
      opacity: 1,
      transform: `scale(1.5) translate(${translateX}px, ${translateY}px)`,
    },
    leave: {
      opacity: 0,
      transform: `scale(0.8) translate(${translateX}px, ${translateY}px)`,
    },
    config: { tension: 280, friction: 60 },
  });

  useEffect(() => {
    transRef.start();
    if (currentComponent.comp === 'Home') {
      setTimeout(() => {
        setCurrentComp({ comp: 'LevelTwo' });
      }, 200);
    }
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
      if (!groupId) {
        setCurrentComp({ comp: 'LevelTwo' });
        setCompFlip(false);
        return;
      }
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
    } else {
      if (currentComponent.comp === 'LevelFour' && !groupId) {
        setCurrentComp({ comp: 'LevelThree' });
        setCompFlip(false);
        return;
      }
    }
  };

  const handleLevelSix = () => {
    setCurrentComp({ comp: 'LevelFive' });
  };

  const handleLevelSeven = (groupId, event) => {
    if (!compFlip) {
      if (!groupId) {
        setCurrentComp({ comp: 'LevelThree' });
        setCompFlip(false);
        return;
      }
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
    } else {
      if (!groupId) {
        setCurrentComp({ comp: 'LevelFive' });
        setCompFlip(false);
        return;
      }
    }
  };

  const components = {
    Home: ({ style }) =>
      React.createElement(
        animated.div,
        { style: { ...style, overflow: 'hidden' } },
        <MainCompSvg />
      ),
    LevelTwo: ({ style }) =>
      React.createElement(
        animated.div,
        { style: { ...style, overflow: 'hidden' } },
        <SecondLevelDarkblue onClick={handleLevelThree} setChangeParent={setChangeParent} />
      ),
    LevelThree: ({ style }) => (
      <>
        {
          <animated.div
            style={{
              transform: 'scale(1.5) translate(-110px, 0px)',
              opacity: `${currentComponent.comp === 'LevelThree' ? '0.2' : '0'}`,
            }}
          >
            <SecondLevelDarkblue onClick={handleLevelThree} setChangeParent={setChangeParent} />
          </animated.div>
        }
        {React.createElement(
          animated.div,
          { style: { ...style, overflow: 'hidden' } },
          <ThirdLevel
            circleData={circleData}
            compFlip={compFlip}
            bounds={bounds}
            setBounds={setBounds}
            onClick={handleLevelFive}
            setflipFromCompo={setflipFromCompo}
          />
        )}
      </>
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
          setflipFromCompo={setflipFromCompo}
        />
      ),
    LevelFive: ({ style }) => (
      <>
        {
          <animated.div
            style={{
              transform: 'scale(1) translate(-400px, -50px)',
              opacity: `${currentComponent.comp === 'LevelFive' ? '0.1' : '0'}`,
            }}
          >
            <ThirdLevel
              circleData={circleData}
              compFlip={compFlip}
              bounds={bounds}
              setBounds={setBounds}
              onClick={handleLevelFive}
              setflipFromCompo={setflipFromCompo}
            />
          </animated.div>
        }
        {React.createElement(
          animated.div,
          { style: { ...style, overflow: 'hidden' } },
          <SixthLevel
            circleData={circleData}
            levelSixBounds={levelSixBounds}
            setLevelSixBounds={setLevelSixBounds}
            compFlip={compFlip}
            onClick={handleLevelSeven}
          />
        )}
      </>
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
    Purple: ({ style }) =>
      React.createElement(
        animated.div,
        { style: { ...style, overflow: 'hidden' } },
        <SecondLevelPurple onClick={() => {}} setChangeParent={() => {}} />
      ),
    Red: ({ style }) =>
      React.createElement(
        animated.div,
        { style: { ...style, overflow: 'hidden' } },
        <SecondLevelRed onClick={() => {}} setChangeParent={() => {}} />
      ),
  };

  const renderCorrespondingComp = (targetComp) => {
    switch (targetComp) {
      case 'Home':
        return components['Home'];
      case 'purple':
        return components['Purple'];
      case 'red':
        return components['Red'];
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

  if (changeParent) {
    if (changeParent === 'red') {
      setselectedarea('red');
      return (
        <RedParent
          currentComponent={currentComponent}
          setCurrentComp={setCurrentComp}
          compFlip={compFlip}
          setCompFlip={setCompFlip}
          renderedFromComponent={'darkblue'}
          setselectedarea={setselectedarea}
        />
      );
    } else {
      //calling purple parent
      setselectedarea('purple');
      return (
        <PurpleParent
          currentComponent={currentComponent}
          setCurrentComp={setCurrentComp}
          compFlip={compFlip}
          setCompFlip={setCompFlip}
          renderedFromComponent={'darkblue'}
          setselectedarea={setselectedarea}
        />
      );
    }
  }

  return flipp && renderedFromComponent === 'purple'
    ? React.createElement(
        'div',
        { className: `${styles.container12}` },
        purpleleave((style, currentComponent) => {
          return React.createElement(renderCorrespondingComp(renderedFromComponent), {
            style: style,
          });
        })
      )
    : flipp && renderedFromComponent === 'red'
    ? React.createElement(
        'div',
        { className: `${styles.container12}` },
        redleave((style, currentComponent) => {
          return React.createElement(renderCorrespondingComp(renderedFromComponent), {
            style: style,
          });
        })
      )
    : currentComponent.comp === 'Home'
    ? React.createElement(
        'div',
        { className: `${styles.container12}` },
        homeTransition((style) => {
          return React.createElement(renderCorrespondingComp(currentComponent.comp), {
            style: style,
          });
        })
      )
    : currentComponent.comp === 'LevelTwo'
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

export default DarkBlueParent;

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
