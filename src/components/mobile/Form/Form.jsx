import { useDispatch, useSelector } from 'react-redux';
import CashTabel from '../../CashTabel/CashTabel';
import Button from '../Main/Button/Button';
import ContactForm from '../Main/ContactForm/ContactForm';
import Input from '../Main/Input/Input';
import MobileBox from '../Main/MobileBox/MobileBox';
import ExtraOptions from './ExtraOptions/ExtraOptions';
import FormStyles from './FormStyles';

const Form = () => {
  const cash = useSelector((state) => state.cash.cash);
  const { extraOptions, page } = useSelector((state) => state.page);
  const transform = extraOptions ? 'rotate(90deg)' : 'rotate(0deg)';
  const error = useSelector((state) => state.options.error);
  const valid = useSelector((state) => state.options.valid);
  const img = require('../../../img/Arrow.png');
  const dispatch = useDispatch();
  const classes = FormStyles({ transform });
  const OnClickHeandler = () => {
    dispatch({ type: 'switchExtra' });
  };
  const OnClickHeandlerCross = () => {
    dispatch({
      type: 'switchOption',
      payload: {
        key: 'valid',
        value: true,
      },
    });
    dispatch({ type: 'changePage', payload: page - 1 });
  };
  console.log(valid);
  return (
    <div className={classes.Form}>
      <div className={classes.FromContainer}>
        <div className={classes.FormCrossContainer}>
          {/* <img img={img} alt="cross" className={classes.FormCross} /> */}
          <div onClick={OnClickHeandlerCross} className={classes.FormCross}>
            ×
          </div>
        </div>
        <div className={classes.FormTitle}>Confirm your information</div>
        {valid ? '' : <div className={classes.FormValid}>{error}</div>}
        <Input form={true} placeholder="Your full name" name="fullName" />
        <Input
          form={true}
          placeholder="+1 (999) 999-99-99"
          name="numberPhone"
        />
        <Input
          form={true}
          placeholder="Type your Email adress"
          name="emailAdress"
        />
        <ContactForm form={true} text="Сhoose a payment method:" />
        <div className={classes.PaymentTitle}>Сhoose a payment method:</div>
        <div className={classes.FormPayment}>
          <MobileBox
            width="100%"
            title="Card / Apple pay / Google pay with Stripe"
            payment={true}
            cash=""
            name="payment"
            value="Card / Apple pay / Google pay with Stripe"
            height={55}
          />
          <MobileBox
            width="100%"
            title="Pay with PayPal"
            cash=""
            name="payment"
            value="Pay with PayPal"
            height={55}
          />
        </div>
        <div onClick={OnClickHeandler} className={classes.ExtraButton}>
          Your extra options
          <img className={classes.FormArrow} alt="arrow" src={img} />
          {/* {extraOptions ? 'ᐯ' : 'ᐳ'} */}
        </div>
        {extraOptions ? <ExtraOptions /> : ''}

        <div className={classes.TotalCost}>
          <div className={classes.TotalCostText}>Total cost:</div>
          <CashTabel
            cash={cash}
            propertys={{
              cashSize: 32,
              iconSize: 12,
              color: '#174C38',
              height: 32,
              topIcon: 5,
              fontFamily: 'SF-pro-semibold',
              fontIcon: 'SF-pro-medium',
            }}
          />
          <CashTabel
            cash={cash}
            propertys={{
              cashSize: 18,
              iconSize: 7,
              color: 'black',
              height: 18,
              topIcon: 2,
              cross: true,
              fontFamily: 'SF-pro-regular',
              fontIcon: 'SF-pro-medium',
            }}
          />
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Form;
