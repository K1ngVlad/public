import { useDispatch, useSelector } from 'react-redux';
import Button from '../Main/Button/Button';
import ExtraOptions from './ExtraOptions/ExtraOptions';
import InputFields from '../Main/InputFields/InputFields';
import ExtraButton from './ExtraButton/ExtraButton';
import FormStyles from './FormStyles';
import FormTitle from './FormTitle/FormTitle';
import MiniCheckboxes from './MiniCheckboxes/MiniCheckboxes';
import TotalCost from './TotalCost/TotalCost';

const Form = () => {
  const extraOptions = useSelector((state) => state.page.extraOptions);
  const error = useSelector((state) => state.options.error);
  const siteHeight = useSelector((state) => state.options.siteHeight);
  const classes = FormStyles();
  const valid = useSelector((state) => state.options.valid);
  const dispatch = useDispatch();
  const OnClickHeandler = (e) => {
    // console.log(e.target.classList.contains());
    if (
      e.target.classList.contains(classes.FormContainer) ||
      e.target.classList.contains(classes.FormCross)
    ) {
      dispatch({ type: 'changePage', payload: 2 });
      // window.scrollTo(0, siteHeight);
    }
  };
  return (
    <div
      onClick={(e) => {
        OnClickHeandler(e);
      }}
      className={classes.FormContainer}
    >
      <div className={classes.Form}>
        <div className={classes.FormCrossContainer}>
          <div className={classes.FormCross}>×</div>
        </div>

        <div className={classes.InputFieldsContainer}>
          <FormTitle />
          {valid ? '' : <div className={classes.FormValid}>{error}</div>}
          <InputFields margin={20.17} />
          <MiniCheckboxes
            name="contact"
            title="Сhoose where to contact you:"
            arr={[
              {
                value: 'Email',
                textValue: 'Email',
                cash: '',
              },
              {
                value: 'WhatsApp',
                textValue: 'WhatsApp',
                cash: '',
              },
            ]}
          />
          <MiniCheckboxes
            name="payment"
            title="Сhoose a payment method:"
            arr={[
              {
                value: 'Card / Apple pay / Google pay with Stripe',
                textValue: 'Card / Apple pay / Google pay with Stripe',
                cash: '',
              },
              {
                value: 'Pay with PayPal',
                textValue: 'Pay with PayPal',
                cash: '',
              },
            ]}
          />
          <ExtraButton />
          {extraOptions ? <ExtraOptions /> : ''}

          <TotalCost />
          <Button full={true} />
        </div>
      </div>
    </div>
  );
};

export default Form;
