import FormBarStyles from './FormBarStyles';

const FormBar = (props) => {
  const { colorBar, widthBar, placesBar, month, font } = props;
  const classes = FormBarStyles({ colorBar, widthBar, font });
  return (
    <div className={classes.FormBarConteiner}>
      <div className={classes.FormBar}></div>
      <div className={classes.FormBarText}>
        <span className={classes.FormBarPlaces}>{placesBar} places</span> left
        in {month}
      </div>
    </div>
  );
};

export default FormBar;
