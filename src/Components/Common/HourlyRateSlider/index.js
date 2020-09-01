// import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Slider from '@material-ui/core/Slider';
// import Typography from '@material-ui/core/Typography';
// import Tooltip from '@material-ui/core/Tooltip';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   margin: {
//     height: theme.spacing(3),
//   },
// }));

// const PrettoSlider = withStyles({
//   root: {
//     color: '#23A4EF',
//     height: 8,
//   },
//   thumb: {
//     height: 35,
//     width: 35,
//     backgroundColor: '#203662',
//     marginTop: -12,
//     // marginLeft: -12,
//     '&:focus, &:hover, &$active': {
//       boxShadow: 'inherit',
//     },
//   },
//   active: {},
//   valueLabel: {
//      left: 'calc(-50% + 19px)',
//     top: -22,
//     '& *': {
//       background: 'transparent',
//       color: '#000',
//     },

//   },
//   track: {
//     height: 8,
//     borderRadius: 4,
//   },
//   rail: {
//     height: 8,
//     borderRadius: 4,
//   },
// })(Slider);

// export default function HourlyRateSlider() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <PrettoSlider  valueLabelDisplay="on" aria-label="pretto slider" defaultValue={25} min={1} max={50}/>
//     </div>
//   );
// }

import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import right from "../../../Assets/Home/right-slider.png";
import left from "../../../Assets/Home/left-slider.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: "#23A4EF",
    height: 8,
  },
  thumb: {
    height: 35,
    width: 35,
    backgroundColor: "#203662",
    marginTop: -15,
    // marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
    "& .bar": {
      // display: inline-block !important;
      height: 15,
      width: 1,
      backgroundColor: "white",
      marginLeft: 3,
      marginRight: 1,
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 19px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000",
    },
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span>
        <img src={left} />{" "}
      </span>
      <span style={{ width: 5 }}> </span>
      <span>
        <img src={right} />{" "}
      </span>
    </span>
  );
}

export default class HourlyRateSlider extends React.Component {
  // const classes = useStyles();

  valuetext = (value) => {
    this.props.hourlyRate(value);
  };

  render() {
    const { hourlyValue, min, max } = this.props;
    return (
      <div>
        <PrettoSlider
          valueLabelDisplay="on"
          aria-label="pretto slider"
          defaultValue={hourlyValue}
          min={min}
          max={max}
          onChange={(e, value) => this.valuetext(value)}
          ThumbComponent={AirbnbThumbComponent}
        />
      </div>
    );
  }
}
