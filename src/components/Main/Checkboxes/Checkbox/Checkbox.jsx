import CheckboxStyles from './CheckboxStyles';
import { useDispatch, useSelector } from 'react-redux';

const Checkbox = (props) => {
  const { width, name, value, height, cash, descript } = props;
  const currentValue = useSelector((state) => state.options[name]);
  const currentValueCash = useSelector((state) => state.cash[name]);
  const extraText = typeof cash === 'number' ? '+$' : '';
  const dispatch = useDispatch();
  const OnClickHeandler = () => {
    console.log('работает');
    dispatch({ type: 'switchOption', payload: { key: name, value: value } });
    if (!cash) return;
    if (typeof currentValueCash === 'number') {
      dispatch({ type: 'removeCash', payload: currentValueCash });
    }
    if (typeof cash === 'number') {
      dispatch({ type: 'addCash', payload: cash });
      dispatch({ type: 'changeCash', payload: { key: name, value: cash } });
    } else {
      dispatch({ type: 'changeCash', payload: { key: name, value: 0 } });
    }
  };
  let border,
    borderInput,
    color,
    weight,
    background,
    margin,
    fontFamily,
    cashColor;
  if (currentValue === value) {
    border = '3px solid #174C38';
    borderInput = '2px solid #174C38';
    color = '#174C38';
    background = '#174C38';
    weight = 700;
    margin = 0;
    fontFamily = 'SF-pro-bold';
    cashColor = 'rgba(23,76,56, 0.5)';
  } else {
    border = '1px solid rgba(0, 0, 0, 0.5)';
    borderInput = 'none';
    color = 'black';
    background = 'none';
    weight = 400;
    margin = 2;
    fontFamily = 'SF-pro-regular';
    cashColor = 'rgba(0,0,0, 0.5)';
  }
  const classes = CheckboxStyles({
    width,
    name,
    value,
    height,
    border,
    color,
    background,
    weight,
    borderInput,
    margin,
    fontFamily,
    cashColor,
  });
  return (
    <div onClick={OnClickHeandler} className={classes.Checkbox}>
      <div className={classes.Box}>
        <div className={classes.BoxInput}></div>
      </div>
      <div className={classes.CheckboxText}>
        <div className={classes.CheckboxTextBox}>
          <div className={classes.CheckboxTextValue}> {value}</div>
          <div className={classes.CheckboxCash}>
            {cash ? `  (${extraText}${cash})` : ''}
          </div>
        </div>
        {descript ? (
          <div className={classes.CheckboxDescript}>{descript}</div>
        ) : (
          ''
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Checkbox;
