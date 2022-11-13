import { createUseStyles } from 'react-jss';

const CalligrapherBarStyles = createUseStyles({
  CalligrapherBarContainer: {
    marginBottom: 16,
    width: '88.275862069%',
    height: 22,
    border: '2px solid #174C38',
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  CalligrapherBar: {
    height: 14,
    marginLeft: 5,
    width: (theme) => theme.barWidth,
    backgroundColor: (theme) => theme.background,
    borderRadius: 3,
    // display: 'flex',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  CalligrapherBarText: {
    marginRight: '3.2%',
    fontSize: 9,
    fontFamily: 'SF-pro-light',
  },
});

export default CalligrapherBarStyles;
