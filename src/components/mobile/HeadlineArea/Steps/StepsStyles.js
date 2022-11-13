import { createUseStyles } from 'react-jss';

const StepsStyles = createUseStyles({
  Steps: {
    width: 199,
    height: 44,
    marginBottom: 14,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  Arrow: {
    color: 'white',
    fontSize: 10,
  },
});

export default StepsStyles;
