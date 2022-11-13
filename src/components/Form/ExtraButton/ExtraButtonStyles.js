import { createUseStyles } from 'react-jss';

const ExtraButtonStyles = createUseStyles({
  ExtraButton: {
    color: '#014488',
    fontSize: 28,
    fontWeight: 500,
    marginTop: 40,
    cursor: 'pointer',
    WebkitTouchCallout: 'none' /* iOS Safari */,
    WebkitUserSelect: 'none' /* Chrome/Safari/Opera */,
    KhtmlUserSelect: 'none' /* Konqueror */,
    MozUserSelect: 'none' /* Firefox */,
    msUserSelect: 'none' /* Internet Explorer/Edge */,
    userSelect: 'none',
    fontFamily: 'SF-pro-medium',
  },
  ExtraButtonArrow: {
    transform: (theme) => theme.rotate,
  },
});

export default ExtraButtonStyles;
