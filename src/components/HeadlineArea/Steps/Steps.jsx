import Step from './Step/Step';
import StepStyles from './StepsStyles';

const Steps = () => {
  const classes = StepStyles();
  return (
    <div className={classes.Steps}>
      <Step text="1" />
      <div className={classes.StepArrow}>ᐳ</div>
      <Step text="2" />
      <div className={classes.StepArrow}>ᐳ</div>
      <Step text="3" />
    </div>
  );
};

export default Steps;
