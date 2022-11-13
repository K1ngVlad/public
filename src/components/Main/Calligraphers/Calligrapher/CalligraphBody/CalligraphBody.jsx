import CalligraphBodyStyles from './CalligraphBodyStyles';
import CalligraphBodyText from './CalligraphBodyText/CalligraphBodyText';

const CalligraphBody = (props) => {
  const img = require('../../../../../img/Check.png');
  const classes = CalligraphBodyStyles();
  return (
    <div className={classes.CalligraphBody}>
      <hr className={classes.CalligraphBodyLine}></hr>
      <div className={classes.CalligraphBodyTextContainer}>
        <div className={classes.CalligraphBodyCheck}>
          <img
            alt="logo"
            src={img}
            className={classes.CalligraphBodyCheckImg}
          />
        </div>
        <CalligraphBodyText type={props.type} />
      </div>
    </div>
  );
};

export default CalligraphBody;
