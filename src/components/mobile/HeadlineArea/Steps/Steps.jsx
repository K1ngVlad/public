import Step from './Step/Step';
import StepsStyles from './StepsStyles';

const Steps = () => {
  const classes = StepsStyles();
  return (
    <div className={classes.Steps}>
      <Step num={1} />
      <div className={classes.ArrowContainer}>
        <div className={classes.Arrow}>ᐳ</div>
      </div>

      <Step num={2} />
      <div className={classes.ArrowContainer}>
        <div className={classes.Arrow}>ᐳ</div>
      </div>
      <Step num={3} />
    </div>
  );
};

export default Steps;
