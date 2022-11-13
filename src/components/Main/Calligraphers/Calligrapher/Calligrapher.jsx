import CalligraphHead from './CallegraphHead/CallegraphHead';
import CalligraphBody from './CalligraphBody/CalligraphBody';
import CalligrapherStyles from './CalligrapherStyles';
import FormBar from './FormBar/FormBar';
import { useDispatch, useSelector } from 'react-redux';

const Calligrapher = (props) => {
  const calligrapher = useSelector((state) => state.options.calligrapher);
  const calligrapherCash = useSelector((state) => state.cash.calligrapher);
  const dispatch = useDispatch();
  let height, border, margin;
  border = calligrapher === props.type ? '2px solid #174C38' : 'none';
  margin = calligrapher === props.type ? 0 : 2;
  // border =
  //   calligrapher === props.type ? '2px solid inherit' : '2px solid transparent';
  // border = calligrapher === props.type ? true : false;
  height = props.popular ? 421 : 365;
  let colorBar, widthBar, placesBar, title, cash, marginLeft, marginRight, font;
  switch (props.type) {
    case 'base':
      colorBar = '#578F0F';
      widthBar = '36.148648648%';
      placesBar = '34';
      title = 'Calligrapher';
      cash = 39.99;
      marginLeft = '11.458333333%';
      marginRight = 0;
      font = 'SF-pro-light';
      break;
    case 'experienced':
      colorBar = '#BC8314';
      widthBar = '22.635135135%';
      placesBar = '21';
      title = 'Experienced Calligrapher';
      cash = 49.99;
      marginLeft = 0;
      marginRight = 0;
      font = 'SF-pro-regular';
      break;
    case 'head':
      colorBar = '#8F0F0F';
      widthBar = '4.729729729%';
      placesBar = '4';
      title = 'Head Calligrapher';
      cash = 79.99;
      marginLeft = 0;
      marginRight = '11.458333333%';
      font = 'SF-pro-medium';
      break;

    default:
      break;
  }

  // const OnClickHeandler = () => {
  //   dispatch({
  //     type: 'switchOption',
  //     payload: { key: 'calligrapher', value: props.type },
  //   });
  //   console.log(calligrapherCash);
  //   dispatch({
  //     type: 'removeCash',
  //     payload: calligrapherCash,
  //   });
  //   console.log(cash);
  //   if (typeof cash === 'number') {
  //     dispatch({
  //       type: 'addCash',
  //       payload: cash,
  //     });
  //   }
  //   if (typeof cash === 'number') {
  //     dispatch({
  //       type: 'changeCash',
  //       payload: { key: 'calligrapher', value: cash },
  //     });
  //   }
  // };

  const OnClickHeandler = () => {
    dispatch({
      type: 'switchOption',
      payload: {
        key: 'calligrapher',
        value: props.type,
      },
    });

    console.log(calligrapherCash);

    dispatch({
      type: 'removeCash',
      payload: calligrapherCash,
    });

    console.log(cash);

    dispatch({
      type: 'addCash',
      payload: cash,
    });

    console.log(cash);

    dispatch({
      type: 'changeCash',
      payload: {
        key: 'calligrapher',
        value: cash,
      },
    });
  };
  const classes = CalligrapherStyles({
    height,
    border,
    marginLeft,
    marginRight,
    margin,
  });
  return (
    <div className={classes.Calligrapher} onClick={OnClickHeandler}>
      <CalligraphHead title={title} cash={cash} popular={props.popular} />
      <CalligraphBody type={props.type} />
      <FormBar
        font={font}
        month={props.month}
        colorBar={colorBar}
        widthBar={widthBar}
        placesBar={placesBar}
      />
    </div>
  );
};

export default Calligrapher;
