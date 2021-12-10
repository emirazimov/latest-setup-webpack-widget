import { makeStyles, useMediaQuery } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import React from "react"
import { useFormContext } from "react-hook-form"
import {
  MinusIcon,
  // NumberOfPassengers,
  // NumberOfPassengersIcon,
  PlusIcon,
} from "../../../assets/icons"
import "./index.css"

const useStyles = makeStyles((theme) => ({
  mainPlusMinusContainer: {
    height: "34px",
    borderBottom: "2px solid #AC8159",
    transition: "200ms",
    "&:hover": { borderBottom: "2px solid white", transition: "200ms" },
  },
}))

export default React.memo(function SafetySeat({
  setBoosterSeat,
  setChildSafetySeat,
  boosterSeat,
  childSafetySeat,
  isBoosterSeatExistOnBackend,
  isSafetySeatExistOnBackend,
}) {
  const classes = useStyles()
  const { register } = useFormContext()

  const onDecreaseBoosterSeat = () => {
    if (boosterSeat === 0) {
      return
    }
    setBoosterSeat((boosterSeat) => boosterSeat - 1)
  }
  const onIncreaseBoosterSeat = () => {
    if (boosterSeat === 14) {
      return
    }
    setBoosterSeat((boosterSeat) => boosterSeat + 1)
  }

  const onDecreaseChildSafetySeat = () => {
    if (childSafetySeat === 0) {
      return
    }
    setChildSafetySeat((childSafetySeat) => childSafetySeat - 1)
  }
  const onIncreaseChildSafetySeat = () => {
    if (childSafetySeat === 14) {
      return
    }
    setChildSafetySeat((childSafetySeat) => childSafetySeat + 1)
  }

  //   React.useEffect(() => {
  //     setPassengers(parseInt(passengersqState))
  //   }, [passengersqState])
  const isMobile = useMediaQuery("(max-width:340px)")
  const shouldSafetySeatBeColumnDirection = useMediaQuery("(max-width:420px)")
  return (
    <Grid
      container
      direction={shouldSafetySeatBeColumnDirection ? "column" : "row"}
      justify="space-between"
      alignItems={shouldSafetySeatBeColumnDirection ? "flex-start" : "center"}
      style={{ paddingLeft: "9px" }}
    >
      {isBoosterSeatExistOnBackend && (
        <Grid
          item
          style={{
            width: "100%",
          }}
        >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{
              marginTop: "6px",
              marginBottom: "15px",
              // width: isBoosterSeatExistOnBackend && "100%",
            }}
          >
            <Grid item>
              <Grid container direction="row">
                {/* <NumberOfPassengersIcon
            style={{ paddingLeft: "30px" }}
          ></NumberOfPassengersIcon> */}
                <Typography
                  style={{
                    color: "white",
                    fontSize: "12px",
                    wordWrap: "break-word",
                    marginBottom: isBoosterSeatExistOnBackend ? "2" : "8px",
                    width: isMobile ? "130px" : "none",
                  }}
                >
                  Youth Booster Seat
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                className={classes.mainPlusMinusContainer}
                // style={{
                //   // background: "#282828",
                //   // height: "35px",
                //   // borderRadius: "5px",
                //   height: "34px",
                //   // paddingTop: "-4px",
                // }}
              >
                <Grid item>
                  <span
                    onClick={onDecreaseBoosterSeat}
                    style={
                      {
                        // marginRight: "5px",
                      }
                    }
                  >
                    <MinusIcon />
                  </span>
                </Grid>
                <Grid
                  item
                  style={{
                    textAlign: "center",
                    // borderBottom: "2px solid #AC8159",
                    // marginTop: "6px",
                    // paddingBottom: "2px",
                    // borderBottom: "2px solid #AC8159",
                    // height: "105%",
                  }}
                >
                  <input
                    ref={register}
                    name="Youth Booster Seat"
                    onChange={(e) => {
                      setBoosterSeat(e.target.value)
                    }}
                    className="passenger"
                    value={boosterSeat}
                    size="1"
                    style={{
                      // pointerEvents: "none",
                      minWidth: "34px",
                      maxWidth: "34px",
                      // marginLeft: "2px",
                      // marginRight: "2.5px",
                      // marginBottom: "4px",
                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                      textAlign: "center",
                      fontFamily: "Roboto",
                      textTransform: "none",
                      fontWeight: "400",
                      fontSize: "14px",
                      height: "100%",
                    }}
                    type="number"
                  />
                </Grid>
                <Grid item>
                  <span
                    onClick={onIncreaseBoosterSeat}
                    // style={{ marginLeft: "4px" }}
                  >
                    <PlusIcon />
                  </span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
      {isSafetySeatExistOnBackend && (
        <Grid
          item
          style={{
            width: isSafetySeatExistOnBackend && "100%",
          }}
        >
          <Grid
            container
            justify="space-between"
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{
              marginBottom: "15px",
            }}
          >
            <Grid item>
              <Grid container direction="row">
                {/* <NumberOfPassengersIcon
            style={{ paddingLeft: "30px" }}
          ></NumberOfPassengersIcon> */}
                <Typography
                  style={{
                    color: "white",
                    fontSize: "12px",
                    wordWrap: "break-word",
                    marginBottom: isSafetySeatExistOnBackend ? "2" : "8px",
                    width: isMobile ? "130px" : "none",
                  }}
                >
                  {"Infant & Child Safety Seat"}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                className={classes.mainPlusMinusContainer}
                // style={{
                //   // background: "#282828",
                //   // height: "35px",
                //   // borderRadius: "5px",
                //   height: "34px",
                //   // paddingTop: "-4px",
                // }}
              >
                <Grid item>
                  <span
                    onClick={onDecreaseChildSafetySeat}
                    style={
                      {
                        // marginRight: "5px",
                      }
                    }
                  >
                    <MinusIcon />
                  </span>
                </Grid>
                <Grid
                  item
                  style={{
                    textAlign: "center",
                    // borderBottom: "2px solid #AC8159",
                    // marginTop: "6px",
                    // paddingBottom: "2px",
                    // borderBottom: "2px solid #AC8159",
                    // height: "105%",
                  }}
                >
                  <input
                    ref={register}
                    name="Youth Booster Seat"
                    onChange={(e) => {
                      setChildSafetySeat(e.target.value)
                    }}
                    className="passenger"
                    value={childSafetySeat}
                    size="1"
                    style={{
                      // pointerEvents: "none",
                      minWidth: "34px",
                      maxWidth: "34px",
                      // marginLeft: "2px",
                      // marginRight: "2.5px",
                      // marginBottom: "4px",
                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                      textAlign: "center",
                      fontFamily: "Roboto",
                      textTransform: "none",
                      fontWeight: "400",
                      fontSize: "14px",
                      height: "100%",
                    }}
                    type="number"
                  />
                </Grid>
                <Grid item>
                  <span
                    onClick={onIncreaseChildSafetySeat}
                    // style={{ marginLeft: "4px" }}
                  >
                    <PlusIcon />
                  </span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
})
