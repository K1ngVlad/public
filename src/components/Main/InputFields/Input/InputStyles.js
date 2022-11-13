import { createUseStyles } from 'react-jss';

const InputStyles = createUseStyles({
  InputContainer: {
    width: '100%',
    height: 76,
    marginBottom: (theme) => theme.marginBottom,

    borderRadius: 10,
    // backgroundColor: 'white',
  },
  Input: {
    width: '99.3%',
    height: '100%',
    backgroundColor: (theme) => theme.background,
    border: (theme) => theme.border,
    borderRadius: 10,
    textAlign: 'center',
    transition: '0.25s',
    fontSize: 28,
    fontFamily: 'SF-pro-regular',
    '&::placeholder': {
      fontFamily: 'SF-pro-light',
      fontWeight: 300,
      fontSize: 21,
      color: 'rgba(0, 0, 0, 0.25)',
    },
    '&::-webkit-contacts-auto-fill-button': {
      display: 'none',
    },
  },
  InputBox: {
    width: '100%',
    height: '100%',
  },
});

export default InputStyles;
