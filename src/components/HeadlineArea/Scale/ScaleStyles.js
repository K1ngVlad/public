import { createUseStyles } from 'react-jss';

const ScaleStyles = createUseStyles({
  Scale: {
    marginBottom: 53,
    // height: 45,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  info: {
    // width: 75,
    height: 25,
    marginBottom: 20,
    fontSize: 21,
    whiteSpace: 'nowrap',
    color: 'white',
    fontWeight: 300,
    fontFamily: 'SF-pro-light',
  },
  line: {
    width: 350,
    height: 2,
    display: 'flex',
  },
});

export default ScaleStyles;
