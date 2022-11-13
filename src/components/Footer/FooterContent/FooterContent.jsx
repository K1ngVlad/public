import FooterContentStyles from './FooterContentStyles';
import Icon from './Icon/Icon';

const FooterContent = () => {
  const classes = FooterContentStyles();
  return (
    <div className={classes.FooterContent}>
      <div className={classes.copyright}>
        Copyright © 2022 MySign Studio. All rights reserved.
      </div>
      <div className={classes.icons}>
        <Icon href="https://www.instagram.com/mysign.studio/" img="Inst" />
        <Icon href="mailto:order@mysign-studio.сom" img="Mail" />
        <Icon href="https://wa.me/12519998678" img="WhatsApp" />
      </div>
      <div className={classes.links}>
        <div className={classes.link}>
          <a
            className={classes.linklink}
            href="https://mysign-studio.com/policy"
          >
            Privacy Policy
          </a>
        </div>
        <div className={classes.link}>
          <a
            className={classes.linklink}
            href="https://mysign-studio.com/refund_policy"
          >
            Refund Policy
          </a>
        </div>
        <div className={classes.link}>
          <a
            className={classes.linklink}
            href="https://mysign-studio.com/terms_of_service"
          >
            Terms of service
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
