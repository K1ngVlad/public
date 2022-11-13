import { useDispatch, useSelector } from 'react-redux';
import ExtraButtonStyles from './ExtraButtonStyles';

const ExtraButton = () => {
  const dispatch = useDispatch();
  const extraOptions = useSelector((state) => state.page.extraOptions);
  const img = require('../../../img/Arrow.png');
  const rotate = extraOptions ? 'rotate(90deg)' : 'none';
  const classes = ExtraButtonStyles({ rotate });
  const OnClickHeandler = () => {
    dispatch({ type: 'switchExtra' });
  };
  return (
    <div onClick={OnClickHeandler} className={classes.ExtraButton}>
      Your extra option{' '}
      <img alt="arrow" className={classes.ExtraButtonArrow} src={img} />
    </div>
  );
};

export default ExtraButton;
