import ButtonStyles from './ButttonStyles';
import { useDispatch, useSelector } from 'react-redux';

const Button = (props) => {
  const { fullName, numberPhone, emailAdress, emailValid, nameValid, contact } =
    useSelector((state) => state.options);
  const full = props.full;
  const arrow = props.arrow;
  const page = useSelector((state) => state.page.page);
  const cash = useSelector((state) => state.cash.cash);
  const {
    payment,
    calligrapher,
    soon,
    revision,
    electronicFormat,
    signatureQuanity,
  } = useSelector((state) => state.options);
  const soonCash = useSelector((state) => state.cash.soon);
  const revisionCash = useSelector((state) => state.cash.revision);
  const electronicFormatCash = useSelector(
    (state) => state.cash.electronicFormat
  );
  const calligrapherCash = useSelector((state) => state.cash.calligrapher);
  const signatureQuanityCash = useSelector(
    (state) => state.cash.signatureQuanity
  );
  let text;
  switch (page) {
    case 1:
      text = 'Calligrapher selection';
      break;
    case 2:
      text = `Order signature for $${cash}`;
      break;
    case 3:
      text = 'Order now';
      break;

    default:
      break;
  }
  const dispath = useDispatch();

  const OnReleaseHeandler = () => {
    if (
      (fullName && numberPhone && emailAdress && emailValid && nameValid) ||
      page === 2
    ) {
      if (page === 3) {
        const facebookApi = () => {
          const TOKEN =
            'EAAIiGtlfcxIBALOgFB6JUnzdctrJ4ark9QMiKWbYqsA5wc9eej7KcmEZAdgjd34hMtS2ZC9uxZAy6skw4fNzBrfunEBQS2hhr6L33fSoFRsZBw46M0amatSZCnzqJZAudpwYMG888MpaZCTMvktZBsyv5VXXDcsXKSVJJ7eVh3zW6eLxHuhsFDKA4HNefZBhxuw8ZD';
          const PIXEL_ID = '732316251252995';
          const data = {
            data: [
              {
                event_name: 'Purchase',
                event_time: 1658900553,
                action_source: contact,
                user_data: {
                  em: [emailAdress],
                  ph: [numberPhone],
                },
                custom_data: {
                  currency: 'USD',
                  value: cash,
                },
              },
            ],
          };
          fetch(
            `https://graph.facebook.com/v10.0/${PIXEL_ID}/events?access_token=${TOKEN}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8',
              },
              body: JSON.stringify(data),
            }
          );
        };

        facebookApi();

        if (payment === 'Card / Apple pay / Google pay with Stripe') {
          let soonId,
            revisionId,
            electronicFormatId,
            calligrapherId,
            signatureQuanityId;
          switch (calligrapher) {
            case 'base':
              calligrapherId = 1;
              break;
            case 'experienced':
              calligrapherId = 2;
              break;
            case 'head':
              calligrapherId = 3;
              break;
            default:
          }
          switch (soon) {
            case '7 Days':
              soonId = 4;
              break;
            case '5 Days':
              soonId = 5;
              break;
            case '2 Days':
              soonId = 6;
              break;
            default:
          }

          revisionId = revision === '3 revisions' ? 7 : 8;
          electronicFormatId = electronicFormat === 'No' ? 9 : 10;
          signatureQuanityId = signatureQuanity === 1 ? 11 : 12;

          fetch('http://170.130.40.20:3008/create-checkout-session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              items: [
                { id: calligrapherId, quantity: 1 },
                { id: soonId, quantity: 1 },
                { id: revisionId, quantity: 1 },
                { id: electronicFormatId, quantity: 1 },
                { id: signatureQuanityId, quantity: 1 },
              ],
              PurchaserInformation: {
                name: fullName,
                email: emailAdress,
                phone: numberPhone,
                contact: contact,
              },
              OrderInformation: {
                calligrapher: calligrapher,
                soon: soon,
                revision: revision,
                electronicFormat: electronicFormat,
                signatureQuanity: signatureQuanity,
              },
              cash: cash,
            }),
          })
            .then((res) => {
              if (res) return res.json();
              return res.json().then((json) => Promise.reject(json));
            })
            .then(({ url }) => {
              //   console.log(url);
              window.location = url;
            })
            .catch((e) => {
              console.error(e.error);
            });
          return;
        }

        const items = [
          {
            name: 'Receipt',
            sku: `Receipt in ${soon}`,
            price: soonCash,
            currency: 'USD',
            quantity: 1,
          },
          {
            name: 'Revision',
            sku: `${revision}`,
            price: revisionCash,
            currency: 'USD',
            quantity: 1,
          },
          {
            name: 'ElectronicFormat',
            sku: `${electronicFormat}`,
            price: electronicFormatCash,
            currency: 'USD',
            quantity: 1,
          },
          {
            name: 'Calligrapher',
            sku: `${calligrapher}`,
            price: calligrapherCash,
            currency: 'USD',
            quantity: 1,
          },
          {
            name: 'Signature quanity',
            sku: `${signatureQuanity}`,
            price: signatureQuanityCash,
            currency: 'USD',
            quantity: 1,
          },
        ];
        console.log('fff');
        fetch('http://170.130.40.20:443/buy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({
            cash: cash,
            items: items,
            name: fullName,
            email: emailAdress,
            phone: numberPhone,
            contact: contact,
            soon: soon,
            signatureQuanity: signatureQuanity,
            electronicFormat: electronicFormat,
            calligrapher: calligrapher,
            revision: revision,
          }),
        })
          .then((res) => {
            if (res) return res.json();
            return res.json().then((json) => Promise.reject(json));
          })
          .then(({ url }) => {
            // console.log(url);
            window.location = url;
          })
          .catch((e) => {
            console.error(e.error);
          });
        return;
      }
      dispath({
        type: 'switchOption',
        payload: { key: 'valid', value: true },
      });

      dispath({ type: 'changePage', payload: page + 1 });
      if (page === 2) {
        const siteHeight = document.documentElement.scrollTop;
        dispath({
          type: 'switchOption',
          payload: {
            key: 'siteHeight',
            value: siteHeight,
          },
        });
        window.scrollTo(0, 0);
        return;
      }

      window.scrollTo(0, 0);
    } else {
      dispath({
        type: 'switchOption',
        payload: { key: 'buttonPress', value: false },
      });
      dispath({
        type: 'switchOption',
        payload: { key: 'valid', value: false },
      });
      dispath({
        type: 'switchOption',
        payload: {
          key: 'validRed',
          value: true,
        },
      });
      setTimeout(() => {
        dispath({
          type: 'switchOption',
          payload: {
            key: 'validRed',
            value: false,
          },
        });
      }, 250);

      if (page === 3) {
        window.scrollTo(0, 0);
        return;
      }
      window.scrollTo(0, 440);
    }
  };

  const classes = ButtonStyles({ full: full });
  return (
    <div className={classes.ButtonContainer}>
      <div className={classes.ButtonBox}>
        <button
          onClick={OnReleaseHeandler}
          // onMouseOut={OnOutHeandler}
          className={classes.Button}
        >
          {text} {arrow ? <span className={classes.Arrow}> ᐳ</span> : ''}
        </button>
      </div>
    </div>
  );
};

export default Button;
