import { useSelector } from 'react-redux';
import HeadlineStyles from './HeadlineAreaStyles';
import HeadlineText from './HeadlineText/HeadlineText';
import Scales from './Scales/Scales';
import Steps from './Steps/Steps';

const HeadlineArea = () => {
  const { popupFixed, siteHeight } = useSelector((state) => state.popup);
  const classes = HeadlineStyles({ popupFixed, siteHeight });
  return (
    <div className={classes.Headline}>
      <HeadlineText />
      <Steps />
      <Scales />
    </div>
  );
};

export default HeadlineArea;
