import TabelHeadStyles from './TabelHeadStyles';

const TabelHead = (props) => {
  const classes = TabelHeadStyles();
  return (
    <div className={classes.TabelHead}>{props.quanity} amazing signature</div>
  );
};

export default TabelHead;
