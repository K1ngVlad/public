import ExtraOption from './ExtraOption/ExtraOption';
import ExtraOptionsStyles from './ExtraOptionsStyles';

const ExtraOptions = (props) => {
  const months = props.months;
  const classes = ExtraOptionsStyles();
  return (
    <div className={classes.ExtraOptions}>
      <div className={classes.ExtraOptionsTitle}>Extra option:</div>
      <ExtraOption
        titleWidth={200}
        popTitle="How is delivery calculated?"
        months={months}
        title="How soon would you like to receive your signature?"
        arr={[
          {
            value: '7 Days',
            name: 'soon',
            cash: 'FREE',
            descript: 'Will be ready on July 21',
            day: 7,
          },
          {
            value: '5 Days',
            name: 'soon',
            cash: 3.99,
            descript: 'Will be ready on July 19',
            day: 5,
          },
          {
            value: '2 Days',
            name: 'soon',
            cash: 7.99,
            descript: 'Will be ready on July 14',
            day: 2,
          },
        ]}
        height={195}
      />
      <ExtraOption
        titleWidth={190}
        popTitle="Revisions | Risk FREE"
        title="Revisions | Risk FREE"
        height={125}
        arr={[
          {
            value: '3 revisions',
            name: 'revision',
            cash: 'FREE',
          },
          {
            value: 'Unlimited revisions',
            name: 'revision',
            cash: 9.99,
          },
        ]}
      />
      <ExtraOption
        titleWidth={240}
        popTitle="E-signature"
        title="Want to get your new signature in the electronic formats?"
        bot="To use in email, DocuSign, website
        and social media (png/svg)"
        height={125}
        arr={[
          {
            value: 'No',
            name: 'electronicFormat',
            cash: 'FREE',
          },
          {
            value: 'Yes',
            name: 'electronicFormat',
            cash: 9.99,
          },
        ]}
      />
    </div>
  );
};

export default ExtraOptions;
