import { createUseStyles } from 'react-jss';

const BotItemsStyles = createUseStyles({
  BotItems: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'SF-pro-medium',
  },
  BotText: {
    height: 38,
    width: 335,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  BotTextLink: {
    color: 'rgba(1, 68, 136,  0.5)',
    textDecoration: 'underline',
  },
  BotPayments: {
    marginBottom: 20,
  },
  BotBack: {
    height: 16,
    color: 'rgba(0, 0, 0, 0.36)',
    fontSize: 16,
    fontWeight: 500,
    cursor: 'pointer',
  },
});

export default BotItemsStyles;
