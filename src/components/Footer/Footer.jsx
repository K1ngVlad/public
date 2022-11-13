import { useSelector } from 'react-redux';
import FooterContent from './FooterContent/FooterContent';
import FooterStyles from './FooterStyles';

const Footer = () => {
  const page = useSelector((state) => state.page.page);
  const popup = useSelector((state) => state.popup.popup);
  const position = page === 3 ? 'fixed' : popup ? 'fixed' : 'static';
  const classes = FooterStyles({ position });
  return (
    <footer className={classes.Footer}>
      <div className={classes.line}></div>
      <FooterContent />
    </footer>
  );
};

export default Footer;
