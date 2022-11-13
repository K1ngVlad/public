import { useSelector } from 'react-redux';
import ScaleStepStyles from './ScaleStepStyles';

const ScaleStep = (props) => {
  const page = useSelector((state) => state.page.page);
  const backGround =
    page >= props.number ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)';
  const classes = ScaleStepStyles({
    backGround,
  });
  return <div className={classes.ScaleStep}></div>;
};

export default ScaleStep;
