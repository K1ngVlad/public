import { useDispatch, useSelector } from 'react-redux';
import MiniCheckboxesStyles from './MiniCheckboxStyles';

const MiniCheckbox = (props) => {
  const dispath = useDispatch();
  const { value, name, cash, textValue } = props;
  const currentValue = useSelector((state) => state.options[name]);
  const currentCash = useSelector((state) => state.cash[name]);
  const preCash = typeof cash === 'number' ? '+$' : '';
  let color, checkColor, weight, border, fontFamily;
  if (value === currentValue) {
    color = '#174C38';
    checkColor = '#174C38';
    weight = 600;
    border = '0.952381px solid #174C38';
    fontFamily = 'SF-pro-semibold';
  } else {
    color = 'rgba(0, 0, 0, 0.5)';
    checkColor = '';
    weight = 400;
    border = 'none';
    fontFamily = 'SF-pro-regular';
  }
  const OnCLickHeandler = () => {
    dispath({ type: 'switchOption', payload: { key: name, value: value } });
    if (!cash) return;
    if (typeof currentCash === 'number') {
      dispath({ type: 'removeCash', payload: currentCash });
    }
    if (typeof cash === 'number') {
      dispath({ type: 'addCash', payload: cash });
      dispath({ type: 'changeCash', payload: { key: name, value: cash } });
    } else {
      dispath({ type: 'changeCash', payload: { key: name, value: 0 } });
    }
  };
  const classes = MiniCheckboxesStyles({
    color,
    checkColor,
    weight,
    border,
    fontFamily,
  });
  return (
    <div onClick={OnCLickHeandler} className={classes.MiniCheckbox}>
      <div className={classes.MiniCheckboxBorder}>
        <div className={classes.MiniCheckboxBox}></div>
      </div>
      <div className={classes.MiniCheckboxText}>
        {textValue} {cash ? `(${preCash}${cash})` : ''}
      </div>
    </div>
  );
};

export default MiniCheckbox;
