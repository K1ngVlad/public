import { createUseStyles } from 'react-jss';

const PopUpArrowStyles = createUseStyles({
  PopUpArrow: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 35,
    width: 194,
    cursor: 'pointer',
    position: 'relative',
    right: (theme) => (theme.mobile ? 5 : 5),
  },
  BigCircle: {
    width: 13,
    height: 13,
    backgroundColor: '#174C38',
    borderRadius: '50%',
    position: 'absolute',
    left: 96,
    animationPlayState: 'paused',
  },
  CircleLeft: {
    width: 9,
    height: 9,
    background: 'rgba(23, 76, 56, 0.5)',
    borderRadius: '50%',
    position: 'absolute',
    left: 70,
  },
  CircleRight: {
    width: 9,
    height: 9,
    background: 'rgba(23, 76, 56, 0.5)',
    borderRadius: '50%',
    position: 'absolute',
    left: 126,
  },
  SmallCircleRight: {
    width: 6,
    height: 6,
    background: 'rgba(23, 76, 56, 0.2)',
    borderRadius: '50%',
    position: 'absolute',
    left: 153,
  },
  SmallCircleLeft: {
    width: 6,
    height: 6,
    background: 'rgba(23, 76, 56, 0.2)',
    borderRadius: '50%',
    position: 'absolute',
    left: 47,
  },
  BackCircleLeft: {
    width: 3,
    height: 3,
    background: 'rgba(23, 76, 56, 0.0)',
    borderRadius: '50%',
    position: 'absolute',
    left: 47,
  },
  BackCircleRight: {
    width: 3,
    height: 3,
    background: 'rgba(23, 76, 56, 0.0)',
    borderRadius: '50%',
    position: 'absolute',
    left: 156,
  },
  ArrowLeftContaner: {
    height: 32,
    width: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    position: 'absolute',
    transition: '0.5s',
    background: (theme) =>
      theme.active === 'left'
        ? 'rgba(23, 76, 56, 0.2)'
        : 'rgba(23, 76, 56, 0.0)',
    '&:hover': {
      transition: '0.5s',
      background: (theme) =>
        theme.active === 'left'
          ? 'rgba(23, 76, 56, 0.3)'
          : 'rgba(23, 76, 56, 0.1)',
    },
  },
  ArrowRightContaner: {
    height: 32,
    width: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    position: 'absolute',
    transition: '0.5s',
    left: 173,
    background: (theme) =>
      theme.active === 'right'
        ? 'rgba(23, 76, 56, 0.2)'
        : 'rgba(23, 76, 56, 0.0)',
    '&:hover': {
      transition: '0.5s',
      background: (theme) =>
        theme.active === 'right'
          ? 'rgba(23, 76, 56, 0.3)'
          : 'rgba(23, 76, 56, 0.1)',
    },
  },

  ArrowLeft: {
    height: 15,
  },
  ArrowRight: {
    height: 15,
    transform: 'rotate(180deg)',
  },
});

export default PopUpArrowStyles;
