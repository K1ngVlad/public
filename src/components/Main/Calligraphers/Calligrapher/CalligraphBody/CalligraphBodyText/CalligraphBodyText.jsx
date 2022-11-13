import CalligraphBodyTextStyles from './CalligraphBodyTextStyles';

const CalligraphBodyText = (props) => {
  const classes = CalligraphBodyTextStyles();
  switch (props.type) {
    case 'base':
      return (
        <div className={classes.CalligraphBodyText}>
          Professional calligrapher
          <br />
          that will create a signature,
          <br />
          which you will love.
        </div>
      );
    case 'experienced':
      return (
        <div className={classes.CalligraphBodyText}>
          Prized calligraphers who are
          <br />
          among the best in the industry, skilled in a wide range of styles
        </div>
      );
    case 'head':
      return (
        <div className={classes.CalligraphBodyText}>
          The most experienced artist
          <br />
          in our studio, who created
          <br /> signatures for the most <br /> important clients
        </div>
      );
    default:
      return;
  }
};

export default CalligraphBodyText;
