import { createUseStyles } from 'react-jss';

const ContactStyles = createUseStyles({
  ContactForm: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // width: (theme) => (theme.form ? 276 : 314),
    width: '101.379310345%',
  },
  ContactTitle: {
    fontSize: 14,
    marginBottom: 15,
    height: 17,
    alignSelf: (theme) => theme.selfAlign,
    fontFamily: 'SF-pro-light',
  },
  ContactContainer: {
    height: 59,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default ContactStyles;
