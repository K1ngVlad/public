import Checkboxes from '../Checkboxes/Checkboxes';
import WayToContactStyles from './WayToContactStyles';

const WayToContact = () => {
  const arr = [
    {
      width: '47.972972973%',
      value: 'Email',
    },
    {
      width: '47.972972973%',
      value: 'WhatsApp',
    },
  ];
  const classes = WayToContactStyles();
  return (
    <div className={classes.WayToContact}>
      <div className={classes.contactText}>
        What is the best way to contact you?
      </div>
      <Checkboxes arr={arr} name="contact" width="100%" height={76} />
      {/* <div className={classes.checkBoxes}>
        <CheckBox text="Email" />
        <CheckBox text="WhatsApp" />
      </div> */}
    </div>
  );
};

export default WayToContact;
