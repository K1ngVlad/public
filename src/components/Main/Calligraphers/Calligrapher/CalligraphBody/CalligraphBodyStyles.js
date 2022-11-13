import { createUseStyles } from 'react-jss';

const CalligraphBodyStyles = createUseStyles({
  CalligraphBody: {
    width: '100%',
    marginBottom: 43,
  },
  CalligraphBodyLine: {
    marginBottom: 18,
    width: 296,
    border: '1px solid rgba(0, 0, 0, 0.1)',
  },
  CalligraphBodyTextContainer: {
    display: 'flex',
    // justifyContent: 'space-between',
  },
  CalligraphBodyCheck: {
    marginLeft: 27,
    width: 19,
    height: 19,
  },
  CalligraphBodyCheckImg: {
    width: 'auto',
    height: '100%',
  },
});

export default CalligraphBodyStyles;
