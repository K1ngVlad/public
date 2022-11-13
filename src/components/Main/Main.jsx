import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BotItems from './BotItems/BotItems';
import Button from './Button/Button';
import Calligraphers from './Calligraphers/Calligraphers';
import ExtraOption from './ExtraOption/ExtraOption';
import InputFields from './InputFields/InputFields';
import MainStyles from './MainStyles';
import MainText from './MainText/MainText';
import PopUp from './PopUp/PopUp';
import TabelForms from './TabelForms/TabelForms';
import WayToContact from './WayToContact/WayToContact';

const Main = () => {
  const page = useSelector((state) => state.page.page);
  const { popup, title, popupFixed } = useSelector((state) => state.popup);
  const height = useSelector((state) => state.popup.siteHeight);
  const siteHeight = useSelector((state) => state.options.siteHeight);
  const dispatch = useDispatch();
  const date = new Date();
  const numMonth = date.getMonth();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[numMonth];
  useEffect(() => {
    console.log('Обновление');
    if (siteHeight && page === 2) {
      window.scrollTo(0, siteHeight);
      dispatch({
        type: 'switchOption',
        payload: {
          key: 'siteHeight',
          value: 0,
        },
      });
    }
    console.log(height && !popup);
    if (height && !popup) {
      window.scrollTo(0, height);
      dispatch({ type: 'setHeight', payload: 0 });
    }
  }, [popup, page]);
  let classes;
  switch (page) {
    case 1:
      classes = MainStyles({ width: 730 });
      return (
        <main className={classes.Main}>
          <MainText />
          <InputFields margin={30} />
          <WayToContact />
          <Button arrow={true} />
        </main>
      );
    case 2:
      classes = MainStyles({ width: '100%', popup: popup, height: height });
      return (
        <main className={classes.Main}>
          <MainText />
          <Calligraphers month={month} />
          <ExtraOption months={months} />
          <TabelForms />
          <Button />
          <BotItems />
          {/* {popup ? <PopUp title={title} /> : ''} */}
        </main>
      );
    case 3:
      classes = MainStyles({
        width: '100%',
        fixed: true,
        siteHeight: siteHeight,
      });
      return (
        <main className={classes.Main}>
          <MainText />
          <Calligraphers month={month} />
          <ExtraOption months={months} />
          <TabelForms />
          <Button />
          <BotItems />
        </main>
      );
    default:
      return;
  }
};

export default Main;
