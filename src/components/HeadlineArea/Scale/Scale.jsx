import { useSelector } from 'react-redux';
import ScaleStep from './ScaleStep/ScaleStep';
import ScaleStyles from './ScaleStyles';

const Scale = () => {
  const page = useSelector((state) => state.page.page);
  const text = page === 1 ? 'Your info' : 'Calligrapher selection';
  const classes = ScaleStyles();
  return (
    <div className={classes.Scale}>
      <div className={classes.info}>{text}</div>
      <div className={classes.line}>
        <ScaleStep number={1} />
        <ScaleStep number={2} />
        <ScaleStep number={3} />
      </div>
    </div>
  );
};

export default Scale;
