import { useSelector } from 'react-redux';
import HeadlineAreaStyles from './HeadlineAreaStyles';
import Scale from './Scale/Scale';
import Steps from './Steps/Steps';
import Text from './Text/Text';

const HeadlineArea = () => {
  const page = useSelector((state) => state.page.page);
  const popup = useSelector((state) => state.popup.popup);
  const position = page === 3 ? 'fixed' : popup ? 'fixed' : 'static';
  const classes = HeadlineAreaStyles({ position });
  return (
    <div className={classes.Headline}>
      <Text />
      <Steps />
      <Scale />
    </div>
  );
};

export default HeadlineArea;
