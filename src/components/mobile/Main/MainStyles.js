import { createUseStyles } from 'react-jss';

const MainStyles = createUseStyles({
  Main: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90.625%',
    position: (theme) => (theme.popupFixed ? 'fixed' : 'static'),
    top: (theme) => -theme.siteHeight + 343,
  },
  MainTitle: {
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 10,
    fontFamily: 'SF-pro-medium',
  },
  MainText: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 25,
    color: (theme) => theme.color,
    width: (theme) => theme.width,
    fontFamily: 'SF-pro-light',
  },
  BotText: {
    width: 300,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 14,
    marginTop: 24,
    fontFamily: 'SF-pro-medium',
  },
  Payments: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  PaymentsImg: {
    height: 17,
    width: 'auto',
  },
  BackButton: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'SF-pro-medium',
    color: 'rgba(0, 0, 0, 0.36)',
    cursor: 'pointer',
    WebkitTouchCallout: 'none' /* iOS Safari */,
    WebkitUserSelect: 'none' /* Chrome/Safari/Opera */,
    KhtmlUserSelect: 'none' /* Konqueror */,
    MozUserSelect: 'none' /* Firefox */,
    msUserSelect: 'none' /* Internet Explorer/Edge */,
    userSelect: 'none',
  },
  BotTextLink: {
    color: 'rgb(1,68,136, 0.5)',
    textDecoration: 'underline',
  },
});

export default MainStyles;
