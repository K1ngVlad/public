import { createUseStyles } from 'react-jss';

const OptionFormStyles = createUseStyles({
  OptionForm: {
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
  },
  OptionFormTitle: {
    fontSize: 28,
    fontWeight: 500,
    marginTop: 33,
    marginBottom: (theme) => theme.margin,
    fontFamily: 'SF-pro-medium',
  },
  OptionFormDescript: {
    marginBottom: 15,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'SF-pro-medium',
  },
  OptionFormLink: {
    marginTop: 20,
    marginBottom: 31,
    fontSize: 16,
    fontFamily: 'SF-pro-light',
    color: 'rgba(1, 68, 136, 0.65)',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});

export default OptionFormStyles;
