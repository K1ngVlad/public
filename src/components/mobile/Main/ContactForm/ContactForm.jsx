import MobileBox from '../MobileBox/MobileBox';
import ContactStyles from './ContactFormStyles';

const ContactForm = (props) => {
  const text = props.text;
  const form = props.form;
  const selfAlign =
    text === 'Сhoose a payment method:' ? 'flex-start' : 'center';
  const classes = ContactStyles({ selfAlign, form });
  return (
    <div className={classes.ContactForm}>
      <div className={classes.ContactTitle}>{text}</div>
      <div className={classes.ContactContainer}>
        <MobileBox
          width="48.275862069%"
          title="Email"
          cash=""
          name="contact"
          value="Email"
          hegiht="100%"
        />
        <MobileBox
          width="48.275862069%"
          title="WhatsApp"
          cash=""
          name="contact"
          value="WhatsApp"
          hegiht="100%"
        />
      </div>
    </div>
  );
};

export default ContactForm;
