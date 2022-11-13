import TextStyles from './TextStyles';
import '../../../font.css';

const Text = () => {
  const classes = TextStyles();
  return (
    <div className={classes.Text}>
      <div className={classes.Tell}>Tell us what signature you want?</div>
      <div className={classes.Just}> Just follow these 3 quick steps</div>
    </div>
  );
};

export default Text;
