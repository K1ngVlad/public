import { createUseStyles } from 'react-jss';

const CalligraphHeadStyles = createUseStyles({
  CalligraphHead: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  CalligraphTitle: {
    fontSize: 28,
    fontWeight: 500,
    width: '95%',
    textAlign: 'center',
    fontFamily: 'SF-pro-medium',
  },

  CalligraphPopularContainer: {
    marginBottom: 24,
    width: '100%',
    height: 37,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#174C38',
    border: '2px solid #174C38',
    borderRadius: 6,
  },
  CalligraphPopular: {
    fontSize: 21,
    fontWeight: 600,
    color: 'white',
    fontFamily: 'SF-pro-medium',
  },
});

export default CalligraphHeadStyles;
