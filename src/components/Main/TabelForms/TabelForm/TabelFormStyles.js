import { createUseStyles } from 'react-jss';

const TabelFormStyles = createUseStyles({
  TabelForm: {
    backgroundColor: 'white',
    border: (theme) => theme.border,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    height: (theme) => theme.height,
    width: '48.369565217%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    // marginTop: 98,
    margin: (theme) => theme.marginAll,
    marginTop: (theme) => theme.marginAll + 98,
    cursor: 'pointer',
    WebkitTouchCallout: 'none' /* iOS Safari */,
    WebkitUserSelect: 'none' /* Chrome/Safari/Opera */,
    KhtmlUserSelect: 'none' /* Konqueror */,
    MozUserSelect: 'none' /* Firefox */,
    msUserSelect: 'none' /* Internet Explorer/Edge */,
    userSelect: 'none',
  },
  TabelImg: {
    // width: '100%',
    height: 270,
    width: 338,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // marginRight: 200,
  },
  TabelImgImg: {
    width: 'auto',
    height: (theme) => theme.imgHeight,
    marginRight: (theme) => theme.margin,
  },
  Tabel: {
    width: '100%',
    height: (theme) => theme.overHeight,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  OverTabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // alignItems: 'center',
    width: '120%',
    height: (theme) => theme.overover,
    overflow: 'hidden',
  },
});

export default TabelFormStyles;
