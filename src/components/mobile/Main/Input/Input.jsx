import { useDispatch, useSelector } from 'react-redux';
import InputStyles from './InputStyles';
import PhoneInput from 'react-phone-input-2';

const Input = (props) => {
  const { name, placeholder, form } = props;
  const value = useSelector((state) => state.options[name]);
  const emailValid = useSelector((state) => state.options.emailValid);
  const valid = useSelector((state) => state.options.valid);
  const validRed = useSelector((state) => state.options.validRed);
  // const backgroundColor =
  //   valid || value
  //     ? 'linear-gradient(0deg, #FFFFFF, #FFFFFF), #174C38'
  //     : '#FFB6C1';
  const dispatch = useDispatch();
  let OnBlurHeandler, border, background;
  border =
    !validRed || (name === 'emailAdress' ? emailValid : value)
      ? '1px solid rgba(0, 0, 0, 0.5)'
      : '1px solid #8F0F0F';
  background =
    !validRed || (name === 'emailAdress' ? emailValid : value)
      ? 'white'
      : 'rgba(205,92,92, 0.5)';
  const classes = InputStyles({ border, background, form });

  const OnChangeHeandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'switchOption',
      payload: {
        key: name,
        value: e.target.value,
      },
    });
  };
  // if (name === 'numberPhone') {
  //   return (
  //     <div className={classes.InputContainer}>
  //       <PhoneInput
  //         value={value}
  //         inputClass={classes.MobileInput}
  //         containerClass={classes.InputBox}
  //         onChange={(phone) => {
  //           dispatch({
  //             type: 'switchOption',
  //             payload: {
  //               key: name,
  //               value: phone,
  //             },
  //           });
  //         }}
  //       />
  //     </div>
  //   );
  // }
  // return (
  //   <div className={classes.InputContainer}>
  //     <input
  //       onChange={(e) => {
  //         OnChangeHeandler(e);
  //       }}
  //       placeholder={placeholder}
  //       className={classes.Input}
  //       defaultValue={value}
  //     />
  //   </div>
  // );

  // let OnBlurHeandler;

  switch (props.name) {
    case 'numberPhone':
      return (
        <div className={classes.InputContainer}>
          <PhoneInput
            placeholder={placeholder}
            inputClass={classes.MobileInput}
            containerClass={classes.InputBox}
            value={value}
            onChange={(phone) =>
              dispatch({
                type: 'switchOption',
                payload: {
                  key: props.name,
                  value: phone,
                },
              })
            }
          />
        </div>
      );
    case 'emailAdress':
      // border =
      //   !validRed || emailValid
      //     ? '1px solid rgba(0, 0, 0, 0.5)'
      //     : '1px solid #8F0F0F';
      // background = !validRed || emailValid ? 'white' : 'rgba(205,92,92, 0.5)';
      // classes = InputStyles({ border, background, form });
      OnBlurHeandler = (e) => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(String(e.target.value).toLowerCase().match(re));
        // String(e.target.value).toLowerCase().match(re);
        if (String(e.target.value).toLowerCase().match(re)) {
          dispatch({
            type: 'switchOption',
            payload: {
              key: 'error',
              value: 'Please fill all fields',
            },
          });
          dispatch({
            type: 'switchOption',
            payload: {
              key: 'emailValid',
              value: true,
            },
          });
        } else {
          dispatch({
            type: 'switchOption',
            payload: {
              key: 'error',
              value: 'Enter a valid email address',
            },
          });
          dispatch({
            type: 'switchOption',
            payload: {
              key: 'emailValid',
              value: false,
            },
          });
        }
      };
      return (
        <div className={classes.InputContainer}>
          <input
            // onBlur={(e) => {
            //   OnBlurHeandler(e);
            // }}
            onChange={(e) => {
              OnChangeHeandler(e);
              OnBlurHeandler(e);
            }}
            defaultValue={value}
            placeholder={placeholder}
            className={classes.Input}
          />
        </div>
      );

    case 'fullName':
      // border =
      //   !validRed || value
      //     ? '1px solid rgba(0, 0, 0, 0.5)'
      //     : '1px solid #8F0F0F';
      // background = !validRed || value ? 'white' : 'rgba(205,92,92, 0.5)';
      // classes = InputStyles({ border, background, form });
      OnBlurHeandler = (e) => {
        // const re = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;
        // const reCyrilic = /^[а-я]([-']?[а-я]+)*( [а-я]([-']?[а-я]+)*)+$/;
        // console.log(String(e.target.value).match(re));
        // String(e.target.value).toLowerCase().match(re);
        if (true) {
          dispatch({
            type: 'switchOption',
            payload: {
              key: 'nameValid',
              value: true,
            },
          });
        }
      };

      return (
        <div className={classes.InputContainer}>
          <input
            onChange={(e) => {
              OnChangeHeandler(e);
            }}
            onBlur={(e) => {
              OnBlurHeandler(e);
            }}
            defaultValue={value}
            placeholder={placeholder}
            className={classes.Input}
          />
        </div>
      );

    default:
      break;
  }
};

export default Input;
