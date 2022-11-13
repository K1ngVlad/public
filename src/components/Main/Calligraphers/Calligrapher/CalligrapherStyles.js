import { createUseStyles } from 'react-jss';

const CalligrapherStyles = createUseStyles({
  Calligrapher: {
    width: 350,
    // minWidth: 320,
    // width: 350,
    minHeight: (theme) => theme.height,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    boxShadow: ' 0px 4px 10px rgba(0, 0, 0, 0.25)',
    border: (theme) => theme.border,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // justifyContent: 'flex-end',
    // marginLeft: (theme) => theme.marginLeft,
    // marginRight: (theme) => theme.marginRight,
    paddingTop: 20,
    margin: (theme) => theme.margin,
    cursor: 'pointer',
    WebkitTouchCallout: 'none' /* iOS Safari */,
    WebkitUserSelect: 'none' /* Chrome/Safari/Opera */,
    KhtmlUserSelect: 'none' /* Konqueror */,
    MozUserSelect: 'none' /* Firefox */,
    msUserSelect: 'none' /* Internet Explorer/Edge */,
    userSelect: 'none',
  },
});

export default CalligrapherStyles;
