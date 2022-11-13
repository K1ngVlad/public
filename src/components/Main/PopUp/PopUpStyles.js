import { createUseStyles } from 'react-jss';

const PopUpStyles = createUseStyles({
  PopUp: {
    position: (theme) => (theme.mobile && theme.height ? 'absolute' : 'fixed'),
    display: 'flex',
    alignItems: (theme) => (theme.mobile ? 'center' : 'flex-start'),
    justifyContent: 'center',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100%',
    paddingTop: (theme) =>
      theme.mobile
        ? 10
        : theme.popupHeight < 200
        ? 100
        : theme.height === 550
        ? theme.popupHeight > document.documentElement.clientHeight - 600
          ? document.documentElement.clientHeight - 550
          : theme.popupHeight
        : theme.height === 463
        ? theme.popupHeight > document.documentElement.clientHeight - 500
          ? document.documentElement.clientHeight - 463
          : theme.popupHeight
        : theme.popupHeight > document.documentElement.clientHeight - 259
        ? document.documentElement.clientHeight - 250
        : theme.popupHeight - 150,
    paddingBottom: (theme) => (theme.height ? 10 : 0),
    background: 'rgba(0, 0, 0, 0.5)',
  },
  PopUpCrossContainer: {
    height: 28,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: (theme) => (theme.mobile ? 10 : 18),
  },
  PopUpCross: {
    color: 'rgba(0, 0, 0, 0.25)',
    fontSize: (theme) => (theme.mobile ? 25 : 35),
    marginTop: (theme) => (theme.mobile ? 7 : 10),
    cursor: 'pointer',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  PopUpContainer: {
    width: (theme) => theme.width,
    background: 'linear-gradient(0deg, #F3F6F5, #F3F6F5), #FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 28,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
  },
  PopUpTitle: {
    fontSize: (theme) => theme.titleSize,
    color: '#174C38',
    fontFamily: 'SF-pro-medium',
    marginBottom: 10,
    marginLeft: (theme) => theme.marginLeft,
  },
  PopUpTitleSmall: {
    fontSize: 18,
    color: '#174C38',
    fontFamily: 'SF-pro-medium',
    marginBottom: 10,
    marginLeft: (theme) => theme.marginLeft,
  },
  PopUpTitleRel: {
    fontSize: 18,
    color: '#174C38',
    fontFamily: 'SF-pro-medium',
    marginBottom: 10,
    marginLeft: 25,
    position: 'absolute',
    bottom: '51%',
  },
  PopUpTextRel: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 16,
    fontFamily: 'SF-pro-light',
    marginLeft: 25,
    position: 'absolute',
    bottom: '46.5%',
    whiteSpace: 'nowrap',
  },
  PopUpRel: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  PopUpText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 16,
    fontFamily: 'SF-pro-light',
    marginLeft: (theme) => theme.marginLeft,
  },
  PopUpTextBlack: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'SF-pro-light',
    marginLeft: (theme) => theme.marginLeft,
  },
  Photos: {
    width: (theme) => (theme.mobile ? '82.677165354%' : 405),
    height: (theme) => (theme.mobile ? 'auto' : 322),
    // borderRadius: 8,
    // backgroundColor: 'gray',
    filter: 'drop-shadow(0px 1.97613px 4.83054px rgba(0, 0, 0, 0.25))',
    marginLeft: (theme) => theme.marginLeft,
    marginTop: 30,
  },
  SignatureContainer: {
    width: (theme) => (theme.mobile ? '100%' : 598),
    alignSelf: 'center',
    marginTop: 20,
  },
  Signature: {
    width: (theme) => (theme.mobile ? '79.921259842%' : '100%'),
    height: (theme) => (theme.mobile ? 'auto' : 160),
    marginLeft: (theme) => (theme.mobile ? theme.marginLeft : 0),
  },
  TextSignatureContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  TextBox: {},
  TextSighatureTitle: {
    fontSize: 21,
    fontFamily: 'SF-pro-medium',
    color: '#174C38',
    marginBottom: 11,
  },
  TextSignature: {
    fonstSize: 16,
    fontFamily: 'SF-pro-light',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  popUpClose: {
    fontSize: 12,
    color: 'rgba(1, 68, 136, 0.65)',
    textDecoration: 'underline',
    marginTop: 25,
    alignSelf: 'center',
  },
});

export default PopUpStyles;
