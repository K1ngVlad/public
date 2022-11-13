import Calligrapher from './Calligrapher/Calligrapher';
import CalligraphersStyles from './CalligraphersStyles';

const Calligraphers = (props) => {
  const month = props.month;
  const classes = CalligraphersStyles();
  return (
    <div className={classes.Calligraphers}>
      <Calligrapher month={month} type="base" popular={false} />
      <Calligrapher month={month} type="experienced" popular={true} />
      <Calligrapher month={month} type="head" popular={false} />
    </div>
  );
};

export default Calligraphers;
