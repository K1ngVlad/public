import { createUseStyles } from 'react-jss';

const TabelBodyStyles = createUseStyles({
  TabelBody: {
    marginBottom: 19,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '85.393258427%',
  },
  TabelLine: {
    marginBottom: 18,
    width: '100%',
    border: '1px solid rgba(0, 0, 0, 0.1)',
  },
  TabelTextContainer: {
    display: 'flex',
    marginTop: 10,
  },
  TabelIcon: {
    display: 'flex',
    width: 40,
  },
  TabelIconImg: {
    width: '100%',
    height: 'auto',
  },
  TabelText: {
    fontSize: 21,
    // height: 50,
    color: 'black',
    width: (theme) => theme.textWidth,
    fontFamily: 'SF-pro-light',
  },
  TabelIconBox: {
    width: 19,
    height: 19,
    marginLeft: 10,
    // marginRight: '22.47191011%',
  },
  TabelLink: {
    marginTop: 20,
    textAlign: 'center',
    height: 19,
    fontSize: 16,
    fontFamily: 'SF-pro-light',
    color: 'rgba(1, 68, 136, 0.65)',
    textDecoration: 'underline',
  },
});

export default TabelBodyStyles;
