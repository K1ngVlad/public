import { createUseStyles } from 'react-jss';

const StepsStyles = createUseStyles({
  Steps: {
    width: 350,
    height: 66,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  StepArrow: {
    color: 'white',
    // marginLeft: 30.25,
    width: 16.45,
  },
});

export default StepsStyles;
