import { createUseStyles } from 'react-jss';

const CheckboxStyles = createUseStyles({
  Checkbox: {
    height: '100%',
    width: (theme) => theme.width,
    border: (theme) => theme.border,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: (theme) => theme.margin,
    cursor: 'pointer',
    backgroundColor: 'white',
    WebkitTouchCallout: 'none' /* iOS Safari */,
    WebkitUserSelect: 'none' /* Chrome/Safari/Opera */,
    KhtmlUserSelect: 'none' /* Konqueror */,
    MozUserSelect: 'none' /* Firefox */,
    msUserSelect: 'none' /* Internet Explorer/Edge */,
    userSelect: 'none',
  },
  Box: {
    // marginLeft: (theme) => theme.height * 0.22368421052,
    margin: (theme) => theme.margin,
    marginLeft: (theme) => theme.margin + 17,
    width: (theme) => theme.height * 0.55263157894,
    height: (theme) => theme.height * 0.55263157894,
    border: (theme) => theme.border,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BoxInput: {
    width: '50%',
    height: '50%',
    background: (theme) => theme.background,
    border: (theme) => theme.borderInput,
    borderRadius: 50,
  },
  CheckboxText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  CheckboxCash: {
    fontSize: 21,
    fontWeight: (theme) => theme.weight,
    color: (theme) => theme.cashColor,
    // opacity: 0.5,
    marginLeft: 3,
    fontFamily: (theme) => theme.fontFamily,
  },
  CheckboxTextValue: {
    fontSize: 21,
    fontWeight: (theme) => theme.weight,
    color: (theme) => theme.color,
    fontFamily: (theme) => theme.fontFamily,
  },
  CheckboxTextBox: {
    display: 'flex',
  },
  CheckboxDescript: {
    marginTop: 2,
    fontSize: 12,
    color: '#174C38',
    fontFamily: 'SF-pro-light',
  },
});

export default CheckboxStyles;
