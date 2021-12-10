import { makeStyles } from "@material-ui/core"

const userScreenHeight = window.innerHeight
const userScreenWidth = window.innerWidth

const backgroundColorOnScroll = "black"

const useStyles = makeStyles((theme) => ({
  "@keyframes pulse": {
    "10%": {
      "-moz-box-shadow": "0 0 0 0 white",
      "box-shadow": "0 0 0 0 white",
    },
    "38%": {
      "-moz-box-shadow": "0 0 0 0 white",
      "box-shadow": "0 0 3px 4.5px white",
    },
    "100%": {
      "-moz-box-shadow": "0 0 0 0 white",
      "box-shadow": "0 0 0 0 tranparent",
    },
  },
  MuiAccordionroot: {
    paddingLeft: "0px",
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
    },
    "& .MuiAccordionDetails-root": {
      padding: "0px",
    },
    "& .MuiAccordionSummary-expandIcon": {
      transition: "0ms",
      animationName: "$pulse",
      animationIterationCount: "infinite",
      animationDuration: "2s",
      backgroundColor: "rgba(149, 149, 149, 0.8)",
      filter: "opacity(1)",
      "&::-webkit-filter": "opacity(1)",
      // backdropFilter: "blur(6px)",
      // "&::-webkit-backdrop-filter": "blur(6px)",
      // opacity: "0.8",
    },
    "& .MuiButtonBase-root": {
      disableRipple: true,
      disableFocusRipple: true,
      // disableElevation: true,
    },
    "& .MuiButtonBase-root.Mui-disabled": {
      backgroundColor: "none",
    },
  },

  main: {
    position: "fixed",
    bottom: "1px",
    webkitUserSelect: "none",
    mozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
    "& .MuiDivider-root": {
      background: "#c7c7c7",
    },
    "& .MuiPaper-root": {
      background: "black",
    },
  },
  mainMobile: {
    position: "fixed",
    bottom: "-1px",
    webkitUserSelect: "none",
    mozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
    height: "100%",
  },
  accordion: {
    width: "120px",
    height: "120px",
    bottom: "50px",
    left: "0px",
    background: "none",
    marginLeft: "30px",
    // padding: theme.spacing(1),
    position: "fixed",
    "& .MuiAccordionSummary-expandIcon.Mui-expanded": {
      transform: "initial",
    },
    [theme.breakpoints.down("xs")]: {
      left: "10px",
    },
  },
  accordionIpad: {
    width: "120px",
    height: "120px",
    bottom: "50px",
    left: 30,

    background: "none",
    // padding: theme.spacing(1),
    position: "fixed",
    // [theme.breakpoints.down("xs")]: {
    //   left: "10px",
    // },
  },
  accordionMobile: {
    width: "120px",
    height: "120px",
    bottom: "5px",
    left: "-40px",
    bottom: "10px",
    background: "none",
    // padding: theme.spacing(1),
    position: "fixed",
    // zIndex: "1",
    // [theme.breakpoints.down("xs")]: {
    //   left: "10px",
    // },
  },
  accordionforBostonLimousineToDisplayIconOnTheLeft: {
    width: "120px",
    height: "120px",
    bottom: "5px",
    marginLeft: userScreenWidth - 137,
    // marginLeft: -30,
    marginBottom: -10,
    background: "none",
    // padding: theme.spacing(1),
    position: "fixed",
    // zIndex: "1",
    [theme.breakpoints.down("xs")]: {
      left: "10px",
    },
  },
  content: {
    position: "sticky",
    cursor: "default",
    height: "80vh",
    width: "356px",
    backgroundColor: backgroundColorOnScroll,
    border: "1px solid #AC8159",
    // borderTopRightRadius: '30px',
    // borderTopLeftRadius: '30px',
    // borderBottomRight: '0px',
    // borderBottomLeft: '0px',

    bottom: "-1px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.15em",
      top: "100px",
      borderRadius: "3px",
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-track": {
      marginTop: "84px",
      // marginBottom: "300px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#c7c7c7",
      // borderRadius: "40px",
      borderRadius: "2px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#bfaf82",
    },
    [theme.breakpoints.down("xs")]: {
      width: userScreenWidth,
      height: userScreenHeight,
    },
    // left: '-20px',
  },
  contentIpad: {
    position: "absolute",
    cursor: "default",
    height: "67vh",
    width: "356px",
    border: "1px solid #AC8159",
    backgroundColor: backgroundColorOnScroll,
    // borderTopRightRadius: '30px',
    // borderTopLeftRadius: '30px',
    // borderBottomRight: '0px',
    // borderBottomLeft: '0px',
    left: 10,
    bottom: "16px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.20em",
      top: "100px",
      backgroundColor: "transparent",
      borderRadius: "3px",
    },
    "&::-webkit-scrollbar-track": {
      marginTop: "83px",
      // marginBottom: "300px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "grey",
      borderRadius: "2px",
      // borderRadius: "40px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#c5cde3",
    },
    [theme.breakpoints.down("xs")]: {
      width: userScreenWidth,
      height: userScreenHeight,
    },
  },
  checkOut: {
    overflowY: "scroll",
    backgroundColor: backgroundColorOnScroll,
    "&::-webkit-scrollbar": {
      width: "0.20em",
      top: "100px",
      backgroundColor: "transparent",
      borderRadius: "3px",
    },
    "&::-webkit-scrollbar-track": {
      marginTop: "84px",
      // marginBottom: "300px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "grey",
      borderRadius: "2px",
      // borderRadius: "20px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#c5cde3",
    },
  },
  contentMobile: {
    position: "fixed",
    cursor: "default",
    width: "100vh",
    height: "100vh",
    backgroundColor: backgroundColorOnScroll,
    // borderTopRightRadius: '30px',
    // borderTopLeftRadius: '30px',
    // borderBottomRight: '0px',
    // borderBottomLeft: '0px',
    bottom: "1px",
    overflowY: "scroll",

    "&::-webkit-scrollbar": {
      width: "0.20em",
      top: "100px",
      backgroundColor: "transparent",
      borderRadius: "3px",
    },
    "&::-webkit-scrollbar-track": {
      marginTop: "83px",
      // marginBottom: "300px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "grey",
      borderRadius: "2px",
      // borderRadius: "40px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#c5cde3",
    },
    [theme.breakpoints.down("xs")]: {
      width: userScreenWidth,
      height: userScreenHeight,
    },
    // left: '-20px',
  },
  contentMobileWithoutScroll: {
    position: "fixed",
    cursor: "default",
    height: "100%",
    width: "100%",
    // borderTopRightRadius: '30px',
    // borderTopLeftRadius: '30px',
    // borderBottomRight: '0px',
    // borderBottomLeft: '0px',
    bottom: "1px",
    overflowY: "none",
    // left: '-20px',
  },
  companyProfile: {
    cursor: "move",
    // position: 'sticky',
  },
  closeIcon: {
    textAlign: "center",
    verticalAlign: "sub",
    width: "28px",
    height: "28px",
    paddingTop: "7px",
    cursor: "pointer",
  },
}))

export { useStyles, userScreenWidth, userScreenHeight }
