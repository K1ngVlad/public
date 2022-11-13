import { createUseStyles } from 'react-jss';

const CalligrapherBodyStyles = createUseStyles({
  CalligrapherBody: {
    width: '90%',
    display: 'flex',
    marginBottom: 15,
    // justifyContent: 'center',
  },
  CalligrapherIcon: {
    width: 16,
    height: 16,
    // marginLeft: 10,
  },
  CalligrapherText: {
    fontSize: 14,
    marginLeft: 5,
    fontFamily: 'SF-pro-light',
    // whiteSpace: '',
  },
});

export default CalligrapherBodyStyles;
