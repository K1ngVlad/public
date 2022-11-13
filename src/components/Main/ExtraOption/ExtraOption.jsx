import ExtraOptionStyles from './ExtraOptionStyles';
import OptionForm from './OptionForm/OptionForm';

const ExtraOption = (props) => {
  const classes = ExtraOptionStyles();
  return (
    <div className={classes.ExtraOption}>
      <div className={classes.ExtraOptionTitle}>Extra option:</div>
      <OptionForm
        months={props.months}
        title="How soon would you like to receive your signature?"
        name="soon"
        popupTitle="How is delivery calculated?"
        values={[
          {
            value: '7 Days',
            cash: 'FREE',
            descript: 'Will be ready on July 21',
            day: 7,
          },
          {
            value: '5 Days',
            cash: 3.99,
            descript: 'Will be ready on July 19',
            day: 5,
          },
          {
            value: '2 Days',
            cash: 7.99,
            descript: 'Will be ready on July 14',
            day: 2,
          },
        ]}
        width="31.442663378%"
      />
      <OptionForm
        popupTitle="Revisions | Risk FREE"
        title="Revisions | Risk FREE"
        name="revision"
        values={[
          {
            value: '3 revisions',
            cash: 'FREE',
          },
          {
            value: 'Unlimited revisions',
            cash: 9.99,
          },
        ]}
        width="48.581997533%"
      />
      <OptionForm
        popupTitle="E-signature"
        title="Want to get your new signature in the electronic formats?"
        name="electronicFormat"
        descript="To use in email, DocuSign, website and social media (png/svg)"
        values={[
          {
            value: 'No',
            cash: 'FREE',
          },
          {
            value: 'Yes',
            cash: 9.99,
          },
        ]}
        width="48.581997533%"
      />
      {/* <OptionForm title="Revisions | Risk FREE" />
      <OptionForm title="Want to get your new signature in the electronic formats?" /> */}
    </div>
  );
};

export default ExtraOption;
