import { useSelector } from 'react-redux';
import StepStyles from './StepStyles';

const Step = (props) => {
  const page = useSelector((state) => state.page.page);
  const num = props.num;
  let border, color, fontWeight, background, fontFamily;
  if (page === num) {
    border = '1px solid #1CA16F';
    color = '#1CA16F';
    fontWeight = 700;
    background = '#081E15';
    fontFamily = 'SF-pro-bold';
  } else {
    border = '1px solid #3E5049';
    color = '#3E5049';
    fontWeight = 400;
    background = 'none';
    fontFamily = 'SF-pro-regular';
  }
  const classes = StepStyles({
    border,
    color,
    fontWeight,
    background,
    fontFamily,
  });
  return (
    <div className={classes.Step}>
      <div className={classes.StepNum}>{num}</div>
    </div>
  );
};

export default Step;
