import { useSelector } from 'react-redux';
import FooterStyles from './FooterStyles';

const Footer = () => {
  const firstImg = require('../../../img/Inst.png');
  const secondImg = require('../../../img/Mail.png');
  const thirdImg = require('../../../img/WhatsApp.png');
  const popup = useSelector((state) => state.popup.popup);
  const position = popup ? 'fixed' : 'static';
  const classes = FooterStyles({ position });
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterLine}></div>
      <div className={classes.FooterText}>
        Copyright © 2022 MySign Studio. All rights reserved.
      </div>
      <div className={classes.FooterIcons}>
        <img
          src={firstImg}
          onClick={() => {
            window.location.href = 'https://www.instagram.com/mysign.studio/';
          }}
          alt="img"
          className={classes.FooterIcon}
        />
        <img
          src={secondImg}
          onClick={() => {
            window.location.href = 'mailto:order@mysign-studio.сom';
          }}
          alt="img"
          className={classes.FooterIcon}
        />
        <img
          src={thirdImg}
          onClick={() => {
            window.location.href = 'https://wa.me/12519998678';
          }}
          alt="img"
          className={classes.FooterIcon}
        />
      </div>
      <div className={classes.FooterLinks}>
        <div className={classes.FooterLink}>
          <a
            className={classes.FooterLinkLink}
            href="https://mysign-studio.com/policy"
          >
            Privacy policy
          </a>
        </div>
        <div className={classes.FooterLink}>
          <a
            className={classes.FooterLinkLink}
            href="https://mysign-studio.com/refund_policy"
          >
            Refound policy
          </a>
        </div>
        <div className={classes.FooterLink}>
          <a
            className={classes.FooterLinkLink}
            href="https://mysign-studio.com/terms_of_service"
          >
            Terms of service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
