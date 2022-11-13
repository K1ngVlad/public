import { createUseStyles } from 'react-jss';

const MiniCheckboxesStyles = createUseStyles({
  MiniCheckbox: {
    marginTop: 15,
    display: 'flex',
    height: 20,
    cursor: 'pointer',
    WebkitTouchCallout: 'none' /* iOS Safari */,
    WebkitUserSelect: 'none' /* Chrome/Safari/Opera */,
    KhtmlUserSelect: 'none' /* Konqueror */,
    MozUserSelect: 'none' /* Firefox */,
    msUserSelect: 'none' /* Internet Explorer/Edge */,
    userSelect: 'none',
  },
  MiniCheckboxBorder: {
    height: 20,
    width: 20,
    border: '0.952381px solid #174C38',
    borderRadius: 14.2857,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MiniCheckboxBox: {
    height: 12,
    width: 12,
    backgroundColor: (theme) => theme.checkColor,
    border: (theme) => theme.border,
    borderRadius: '100%',
  },
  MiniCheckboxText: {
    marginLeft: 10,
    fontSize: 21,
    height: 25,
    color: (theme) => theme.color,
    fontWeight: (theme) => theme.weight,
    whiteSpace: 'nowrap',
    fontFamily: (theme) => theme.fontFamily,
  },
});

export default MiniCheckboxesStyles;
