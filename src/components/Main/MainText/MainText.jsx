import { useSelector } from 'react-redux';
import MainTextStyles from './MainTextStyles';

const MainText = () => {
  const { valid, emailAdress, fullName, numberPhone } = useSelector(
    (state) => state.options
  );
  const page = useSelector((state) => state.page.page);
  const error = useSelector((state) => state.options.error);
  const emailValid = useSelector((state) => state.options.emailValid);
  let oneText, twoText, thirdText, color;
  if (page === 1) {
    oneText = 'Your info';

    if (valid || (emailValid && fullName && numberPhone)) {
      twoText = 'Fill in your contact data and your personal manager';
      thirdText = 'will contact you to get started';
      color = 'black';
    } else {
      twoText = error;
      thirdText = '';
      color = '#8F0F0F';
    }
  } else {
    color = 'black';
    oneText = 'Choose your Calligrapher';
    twoText = `We're a small team of passionate artists. Absolutely all of our calligraphers`;
    thirdText =
      'are real professionals, but we want to offer to choose their level';
  }
  const classes = MainTextStyles({ color });
  return (
    <div className={classes.MainText}>
      <div className={classes.headText}>{oneText}</div>
      <div className={classes.descriptionText}>
        {twoText}
        <br />
        {thirdText}
      </div>
    </div>
  );
};

export default MainText;
