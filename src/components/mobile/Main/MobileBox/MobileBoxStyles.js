import { createUseStyles } from 'react-jss';

const MobileBoxStyles = createUseStyles({
  MobileBox: {
    width: (theme) => theme.width,
    height: (theme) => theme.height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(0deg, #FFFFFF, #FFFFFF), #174C38',
    border: (theme) => theme.border,
    borderRadius: 6,
    flexDirection: 'column',
    margin: (theme) => theme.margin,
    cursor: 'pointer',
    WebkitTouchCallout: 'none' /* iOS Safari */,
    WebkitUserSelect: 'none' /* Chrome/Safari/Opera */,
    KhtmlUserSelect: 'none' /* Konqueror */,
    MozUserSelect: 'none' /* Firefox */,
    msUserSelect: 'none' /* Internet Explorer/Edge */,
    userSelect: 'none',
  },
  MobileBoxText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MobileBoxTextText: {
    fontSize: 14,
    fontWeight: (theme) => theme.fontWeight,
    color: (theme) => theme.color,
    fontFamily: (theme) => theme.fontFamily,
    whiteSpace: 'nowrap',
    textAlign: 'center',
  },
  MobileBoxCash: {
    fontSize: 14,
    fontWeight: (theme) => theme.fontWeight,
    color: (theme) => theme.cashColor,
    marginLeft: 3,
  },
  MobileBoxDescript: {
    fontWeight: 400,
    fontSize: 12,
    marginTop: 2,
    color: (theme) => theme.color,
    fontFamily: 'SF-pro-regular',
  },
  MobileBoxTextTextTitle: {},
});

export default MobileBoxStyles;
