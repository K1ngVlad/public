import { useDispatch, useSelector } from 'react-redux';
import InputStyles from './InputStyles';
import PhoneInput from 'react-phone-input-2';
import './Input.css';

const Input = (props) => {
  const marginBottom = props.margin;
  const validRed = useSelector((state) => state.options.validRed);
  const emailValid = useSelector((state) => state.options.emailValid);
  const currentValue = useSelector((state) => state.options[props.name]);
  const dispatch = useDispatch();
  const name = props.name;

  const OnChangeHeandler = (e) => {
    console.log(e.target.value);
    dispatch({
      type: 'switchOption',
      payload: {
        key: name,
        value: e.target.value,
      },
    });
    if (name === 'emailAdress') {
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
    }
  };

  let OnBlurHeandler, border, background;

  console.log(validRed);

  border =
    !validRed || (name === 'emailAdress' ? emailValid : currentValue)
      ? '1px solid rgba(0, 0, 0, 0.5)'
      : '1px solid #8F0F0F';
  background =
    !validRed || (name === 'emailAdress' ? emailValid : currentValue)
      ? 'white'
      : 'rgba(205,92,92, 0.5)';
  const classes = InputStyles({ border, background, marginBottom });

  switch (props.name) {
    case 'numberPhone':
      return (
        <div className={classes.InputContainer}>
          <PhoneInput
            placeholder={props.text}
            inputClass={classes.Input}
            containerClass={classes.InputBox}
            value={currentValue}
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
      OnBlurHeandler = (e) => {};
      return (
        <div className={classes.InputContainer}>
          <input
            onBlur={(e) => {
              OnBlurHeandler(e);
            }}
            onChange={(e) => {
              OnChangeHeandler(e);
            }}
            defaultValue={currentValue}
            placeholder={props.text}
            className={classes.Input}
          />
        </div>
      );

    case 'fullName':
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
        } else {
          dispatch({
            type: 'switchOption',
            payload: {
              key: 'nameValid',
              value: false,
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
            defaultValue={currentValue}
            placeholder={props.text}
            className={classes.Input}
          />
        </div>
      );

    default:
      break;
  }
};

export default Input;
