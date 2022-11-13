import { createUseStyles } from 'react-jss';

const InputStyles = createUseStyles({
  InputContainer: {
    height: 55,
    // width: (theme) => (theme.form ? 270 : 310),
    width: '100%',
    marginBottom: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  Input: {
    background: (theme) => theme.background,
    border: (theme) => theme.border,
    /* Убираем влияние padding и border на конечную ширину input */
    boxSizing: 'border-box',
    /* Обнуляем margin */
    margin: 0,
    height: '100%',
    width: '100%',
    transition: '0.5s',
    fontFamily: 'SF-pro-regular',
    fontSize: 16,
    borderRadius: 6,
    textAlign: 'center',
    padding: 0,
    '&::placeholder': {
      color: 'rgba(0, 0, 0, 0.25)',
      fontFamily: 'SF-pro-light',
      fontSize: 14,
    },
  },
  MobileInput: {
    height: '100%',
    transition: '0.25s',
    width: '100%',
    /* Убираем влияние padding и border на конечную ширину input */
    boxSizing: 'border-box',
    /* Обнуляем margin */
    padding: 0,
    margin: 0,
    background: (theme) => theme.background,
    border: (theme) => theme.border,
    borderRadius: 6,
    fontSize: 16,
    textAlign: 'center',
    '&::placeholder': {
      color: 'rgba(0, 0, 0, 0.25)',
      fontFamily: 'SF-pro-light',
      fontSize: 14,
    },
  },

  InputBox: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// const InputStyles = createUseStyles({
//   InputContainer: {
//     width: '100%',
//     height: 76,
//     marginBottom: (theme) => theme.marginBottom,
//   },
//   Input: {
//     width: '100%',
//     height: '100%',
//     border: '1px solid rgba(0, 0, 0, 0.5)',
//     borderRadius: 10,
//     fontSize: 21,
//     textAlign: 'center',
//   },
//   InputBox: {
//     width: '100%',
//     height: '100%',
//   },
// });

export default InputStyles;
