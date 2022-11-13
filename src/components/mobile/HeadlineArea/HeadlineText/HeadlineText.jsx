import HeadlineTextStyles from './HealineTextStyles';

const HeadlineText = () => {
  const classes = HeadlineTextStyles();
  return (
    <div className={classes.HeadlineText}>
      <div className={classes.first}>
        Tell us what <br /> signature you want?
      </div>
      <div className={classes.second}>Just follow these 3 quick steps</div>
    </div>
  );
};

export default HeadlineText;
