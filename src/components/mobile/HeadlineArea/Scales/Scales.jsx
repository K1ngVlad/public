import { useSelector } from 'react-redux';
import ScalesStyles from './ScalesStyles';

const Scales = () => {
  const page = useSelector((state) => state.page.page);
  const second = page >= 2 ? 'white' : 'none';
  const text = page === 1 ? 'Your info' : 'Calligrapher selection';
  const classes = ScalesStyles({ second });
  return (
    <div className={classes.ScalesContainer}>
      <div className={classes.ScalesTitle}>{text}</div>
      <div className={classes.Scales}>
        <div className={classes.Scale1}></div>
        <div className={classes.Scale2}></div>
        <div className={classes.Scale3}></div>
      </div>
    </div>
  );
};

export default Scales;
