import LogoStyles from './LogoStyles';

const LogoImg = require('../../../img/Logo.png');

const Logo = () => {
  const classes = LogoStyles();
  const OnClickHeandler = () => {
    document.location.href = 'https://mysign-studio.com'
  }
  return (
    <div  className={classes.LogoContaner}>
      <img onClick={OnClickHeandler} className={classes.Logo} alt="Логотип" src={LogoImg} />
    </div>
  );
};

export default Logo;
