import { createUseStyles } from 'react-jss';

const MainTextStyles = createUseStyles({
  MainText: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  headText: {
    fontSize: 50,
    height: 60,
    whiteSpace: 'nowrap',
    fontWeight: 500,
    fontFamily: 'SF-pro-medium',
  },
  descriptionText: {
    marginTop: 25,
    height: 50,
    fontSize: 21,
    whiteSpace: 'nowrap',
    fontWeight: 300,
    color: (theme) => theme.color,
    fontFamily: 'SF-pro-light',
  },
});

export default MainTextStyles;
