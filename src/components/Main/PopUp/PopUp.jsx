import { useDispatch, useSelector } from 'react-redux';
import PopUpArrow from './PopUpArrow/PopUpArrow';
import PopUpStyles from './PopUpStyles';
import { imgs, imgs_2, imgs_3 } from './imgs';

const PopUp = (props) => {
  const title = props.title;
  const mobile = props.mobile;
  const popupHeight = useSelector((state) => state.popup.popupHeight);
  const { portfolio, signature, popupFixed } = useSelector(
    (state) => state.popup
  );
  // const imgs = [];
  // imgs.push(require('../../../img/Portfolio/Group 558.png'));
  // imgs.push(require('../../../img/Portfolio/Group 559.png'));
  // imgs.push(require('../../../img/Portfolio/Group 560.png'));
  // imgs.push(require('../../../img/Portfolio/Group 561.png'));
  // imgs.push(require('../../../img/Portfolio/Group 562.png'));
  // imgs.push(require('../../../img/Portfolio/Group 563.png'));
  // imgs.push(require('../../../img/Portfolio/Group 564.png'));
  // imgs.push(require('../../../img/Portfolio/Group 565.png'));
  // imgs.push(require('../../../img/Portfolio/Group 566.png'));
  // imgs.push(require('../../../img/Portfolio/Group 567.png'));
  // imgs.push(require('../../../img/Portfolio/Group 568.png'));
  // imgs.push(require('../../../img/Portfolio/Group 569.png'));
  // imgs.push(require('../../../img/Portfolio/Group 570.png'));
  // imgs.push(require('../../../img/Portfolio/Group 571.png'));
  // imgs.push(require('../../../img/Portfolio/Group 572.png'));
  // imgs.push(require('../../../img/Portfolio/Group 573.png'));
  // imgs.push(require('../../../img/Portfolio/Group 574.png'));
  // imgs.push(require('../../../img/Portfolio/Group 575.png'));
  // imgs.push(require('../../../img/Portfolio/Group 576.png'));
  // imgs.push(require('../../../img/Portfolio/Group 577.png'));
  // imgs.push(require('../../../img/Portfolio/Group 578.png'));
  // imgs.push(require('../../../img/Portfolio/Group 579.png'));
  // imgs.push(require('../../../img/Portfolio/Group 580.png'));
  // imgs.push(require('../../../img/Portfolio/Group 581.png'));
  // imgs.push(require('../../../img/Portfolio/Group 582.png'));
  // imgs.push(require('../../../img/Portfolio/Group 583.png'));
  // imgs.push(require('../../../img/Portfolio/Group 584.png'));
  // imgs.push(require('../../../img/Portfolio/Group 585.png'));
  // imgs.push(require('../../../img/Portfolio/Group 586.png'));

  // const imgs_2 = [];
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 354.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 355.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 365.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 367.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 369.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 371.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 373.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 375.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 377.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 379.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 381.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 383.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 385.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 387.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 389.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 391.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 393.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 395.png'));
  // imgs_2.push(require('../../../img/Signatures/Desktop/Frame 397.png'));

  // const imgs_3 = [];
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 421.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 511.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 512.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 513.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 514.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 515.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 516.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 517.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 518.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 519.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 520.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 521.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 522.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 523.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 524.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 525.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 526.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 527.png'));
  // imgs_3.push(require('../../../img/Signatures/Mobile/Frame 528.png'));

  let width, titleSize, marginLeft, height;

  if (mobile) {
    width = 290;
    titleSize =
      title === 'We create both simple and complex signatures' ? 24 : 18;
    marginLeft = '8.661417322%';
    height =
      title === 'We create both simple and complex signatures' ? 900 : false;
  } else {
    switch (title) {
      case 'А signature that you will fall in love with':
        width = 481;
        titleSize = 21;
        marginLeft = 38;
        height = 550;
        break;
      case 'We create both simple and complex signatures':
        width = 674;
        titleSize = 28;
        marginLeft = 38;
        height = 463;

        break;

      default:
        width = 367;
        titleSize = 21;
        marginLeft = 22;
        break;
    }
  }

  const dispatch = useDispatch();
  const OnClickHeandler = (e) => {
    const classList = e.target.classList;
    if (
      classList.contains(classes.PopUpCross.split(' ')[0]) ||
      classList.contains(classes.PopUp.split(' ')[0]) ||
      classList.contains(classes.popUpClose)
    ) {
      document.body.style.overflow = '';
      if (!mobile) {
        document
          .querySelector('header')
          .querySelector('div').style.marginRight = `0`;
        document
          .querySelector('header')
          .querySelector('div')
          .querySelector('div').style.left = `0`;
        document.querySelector('main').style.paddingRight = `0`;
        document.querySelector('footer').style.paddingRight = `0`;
      }

      if (popupFixed) {
        dispatch({ type: 'switchFixed' });
      }
      dispatch({ type: 'switchPopup' });
    }
  };
  const classes = PopUpStyles({
    width,
    titleSize,
    marginLeft,
    mobile,
    popupFixed,
    height,
    popupHeight,
  });
  return (
    <div onClick={(e) => OnClickHeandler(e)} className={classes.PopUp}>
      {mobile ? (
        <div className={classes.PopUpContainer}>
          <div className={classes.PopUpCrossContainer}>
            <div className={classes.PopUpCross}>×</div>
          </div>
          {title === 'А signature that you will fall in love with' ? (
            <div className={classes.PopUpTitle}>
              А signature that you will
              <br />
              fall in love with
            </div>
          ) : title === 'We create both simple and complex signatures' ? (
            <div className={classes.PopUpTitle}>
              We create both
              <br />
              simple and complex
              <br />
              signatures
            </div>
          ) : (
            <div className={classes.PopUpTitle}>{title}</div>
          )}
          {title === 'How is delivery calculated?' ? (
            <div className={classes.PopUpText}>
              We're a small team of passionate
              <br />
              artists. Our studio works Mondays
              <br />
              to Fridays to craft for you the world's
              <br />
              most unique signatures. Our delivery
              <br />
              times are counted in business days,
              <br />
              our artists rest on the weekend
              <br />
              to be fully ready to deliver you
              <br />
              a stunning signature
              <br />
              the following week. ❤️
            </div>
          ) : title === 'Revisions | Risk FREE' ? (
            <div className={classes.PopUpText}>
              If you don't like the signatures,
              <br />
              you will be able to say what you
              <br />
              don't like about the options and
              <br />
              our call-grapher will offer more
              <br />
              options. Each client has 3 free
              <br />
              revisions and in most cases, this is
              <br />
              enough to get the perfect result,
              <br />
              but you can also add unlimited
              <br />
              revisions, if you think your
              <br />
              case is special
            </div>
          ) : title === 'E-signature' ? (
            <div className={classes.PopUpText}>
              We will provide the electronic format
              <br />
              of your signature {'(png and svg)'}.
              <br />
              So that you can use it in your
              <br />
              electronic documents {'('}for example,
              <br />
              the DocuSign service{')'}, emails, social
              <br />
              networks, as a watermark and any
              <br />
              other digital applications
            </div>
          ) : title === 'А signature that you will fall in love with' ? (
            <div className={classes.PopUpText}>
              Professional calligrapher will create
              <br />
              a signature, which you will love.
              <br />
              We create both simple and
              <br />
              complex signatures.
              <br />
              Depending on your wishes
            </div>
          ) : title === 'We create both simple and complex signatures' ? (
            <div className={classes.PopUpTextBlack}>
              for those who need two signatures -
              <br />
              a simple beautiful signature for every
              <br />
              day and a more complex elegant
              <br />
              signature for special occasions.
            </div>
          ) : (
            ''
          )}
          {title === 'А signature that you will fall in love with' ? (
            <img alt="img" src={imgs[portfolio]} className={classes.Photos} />
          ) : title === 'We create both simple and complex signatures' ? (
            <div className={classes.SignatureContainer}>
              <img
                alt="img"
                className={classes.Signature}
                src={imgs_3[signature]}
              />
              {/* <div className={classes.PopUpTitle}></div>
              <div className={classes.PopUpText}></div> */}
              <div className={classes.popUpRel}>
                <div className={classes.PopUpTitleRel}>
                  Signature for every day
                </div>
                <div className={classes.PopUpTextRel}>
                  Simple and beautiful. You can <br />
                  easily use it every day
                </div>
                <div className={classes.PopUpTitleSmall}>
                  Signature <br />
                  for special occasions
                </div>
                <div className={classes.PopUpText}>
                  More complex, elegant signature <br />
                  for special occasions, when <br />
                  you want to stand out
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
          {title === 'А signature that you will fall in love with' ? (
            <PopUpArrow mobile={true} type="portfolio" />
          ) : title === 'We create both simple and complex signatures' ? (
            <PopUpArrow mobile={true} type="signature" />
          ) : (
            ''
          )}
          {title === 'We create both simple and complex signatures' ? (
            <div className={classes.popUpClose}>Close</div>
          ) : (
            ''
          )}
        </div>
      ) : (
        <div className={classes.PopUpContainer}>
          <div className={classes.PopUpCrossContainer}>
            <div className={classes.PopUpCross}>×</div>
          </div>
          <div className={classes.PopUpTitle}>{title}</div>

          {title === 'How is delivery calculated?' ? (
            <div className={classes.PopUpText}>
              We're a small team of passionate artists.
              <br />
              Our studio works Mondays to Fridays to craft
              <br />
              for you the world's most unique signatures.
              <br />
              Our delivery times are counted in business days,
              <br />
              our artists rest on the weekend to be fully
              <br />
              ready to deliver you a stunning signature
              <br />
              the following week. ❤️
            </div>
          ) : title === 'Revisions | Risk FREE' ? (
            <div className={classes.PopUpText}>
              If you don't like the signatures, you will be able to
              <br />
              say what you don't like about the options and
              <br />
              and our call-grapher will offer more options.
              <br />
              Each client has 3 free revisions and in most
              <br />
              cases, this is enough to get the perfect result,
              <br />
              but you can also add unlimited revisions,
              <br />
              if you think your case is special
            </div>
          ) : title === 'E-signature' ? (
            <div className={classes.PopUpText}>
              We will provide the electronic format of your
              <br />
              signature {`(png and svg)`}. So that you can use
              <br />
              it in your electronic documents {`(`}for example,
              <br />
              the DocuSign service{`)`}, emails, social networks,
              <br />
              as a watermark and any other digital applications
            </div>
          ) : title === 'А signature that you will fall in love with' ? (
            <div className={classes.PopUpText}>
              Professional calligrapher will create a signature,
              <br />
              which you will love. We create both simple and
              <br />
              complex signatures. Depending on your wishes
            </div>
          ) : title === 'We create both simple and complex signatures' ? (
            <div className={classes.PopUpTextBlack}>
              for those who need two signatures - a simple beautiful signature
              <br />
              for every day and a more complex elegant signature for special
            </div>
          ) : (
            ''
          )}
          {title === 'А signature that you will fall in love with' ? (
            <img alt="img" src={imgs[portfolio]} className={classes.Photos} />
          ) : title === 'We create both simple and complex signatures' ? (
            <div className={classes.SignatureContainer}>
              <img
                alt="img"
                className={classes.Signature}
                src={imgs_2[signature]}
              />
              <div className={classes.TextSignatureContainer}>
                <div classNamev={classes.TextBox}>
                  <div className={classes.TextSighatureTitle}>
                    Signature for every day
                  </div>
                  <div className={classes.TextSignature}>
                    Simple and beautiful. You can <br /> easily use it every day
                  </div>
                </div>
                <div className={classes.TextBox}>
                  <div className={classes.TextSighatureTitle}>
                    Signature for special occasions
                  </div>
                  <div className={classes.TextSignature}>
                    More complex, elegant signature for special <br />{' '}
                    occasions, when you want to stand out
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
          {title === 'А signature that you will fall in love with' ? (
            <PopUpArrow type="portfolio" />
          ) : title === 'We create both simple and complex signatures' ? (
            <PopUpArrow type="signature" />
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
};

export default PopUp;
