import { createUseStyles } from 'react-jss';

const FormStyles = createUseStyles({
  Form: {
    width: '37.5%',
    minWidth: 500,
    background: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    // height: 1016,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // marginTop: 1660,
    // marginBottom: 148,
    paddingBottom: 89.93,
  },
  FormCrossContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    height: 0,
  },
  FormCross: {
    fontSize: 60,
    marginRight: 30,
    color: 'rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
    WebkitTouchCallout: 'none' /* iOS Safari */,
    WebkitUserSelect: 'none' /* Chrome/Safari/Opera */,
    KhtmlUserSelect: 'none' /* Konqueror */,
    MozUserSelect: 'none' /* Firefox */,
    msUserSelect: 'none' /* Internet Explorer/Edge */,
    userSelect: 'none',
  },
  FormValid: {
    color: '#8F0F0F',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 21,
    fontFamily: 'SF-pro-light',
  },
  FormContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'relative',
    paddingTop: 100,
    paddingBottom: 100,
  },
  InputFieldsContainer: {
    width: '75.925925925%',
  },
});

export default FormStyles;
