import { useSelector } from 'react-redux';
import StepStyles from './StepStyles';

const Step = (props) => {
  const page = useSelector((state) => state.page.page);
  let activeBorder, activeFontColor, activeFontWeigth, background, family;
  console.log(page);
  console.log(props.text - 0);
  if (page === props.text - 0) {
    activeBorder = '1px solid #1CA16F';
    activeFontColor = '#1CA16F';
    activeFontWeigth = '700';
    background = '#081E15';
    family = 'SF-pro-bold';
  } else {
    activeBorder = '1px solid #3E5049';
    activeFontColor = '#3E5049';
    activeFontWeigth = '300';
    background = 'none';
    family = 'SF-pro-light';
  }
  const classes = StepStyles({
    activeBorder,
    activeFontColor,
    activeFontWeigth,
    background,
    family,
  });
  return (
    <div className={classes.Step}>
      <div className={classes.StepNumber}>{props.text}</div>
    </div>
  );
};

export default Step;
