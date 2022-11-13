import { useSelector } from 'react-redux';
import AppStyles from './AppStyles.js';
import FooterMobile from './components/mobile/Footer/Footer.jsx';
import FormMobile from './components/mobile/Form/Form.jsx';
import Header from './components/Header/Header.jsx';
import HeaderMobile from './components/mobile/Header/Header.jsx';
import MainMobile from './components/mobile/Main/Main.jsx';
import './font.css';
import MediaQuery from 'react-responsive';
import Form from './components/Form/Form.jsx';
import HeadlineArea from './components/HeadlineArea/HeadlineArea.jsx';
import HeadlineAreaMobile from './components/mobile/HeadlineArea/HeadlineArea.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import PopUp from './components/Main/PopUp/PopUp.jsx';

const App = () => {
  const page = useSelector((state) => state.page.page);
  const { popup, title } = useSelector((state) => state.popup);
  const classes = AppStyles();
  if (page === 3) {
    return (
      <div className={classes.App}>
        <MediaQuery minWidth={1024}>
          <HeadlineArea />
          <Main />
          <Footer />
          <Header />
          <Form />
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
          <FormMobile />
        </MediaQuery>
      </div>
    );
  } else {
    return (
      <div className={classes.App}>
        <MediaQuery minWidth={1024}>
          <HeadlineArea />
          <Main />
          <Footer />
          <Header />
          {popup ? <PopUp title={title} /> : ''}
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
          <HeadlineAreaMobile />
          <MainMobile />
          <FooterMobile />
          <HeaderMobile />
          {popup ? <PopUp title={title} mobile={true} /> : ''}
        </MediaQuery>
      </div>
    );
  }
};

export default App;
