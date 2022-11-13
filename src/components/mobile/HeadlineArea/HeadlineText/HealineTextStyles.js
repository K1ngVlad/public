import { createUseStyles } from 'react-jss';

const HeadlineTextStyles = createUseStyles({
  HeadlineText: {
    marginBottom: 19,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  first: {
    color: 'white',
    fontSize: 32,
    fontWeight: 500,
    marginBottom: 15,
    textAlign: 'center',
    height: 76,
    width: 290,
    fontFamily: 'SF-pro-medium',
  },
  second: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    height: 21,
    fontFamily: 'SF-pro-light',
  },
});

export default HeadlineTextStyles;
