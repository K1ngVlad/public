import { useDispatch } from 'react-redux';
import BotItemsStyles from './BotItemsStyles';

const BotItems = () => {
  const dispatch = useDispatch();
  const firstImg = require('../../../img/payments 2.png');
  const secondImg = require('../../../img/payments 3.png');
  const classes = BotItemsStyles();
  const OnClickHeandler = () => {
    dispatch({ type: 'changePage', payload: 1 });
    window.scrollTo(0, 0);
  };
  return (
    <div className={classes.BotItems}>
      <div className={classes.BotText}>
        By clicking the button, you agree to our{' '}
        <a href='https://mysign-studio.com/policy' className={classes.BotTextLink}>privacy policy</a>,
        <a href='https://mysign-studio.com/refund_policy' className={classes.BotTextLink}>refund policy</a> and{' '}
        <a href='https://mysign-studio.com/terms_of_service' className={classes.BotTextLink}>terms of service</a>
      </div>
      <div className={classes.BotPayments}>
        <img alt="img" src={firstImg} />
        <img alt="img" src={secondImg} />
      </div>
      <div onClick={OnClickHeandler} className={classes.BotBack}>
        ᐸ Back
      </div>
    </div>
  );
};

export default BotItems;
