import { createUseStyles } from 'react-jss';

const CalligrapherStyles = createUseStyles({
  Calligrapher: {
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: 6,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: (theme) => theme.border,
    margin: (theme) => theme.margin,
    cursor: 'pointer',
    WebkitTouchCallout: 'none' /* iOS Safari */,
    WebkitUserSelect: 'none' /* Chrome/Safari/Opera */,
    KhtmlUserSelect: 'none' /* Konqueror */,
    MozUserSelect: 'none' /* Firefox */,
    msUserSelect: 'none' /* Internet Explorer/Edge */,
    userSelect: 'none',
  },
  // CalligrapherContainer: {
  //   width: '100%',
  //   marginBottom: 20,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: (theme) => theme.height,
  // },
  CalligrapherHead: {
    width: '88.275862069%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  CalligrapherTitle: {
    fontWeight: 500,
    fontSize: 18,
    width: 100,
    fontFamily: 'SF-pro-medium',
  },
  CalligraphLine: {
    marginTop: 7,
    marginBottom: 17,
    width: '88.275862069%',
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  CalligrapherPopular: {
    marginTop: 15,
    width: '88.275862069%',
    backgroundColor: '#174C38',
    border: '2px solid #174C38',
    borderRadius: 3,
    height: 33,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CalligrapherPopularText: {
    fontSize: 14,
    fontWeigth: 600,
    color: 'white',
    fontFamily: 'SF-pro-semibold',
  },
});

export default CalligrapherStyles;
