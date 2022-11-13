import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PopUp from '../../Main/PopUp/PopUp.jsx';
import Button from './Button/Button.jsx';
import Calligrapher from './Calligrapher/Calligrapher.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import ExtraOptions from './ExtraOptions/ExtraOptions.jsx';
import Input from './Input/Input';
import MainStyles from './MainStyles';
import TableForm from './TableForm/TableForm.jsx';

const Main = () => {
  const page = useSelector((state) => state.page.page);
  const error = useSelector((state) => state.options.error);
  const { popup, title, popupFixed, siteHeight } = useSelector(
    (state) => state.popup
  );
  const { valid, emailAdress, fullName, numberPhone, emailValid } = useSelector(
    (state) => state.options
  );
  const width = 290;

  useEffect(() => {
    console.log(!popupFixed && siteHeight);
    if (!popupFixed && siteHeight) {
      window.scrollTo(0, siteHeight);
      dispatch({ type: 'setHeight', payload: 0 });
    }
  }, [popupFixed]);

  const date = new Date();
  const numMonth = date.getMonth();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[numMonth];
  const text =
    valid || (emailValid && fullName && numberPhone)
      ? 'Fill in your contact data and your personal manager will contact you to get started'
      : error;
  const color =
    valid || (emailValid && fullName && numberPhone) ? 'black' : '#8F0F0F';
  const dispatch = useDispatch();
  const firstImg = require('../../../img/payments 2.png');
  const secondImg = require('../../../img/payments 3.png');
  const classes = MainStyles({ color, width, popupFixed, siteHeight });
  const OnClickHeandler = () => {
    dispatch({ type: 'changePage', payload: page - 1 });
  };

  if (page === 2) {
    return (
      <div className={classes.Main}>
        <div className={classes.MainTitle}>Choose your Calligrapher</div>
        <div className={classes.MainText}>
          We're a small team of passionate artists.
          <br />
          Absolutely all of our calligraphers are real professionals, but we
          want to offer
          <br />
          to choose their level
        </div>
        <Calligrapher type="base" month={month} />
        <Calligrapher type="experienced" month={month} />
        <Calligrapher type="head" month={month} />
        <ExtraOptions months={months} />
        <TableForm quanity={1} />
        <TableForm quanity={2} />
        <Button />
        <div className={classes.BotText}>
          By clicking the button, you agree to our{' '}
          <a
            href="https://mysign-studio.com/policy"
            className={classes.BotTextLink}
          >
            privacy <br /> policy
          </a>
          ,
          <a
            href="https://mysign-studio.com/refund_policy"
            className={classes.BotTextLink}
          >
            refund policy
          </a>{' '}
          and{' '}
          <a
            href=" https://mysign-studio.com/terms_of_service"
            className={classes.BotTextLink}
          >
            terms of service
          </a>
        </div>
        <div className={classes.Payments}>
          <img className={classes.PaymentsImg} alt="logo" src={firstImg} />
          <img className={classes.PaymentsImg} alt="logo" src={secondImg} />
        </div>
        <div onClick={OnClickHeandler} className={classes.BackButton}>
          ᐸ Back
        </div>
        {/* {popup ? <PopUp title={title} mobile={true} /> : ''} */}
      </div>
    );
  }
  return (
    <div className={classes.Main}>
      <div className={classes.MainTitle}>Your info</div>
      <div className={classes.MainText}>{text}</div>
      <Input placeholder="Your full name" name="fullName" />
      <Input placeholder="+1 (999) 999-99-99" name="numberPhone" />
      <Input placeholder="Type your Email adress" name="emailAdress" />
      <ContactForm text="What is the best way to contact you?" />
      <Button />
    </div>
  );
};

export default Main;
