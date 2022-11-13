import { createUseStyles } from 'react-jss';

const CashTabelStyles = createUseStyles({
  TabelCash: {
    height: '100%',
    color: (theme) => theme.color,
    fontSize: (theme) => theme.cashSize,
    fontFamily: (theme) => theme.fontFamily,
    textDecorationLine: (them) => (them.cross ? 'line-through' : 'none'),
    opacity: (them) => (them.cross ? 0.5 : 1),
  },
  TabelCashContainer: {
    marginTop: (theme) => theme.marginTop,
    marginBottom: (theme) => theme.marginBottom,
    display: 'flex',
    height: (theme) => theme.height,
    justifyContent: 'center',
  },
  TabelCashIcon: {
    marginTop: (theme) => theme.topIcon,
    fontSize: (theme) => theme.iconSize,
    color: (theme) => theme.color,
    opacity: (them) => (them.cross ? 0.5 : 1),
    fontFamily: (theme) => theme.fontIcon,
  },
});

export default CashTabelStyles;
