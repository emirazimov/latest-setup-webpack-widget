import { makeStyles } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import React from "react"
import { useFormContext } from "react-hook-form"
import { HourlyIcon, MinusIcon, PlusIcon } from "../../../assets/icons"
import "./index.css"

const useStyles = makeStyles((theme) => ({
  mainPlusMinusContainer: {
    height: "34px",

    borderBottom: "2px solid #AC8159",
    transition: "200ms",
    "&:hover": { borderBottom: "2px solid white", transition: "200ms" },
  },
}))

const Hours = ({
  hoursState,
  setHourly,
  hoursAddressForm,
  setHoursAddressForm,
}) => {
  const classes = useStyles()

  const { register } = useFormContext()

  //   const [hoursAddressForm, setHoursAddressForm] = useState(0)

  const onDecrease = () => {
    if (hoursAddressForm === 1) {
      return
    }
    setHoursAddressForm((hoursAddressForm) => hoursAddressForm - 1)
  }
  const onIncrease = () => {
    setHoursAddressForm((hoursAddressForm) => hoursAddressForm + 1)
  }

  //   React.useEffect(() => {
  //     if (hoursState !== 0) {
  //       setHourly(true)
  //       setHoursAddressForm(parseInt(hoursState))
  //     }
  //   }, [hoursState])

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      style={{ marginTop: "-4px" }}
    >
      <Grid item>
        <Grid container direction="row" alignItems="center">
          <HourlyIcon />
          <Typography
            style={{ color: "white", fontSize: "14px", marginTop: "4px" }}
          >
            Hours
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
              onClick={onDecrease}
              // style={{ marginRight: "5px" }}
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
              name="hours"
              className="passenger"
              onChange={(e) => {
                setHoursAddressForm(e.target.value)
              }}
              value={hoursAddressForm}
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
              onClick={onIncrease}
              // style={{ marginLeft: "4px" }}
            >
              <PlusIcon />
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Hours
