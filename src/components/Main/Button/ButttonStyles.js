import { createUseStyles } from 'react-jss';

const ButtonStyles = createUseStyles({
  ButtonContainer: {
    marginTop: 40,
    width: '100%',
    height: 76,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  ButtonBox: {
    height: '100%',
    width: (theme) => (theme.full ? '100%' : 350),
  },
  Button: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, #174C38 0%, #093D29 100%)',
    fontSize: 21,
    fontWeight: 500,
    color: 'white',
    borderRadius: 10,
    border: 'none',
    boxShadow: '0px 2px 1px #04140E',
    // boxShadow: (theme) => theme.boxShadow,
    cursor: 'pointer',
    fontFamily: 'SF-pro-medium',
    '&:active': {
      boxShadow: 'none',
    },
  },
  Arrow: {
    fontSize: 17,
    marginLeft: 5,
  },
});

export default ButtonStyles;
