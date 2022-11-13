import { useDispatch, useSelector } from 'react-redux';
import PopUpArrowStyles from './PopUpArrowStyles';
import './PopUpArrowAnimate.css';
import { useState } from 'react';

const PopUpArrow = (props) => {
  const mobile = props.mobile;
  const [active, setActive] = useState('left');
  const portfolio = useSelector((state) => state.popup.portfolio);
  const signature = useSelector((state) => state.popup.signature);
  const classes = PopUpArrowStyles({ active, mobile });
  const [x1, setX1] = useState(null);
  const [x2, setX2] = useState(null);
  const dispatch = useDispatch();
  let OnClickHeandler;
  if (props.type === 'portfolio') {
    OnClickHeandler = (e) => {
      const classList = e.target.classList;
      if (
        classList.contains(classes.ArrowLeftContaner.split(' ')[0]) ||
        classList.contains(classes.ArrowLeft)
      ) {
        setActive('left');
        const div = classList.contains(classes.ArrowLeftContaner.split(' ')[0])
          ? e.target.parentElement.children
          : e.target.parentElement.parentElement.children;
        const [
          arrowLeft,
          backCircleLeft,
          smallCircleLeft,
          circleLeft,
          bigCircle,
          circleRight,
          smallCircleRight,
          backCircleRight,
          arrowRight,
        ] = Array.from(div);
        backCircleLeft.style.animation = 'circleLeftTop 0.25s 1 ease-in-out';
        smallCircleLeft.style.animation =
          'smallCircleMoveRight 0.25s 1 ease-in-out';
        circleLeft.style.animation = 'circleLeftMoveRight 0.25s 1 ease-in-out';
        bigCircle.style.animation = 'bigCircleMoveRight 0.25s 1 ease-in-out';
        circleRight.style.animation =
          'circleRightMoveRight 0.25s 1 ease-in-out';
        smallCircleRight.style.animation = 'circleBack 0.25s 1 ease-in-out';

        if (portfolio === 0) {
          dispatch({ type: 'setPortfolio', payload: 26 });
        } else {
          dispatch({ type: 'setPortfolio', payload: portfolio - 1 });
        }
      }
      if (
        classList.contains(classes.ArrowRightContaner.split(' ')[0]) ||
        classList.contains(classes.ArrowRight)
      ) {
        setActive('right');
        const div = classList.contains(classes.ArrowRightContaner.split(' ')[0])
          ? e.target.parentElement.children
          : e.target.parentElement.parentElement.children;
        const [
          arrowLeft,
          backCircleLeft,
          smallCircleLeft,
          circleLeft,
          bigCircle,
          circleRight,
          smallCircleRight,
          backCircleRight,
          arrowRight,
        ] = Array.from(div);
        smallCircleLeft.style.animation = 'circleBack 0.25s 1 ease-in-out';
        circleLeft.style.animation = 'circleLeftMoveLeft 0.25s 1 ease-in-out';
        bigCircle.style.animation = 'bigCircleMoveLeft 0.25s 1 ease-in-out';
        circleRight.style.animation = 'circleRightMoveLeft 0.25s 1 ease-in-out';
        smallCircleRight.style.animation =
          'smallCircleMoveLeft 0.25s 1 ease-in-out';
        backCircleRight.style.animation = 'circleRightTop 0.25s 1 ease-in-out';

        if (portfolio === 26) {
          dispatch({ type: 'setPortfolio', payload: 0 });
        } else {
          dispatch({ type: 'setPortfolio', payload: portfolio + 1 });
        }
      }
    };
  } else {
    OnClickHeandler = (e) => {
      const classList = e.target.classList;
      if (
        classList.contains(classes.ArrowLeftContaner.split(' ')[0]) ||
        classList.contains(classes.ArrowLeft)
      ) {
        setActive('left');
        const div = classList.contains(classes.ArrowLeftContaner.split(' ')[0])
          ? e.target.parentElement.children
          : e.target.parentElement.parentElement.children;
        const [
          arrowLeft,
          backCircleLeft,
          smallCircleLeft,
          circleLeft,
          bigCircle,
          circleRight,
          smallCircleRight,
          backCircleRight,
          arrowRight,
        ] = Array.from(div);
        backCircleLeft.style.animation = 'circleLeftTop 0.25s 1 ease-in-out';
        smallCircleLeft.style.animation =
          'smallCircleMoveRight 0.25s 1 ease-in-out';
        circleLeft.style.animation = 'circleLeftMoveRight 0.25s 1 ease-in-out';
        bigCircle.style.animation = 'bigCircleMoveRight 0.25s 1 ease-in-out';
        circleRight.style.animation =
          'circleRightMoveRight 0.25s 1 ease-in-out';
        smallCircleRight.style.animation = 'circleBack 0.25s 1 ease-in-out';

        if (signature === 0) {
          dispatch({ type: 'setSignature', payload: 18 });
        } else {
          dispatch({ type: 'setSignature', payload: signature - 1 });
        }
      }
      if (
        classList.contains(classes.ArrowRightContaner.split(' ')[0]) ||
        classList.contains(classes.ArrowRight)
      ) {
        setActive('right');
        const div = classList.contains(classes.ArrowRightContaner.split(' ')[0])
          ? e.target.parentElement.children
          : e.target.parentElement.parentElement.children;
        const [
          arrowLeft,
          backCircleLeft,
          smallCircleLeft,
          circleLeft,
          bigCircle,
          circleRight,
          smallCircleRight,
          backCircleRight,
          arrowRight,
        ] = Array.from(div);
        smallCircleLeft.style.animation = 'circleBack 0.25s 1 ease-in-out';
        circleLeft.style.animation = 'circleLeftMoveLeft 0.25s 1 ease-in-out';
        bigCircle.style.animation = 'bigCircleMoveLeft 0.25s 1 ease-in-out';
        circleRight.style.animation = 'circleRightMoveLeft 0.25s 1 ease-in-out';
        smallCircleRight.style.animation =
          'smallCircleMoveLeft 0.25s 1 ease-in-out';
        backCircleRight.style.animation = 'circleRightTop 0.25s 1 ease-in-out';

        if (signature === 18) {
          dispatch({ type: 'setSignature', payload: 0 });
        } else {
          dispatch({ type: 'setSignature', payload: signature + 1 });
        }
      }
    };
  }

  const OnAnimationEndHeandler = (e) => {
    console.log('анимация закончилась');
    e.target.style.animation = '';
  };

  const OnTouchStartHeanler = (e) => {
    const firstTouch = e.touches[0];
    setX1(firstTouch.clientX);
    console.log(firstTouch.clientX);
  };

  const OnTouchMoveHeanler = (e) => {
    const firstTouch = e.touches[0];
    const X2 = firstTouch.clientX;
    setX2(firstTouch.clientX);
    console.log(firstTouch.clientX);
    const div = e.target.parentElement.children;
    const [
      arrowLeft,
      backCircleLeft,
      smallCircleLeft,
      circleLeft,
      bigCircle,
      circleRight,
      smallCircleRight,
      backCircleRight,
      arrowRight,
    ] = Array.from(div);
    // console.log(Math.abs(x1 - x2));
    if (!(x1 && X2)) {
      setX1(null);
      setX2(null);
      return;
    }
    if (x1 < X2) {
      setActive('left');
      backCircleLeft.style.animation = 'circleLeftTop 0.25s 1 ease-in-out';
      smallCircleLeft.style.animation =
        'smallCircleMoveRight 0.25s 1 ease-in-out';
      circleLeft.style.animation = 'circleLeftMoveRight 0.25s 1 ease-in-out';
      bigCircle.style.animation = 'bigCircleMoveRight 0.25s 1 ease-in-out';
      circleRight.style.animation = 'circleRightMoveRight 0.25s 1 ease-in-out';
      smallCircleRight.style.animation = 'circleBack 0.25s 1 ease-in-out';
      if (props.type === 'portfolio') {
        if (portfolio === 0) {
          dispatch({ type: 'setPortfolio', payload: 26 });
        } else {
          dispatch({ type: 'setPortfolio', payload: portfolio - 1 });
        }
      } else {
        if (signature === 0) {
          dispatch({ type: 'setSignature', payload: 18 });
        } else {
          dispatch({ type: 'setSignature', payload: signature - 1 });
        }
      }
    }
    if (x1 > X2) {
      setActive('right');
      smallCircleLeft.style.animation = 'circleBack 0.25s 1 ease-in-out';
      circleLeft.style.animation = 'circleLeftMoveLeft 0.25s 1 ease-in-out';
      bigCircle.style.animation = 'bigCircleMoveLeft 0.25s 1 ease-in-out';
      circleRight.style.animation = 'circleRightMoveLeft 0.25s 1 ease-in-out';
      smallCircleRight.style.animation =
        'smallCircleMoveLeft 0.25s 1 ease-in-out';
      backCircleRight.style.animation = 'circleRightTop 0.25s 1 ease-in-out';
      if (props.type === 'portfolio') {
        if (portfolio === 26) {
          dispatch({ type: 'setPortfolio', payload: 0 });
        } else {
          dispatch({ type: 'setPortfolio', payload: portfolio + 1 });
        }
      } else {
        if (signature === 18) {
          dispatch({ type: 'setSignature', payload: 0 });
        } else {
          dispatch({ type: 'setSignature', payload: signature + 1 });
        }
      }
    }
    setX1(null);
    setX2(null);
  };

  const OnTouchEndHeanler = (e) => {
    const div = e.target.parentElement.children;
    const [
      arrowLeft,
      backCircleLeft,
      smallCircleLeft,
      circleLeft,
      bigCircle,
      circleRight,
      smallCircleRight,
      backCircleRight,
      arrowRight,
    ] = Array.from(div);
    console.log(Math.abs(x1 - x2));
    if (!(x1 && x2)) {
      setX1(null);
      setX2(null);
      return;
    }
    // if (Math.abs(x1 - x2) <= 10) {
    //   setX1(null);
    //   setX2(null);
    //   return;
    // }
    if (x1 < x2) {
      backCircleLeft.style.animation = 'circleLeftTop 0.5s 1 ease-in-out';
      smallCircleLeft.style.animation =
        'smallCircleMoveRight 0.5s 1 ease-in-out';
      circleLeft.style.animation = 'circleLeftMoveRight 0.5s 1 ease-in-out';
      bigCircle.style.animation = 'bigCircleMoveRight 0.5s 1 ease-in-out';
      circleRight.style.animation = 'circleRightMoveRight 0.5s 1 ease-in-out';
      smallCircleRight.style.animation = 'circleBack 0.5s 1 ease-in-out';
      if (props.type === 'portfolio') {
        if (portfolio === 0) {
          dispatch({ type: 'setPortfolio', payload: 26 });
        } else {
          dispatch({ type: 'setPortfolio', payload: portfolio - 1 });
        }
      } else {
        if (signature === 0) {
          dispatch({ type: 'setSignature', payload: 18 });
        } else {
          dispatch({ type: 'setSignature', payload: signature - 1 });
        }
      }
    }
    if (x1 > x2) {
      smallCircleLeft.style.animation = 'circleBack 0.5s 1 ease-in-out';
      circleLeft.style.animation = 'circleLeftMoveLeft 0.5s 1 ease-in-out';
      bigCircle.style.animation = 'bigCircleMoveLeft 0.5s 1 ease-in-out';
      circleRight.style.animation = 'circleRightMoveLeft 0.5s 1 ease-in-out';
      smallCircleRight.style.animation =
        'smallCircleMoveLeft 0.5s 1 ease-in-out';
      backCircleRight.style.animation = 'circleRightTop 0.5s 1 ease-in-out';
      if (props.type === 'portfolio') {
        if (portfolio === 26) {
          dispatch({ type: 'setPortfolio', payload: 0 });
        } else {
          dispatch({ type: 'setPortfolio', payload: portfolio + 1 });
        }
      } else {
        if (signature === 18) {
          dispatch({ type: 'setSignature', payload: 0 });
        } else {
          dispatch({ type: 'setSignature', payload: signature + 1 });
        }
      }
    }
    setX1(null);
    setX2(null);
  };

  const arrow = require('../../../../img/Vector.png');
  return (
    <div
      onClick={(e) => {
        OnClickHeandler(e);
      }}
      onAnimationEnd={(e) => {
        OnAnimationEndHeandler(e);
      }}
      onTouchStart={(e) => {
        OnTouchStartHeanler(e);
      }}
      onTouchMove={(e) => {
        OnTouchMoveHeanler(e);
      }}
      onTouchEnd={(e) => {
        OnTouchEndHeanler(e);
      }}
      className={classes.PopUpArrow}
    >
      <div className={classes.ArrowLeftContaner}>
        <img src={arrow} className={classes.ArrowLeft} alt="arrow" />
      </div>

      <div className={classes.BackCircleLeft}></div>
      <div className={classes.SmallCircleLeft}></div>
      <div className={classes.CircleLeft}></div>
      <div className={classes.BigCircle}></div>
      <div className={classes.CircleRight}></div>
      <div className={classes.SmallCircleRight}></div>
      <div className={classes.BackCircleRight}></div>
      <div className={classes.ArrowRightContaner}>
        <img src={arrow} className={classes.ArrowRight} alt="arrow" />
      </div>
    </div>
  );
};

export default PopUpArrow;
