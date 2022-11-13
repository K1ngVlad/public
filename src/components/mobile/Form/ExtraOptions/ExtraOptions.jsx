import MobileBox from '../../Main/MobileBox/MobileBox';
import ExtraOptionsStyles from './ExtraOptionsStyles';

const ExtraOptions = () => {
  const classes = ExtraOptionsStyles();
  return (
    <div className={classes.ExtraOptions}>
      <div className={classes.ExtraLink}>Fast lead time</div>
      <div className={classes.ExtraContainerFirst}>
        <MobileBox
          width={'100%'}
          title="7 Days"
          cash="FREE"
          name="soon"
          value="7 Days"
          height={55}
        />
        <MobileBox
          width={'100%'}
          title="5 Days"
          cash={3.99}
          name="soon"
          value="5 Days"
          height={55}
        />
        <MobileBox
          width={'100%'}
          title="2 Days"
          cash={7.99}
          name="soon"
          value="2 Days"
          height={55}
        />
      </div>
      <div className={classes.ExtraLink}>Unlimited revisions</div>
      <div className={classes.ExtraContainer}>
        <MobileBox
          width={'100%'}
          title="3 revisions"
          cash="FREE"
          name="revision"
          value="3 revisions"
          height={55}
        />
        <MobileBox
          width={'100%'}
          title="Unlimited revisions"
          cash={9.99}
          name="revision"
          value="Unlimited revisions"
          height={55}
        />
      </div>
      <div className={classes.ExtraLink}>Electronic signature</div>
      <div className={classes.ExtraContainer}>
        <MobileBox
          width={'100%'}
          title="No"
          cash="FREE"
          name="electronicFormat"
          value="No"
          height={55}
        />
        <MobileBox
          width={'100%'}
          title="Yes"
          cash={9.99}
          name="electronicFormat"
          value="Yes"
          height={55}
        />
      </div>
      <div className={classes.ExtraLink}>Signature options</div>
      <div className={classes.ExtraContainer}>
        <MobileBox
          width={'100%'}
          title="One"
          cash="FREE"
          name="signatureQuanity"
          value={1}
          height={55}
        />
        <MobileBox
          width={'100%'}
          title="Two"
          cash={19.99}
          name="signatureQuanity"
          value={2}
          height={55}
        />
      </div>
    </div>
  );
};

export default ExtraOptions;
