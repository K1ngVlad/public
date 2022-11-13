import CashTabel from '../../../CashTabel/CashTabel';
import CalligrapherBar from './CalligrapherBar/CalligrapherBar';
import CalligrapherBody from './CalligrapherBody/CalligrapherBody';
import CalligrapherStyles from './CalligrapherStyles';
import { useDispatch, useSelector } from 'react-redux';

const Calligrapher = (props) => {
  const month = props.month;
  const dispatch = useDispatch();
  const currentType = useSelector((state) => state.options.calligrapher);
  const currentCash = useSelector((state) => state.cash.calligrapher);
  const type = props.type;
  let title, cash, text, places, background, barWidth, height;
  switch (type) {
    case 'base':
      title = 'Calligrapher';
      cash = 39.99;
      places = '34';
      background = '#578F0F';
      barWidth = '57.6%';
      height = 150;

      break;
    case 'experienced':
      title = 'Experienced Calligrapher';
      cash = 49.99;
      height = 250;

      places = '21';
      background = '#BC8314';
      barWidth = '26.8%';
      break;
    case 'head':
      title = 'Head Calligrapher';
      cash = 79.99;
      height = 170;

      places = '4';
      background = '#8F0F0F';
      barWidth = '5.6%';
      break;
    default:
  }
  const border = type === currentType ? '3px solid #174C38' : 'none';
  const margin = type === currentType ? 7 : 10;

  const OnClickHeandler = () => {
    dispatch({
      type: 'switchOption',
      payload: {
        key: 'calligrapher',
        value: type,
      },
    });

    console.log(currentCash);

    dispatch({
      type: 'removeCash',
      payload: currentCash,
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

  const classes = CalligrapherStyles({ border, height, margin });
  return (
    <div onClick={OnClickHeandler} className={classes.Calligrapher}>
      {type === 'experienced' ? (
        <div className={classes.CalligrapherPopular}>
          <div className={classes.CalligrapherPopularText}>Most Popular</div>
        </div>
      ) : (
        ''
      )}
      <div className={classes.CalligrapherHead}>
        <div className={classes.CalligrapherTitle}>{title}</div>
        <CashTabel
          cash={cash}
          propertys={{
            color: '#174C38',
            cashSize: 32,
            iconSize: 18,
            topIcon: 2,
            height: 32,
            fontFamily: 'SF-pro-medium',
            fontIcon: 'SF-pro-regular',
          }}
        />
      </div>
      <div className={classes.CalligraphLine}></div>
      <CalligrapherBody type={type} text={text} />
      <CalligrapherBar
        places={places}
        background={background}
        barWidth={barWidth}
        month={month}
      />
    </div>
  );
};

export default Calligrapher;
