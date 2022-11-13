import { createUseStyles } from 'react-jss';

const StepStyles = createUseStyles({
  Step: {
    height: 37,
    width: 37,
    border: (theme) => theme.border,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: (theme) => theme.background,
  },
  StepNum: {
    fontSize: 18,
    fontWeight: (theme) => theme.fontWeight,
    color: (theme) => theme.color,
    fontFamily: (theme) => theme.fontFamily,
  },
});

export default StepStyles;
