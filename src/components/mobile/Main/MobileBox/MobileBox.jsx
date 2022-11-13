import { useDispatch, useSelector } from 'react-redux';
import MobileBoxStyles from './MobileBoxStyles';

const MobileBox = (props) => {
  const dispatch = useDispatch();
  const { width, height, title, cash, name, value, descript, payment } = props;
  const currentCash = useSelector((state) => state.cash[name]);
  const currentValue = useSelector((state) => state.options[name]);
  const cashPre = typeof cash === 'number' ? '+$' : '';

  let border, color, fontWeight, margin, fontFamily, cashColor;

  if (currentValue === value) {
    border = '3px solid #174C38';
    color = '#174C38';
    fontWeight = 700;
    margin = 0;
    fontFamily = 'SF-pro-bold';
    cashColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    border = '1px solid rgba(0, 0, 0, 0.5)';
    color = 'black';
    fontWeight = 400;
    margin = 2;
    fontFamily = 'SF-pro-regular';
    cashColor = 'rgba(23, 76, 56, 0.5)';
  }

  const classes = MobileBoxStyles({
    width,
    height,
    border,
    color,
    fontWeight,
    margin,
    fontFamily,
    cashColor,
  });

  const OnClickHeandler = () => {
    dispatch({ type: 'switchOption', payload: { key: name, value: value } });
    if (!cash) return;

    if (typeof currentCash === 'number') {
      dispatch({ type: 'removeCash', payload: currentCash });
    }

    if (typeof cash === 'number') {
      console.log(cash);
      dispatch({ type: 'addCash', payload: cash });
      dispatch({ type: 'changeCash', payload: { key: name, value: cash } });
    } else {
      dispatch({ type: 'changeCash', payload: { key: name, value: 0 } });
    }

    // if (!cash) return;
    // if (typeof currentValueCash === 'number') {
    //   dispatch({ type: 'removeCash', payload: currentValueCash });
    // }
    // if (typeof cash === 'number') {
    //   dispatch({ type: 'addCash', payload: cash });
    //   dispatch({ type: 'changeCash', payload: { key: name, value: cash } });
    // } else {
    //   dispatch({ type: 'changeCash', payload: { key: name, value: 0 } });
  };
  if (payment) {
    return (
      <div onClick={OnClickHeandler} className={classes.MobileBox}>
        <div className={classes.MobileBoxText}>
          <div className={classes.MobileBoxTextText}>
            Card / Apple pay /
            <br />
            Google pay with Stripe
          </div>
          {cash ? (
            <div className={classes.MobileBoxCash}>{`(${cashPre + cash})`}</div>
          ) : (
            ''
          )}
        </div>
        <div className={classes.MobileBoxDescript}>{descript}</div>
      </div>
    );
  }
  return (
    <div onClick={OnClickHeandler} className={classes.MobileBox}>
      <div className={classes.MobileBoxText}>
        <div className={classes.MobileBoxTextText}>{title}</div>
        {cash ? (
          <div className={classes.MobileBoxCash}>{`(${cashPre + cash})`}</div>
        ) : (
          ''
        )}
      </div>
      <div className={classes.MobileBoxDescript}>{descript}</div>
    </div>
  );
};

export default MobileBox;
