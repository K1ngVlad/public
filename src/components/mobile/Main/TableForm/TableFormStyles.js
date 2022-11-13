import { createUseStyles } from 'react-jss';

const TableFormStyles = createUseStyles({
  TableForm: {
    height: (theme) => theme.height,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    marginTop: (theme) => theme.marginTop,
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: (theme) => theme.marginBottom,
    border: (theme) => theme.border,
    cursor: 'pointer',
    WebkitTouchCallout: 'none' /* iOS Safari */,
    WebkitUserSelect: 'none' /* Chrome/Safari/Opera */,
    KhtmlUserSelect: 'none' /* Konqueror */,
    MozUserSelect: 'none' /* Firefox */,
    msUserSelect: 'none' /* Internet Explorer/Edge */,
    userSelect: 'none',
  },
  OverTable: {
    height: (theme) => theme.overheight,
    width: '100%',
    // display: 'flex',
  },
  TableImg: {
    height: 216,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  TableImgImg: {
    height: (theme) => theme.heightImg,
    // maxHeight:
    width: 'auto',
    marginRight: (theme) => theme.margin,
  },
});

export default TableFormStyles;
