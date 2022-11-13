import { createUseStyles } from 'react-jss';

const StepStyles = createUseStyles({
  Step: {
    height: 66,
    width: 66,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: 30,
    // marginRight: 30,
    borderRadius: '50%',
    border: (theme) => theme.activeBorder,
    background: (theme) => theme.background,
  },
  StepNumber: {
    // width: 18,
    // height: 44,
    fontSize: 37,
    fontWeight: (theme) => theme.activeFontWeigth,
    color: (theme) => theme.activeFontColor,
    fontFamily: (theme) => theme.family,
  },
});

export default StepStyles;
