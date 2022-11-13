import MiniCheckboxes from '../MiniCheckboxes/MiniCheckboxes';
import ExtraOptionsStyles from './ExtraOptionsStyles';

const ExtraOptions = () => {
  const classes = ExtraOptionsStyles();
  return (
    <div className={classes.ExtraOptions}>
      <div className={classes.ExtraOptionsSector}>
        <MiniCheckboxes
          name="soon"
          title="Fast lead time"
          arr={[
            {
              value: '7 Days',
              textValue: '7 Days',
              cash: 'FREE',
            },
            {
              value: '5 Days',
              textValue: '5 Days',
              cash: 3.99,
            },
            {
              value: '2 Days',
              textValue: '2 Days',
              cash: 7.99,
            },
          ]}
        />
        <MiniCheckboxes
          name="revision"
          title="Unlimited revisions"
          arr={[
            {
              value: '3 revisions',
              textValue: 'No',
              cash: 'FREE',
            },
            {
              value: 'Unlimited revisions',
              textValue: 'Yes',
              cash: 9.99,
            },
          ]}
        />
      </div>
      <div className={classes.ExtraOptionsSector}>
        <MiniCheckboxes
          name="electronicFormat"
          title="Electronic signature"
          arr={[
            {
              value: 'No',
              textValue: 'No',
              cash: 'FREE',
            },
            {
              value: 'Yes',
              textValue: 'Yes',
              cash: 9.99,
            },
          ]}
        />
        <MiniCheckboxes
          name="signatureQuanity"
          title="Signature Quanity"
          arr={[
            {
              value: 1,
              textValue: 'One',
              cash: 'FREE',
            },
            {
              value: 2,
              textValue: 'Two',
              cash: 19.99,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ExtraOptions;
