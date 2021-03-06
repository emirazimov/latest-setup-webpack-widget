import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { FormProvider, useForm } from "react-hook-form"
import {
  CustomFormInput,
  CustomFormInputForPayment,
  CustomMaskInput,
} from "./CustomFormInput"
import { makeStyles } from "@material-ui/core/styles"
import { BackArrowIcon } from "../../../assets/icons"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Autocomplete from "@material-ui/lab/Autocomplete"
import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"
import Switch from "@material-ui/core/Switch"
import { Link } from "@material-ui/core"
import { placesApi } from "../../../api/api"
import TextField from "@material-ui/core/TextField"
import {
  createReservation,
  setPaymentForm,
} from "./../../../Redux/form-reducer"
import PrivacyPolicy from "./../../TermsOfUse/PrivacyPolicy"
import TermsOfUse from "./../../TermsOfUse/TermOfUse"
import { withStyles } from "@material-ui/styles"
// import { Number, Cvc, Expiration } from "react-credit-card-primitives"

import Cleave from "cleave.js/react"
import "./PaymentStyles.css"

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2.2),
    backgroundColor: "black",
  },
  buttonGroup: {
    paddingTop: theme.spacing(0),
  },
  error: {
    color: "#db5858",
    margin: "0px",
    paddingTop: "4px",
    fontSize: "13px",
  },
  inputRoot: {
    height: "40px",
  },
  inputRootAutocomplete: {
    height: "40px",
    background: "black",
    borderRadius: "10px",
    paddingLeft: "13px",
    color: "white",
    boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.1)",
    borderRadius: "0",

    "&::placeholder": {
      color: "black",
      opacity: "1",
      fontSize: "10px",
    },
    fontSize: "14px",
  },
  inputRootAutocompleteCardNumber: {
    height: "40px",
    background: "black",
    paddingLeft: "13px",
    color: "white",
    boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.1)",
    borderRadius: "0px",
    "&::placeholder": {
      color: "black",
      opacity: "1",
      fontSize: "10px",
    },
    fontSize: "14px",
  },
  inputPlaceholder: {
    height: "40px",

    "&::placeholder": {
      color: "black",
      opacity: "1",
      fontSize: "10px",
    },
  },
  noBorder: {
    // border: "1px solid transparent",
    // border: "none",
    "&:before": {
      borderBottom: "2px solid #AC8159",
    },
    "&::placeholder": {
      color: "black",
      opacity: "1",
      fontSize: "16px",
    },
  },
  inputPlaceholderFontSize: {
    border: "1px solid black",
    borderRadius: "0px",
    "& input::placeholder": {
      fontSize: "14px",
    },

    fontSize: "14px",
  },
  inputRootAutocomplete2: {
    height: "40px",
    WebkitBoxShadow: "0 0 0 1000px white inset",
    height: "0px",
    // "& .MuiTextField-root ": {
    //   background: "red",
    // },
    // background: "transparent",
  },
  popupIndicator: {
    height: "100%",
    marginTop: "5px",
    marginRight: "5px",
    color: "white",
    "& $svg": {
      width: "18px",
      height: "18px",
    },
  },
  checkbox: {
    "& $svg": {
      // width: "45px",
      // height: "45px",
    },
    // "& .MuiSvgIcon-root": {
    //   width: "70px",
    //   height: "70px",
    // },
    "&:hover": {
      color: "grey",
      background: "black",
    },
  },
  checkboxMain: {
    "& .MuiSvgIcon-root": {
      width: "30px",
      height: "30px",
    },
  },
  backButtonSelf: {
    backgroundColor: "#AC8159",
    border: "1px solid transparent",
    color: "black",
    borderRadius: "25px",
    "&:hover": {
      background: "black",
      border: "1px solid #AC8159",
      color: "white",
    },
  },
  payButtonSelf: {
    backgroundColor: "#AC8159",
    border: "1px solid transparent",
    color: "black",
    borderRadius: "25px",
    "&:hover": {
      background: "black",
      border: "1px solid #AC8159",
      color: "white",
    },
    "&.MuiButton-contained.Mui-disabled": {
      backgroundColor: "#4F4F4F",
    },
  },
  option: {
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "#4F4F4F",
    },
    "&$selected": {
      backgroundColor: "#4F4F4F",
    },
  },
  selectedOption: {
    backgroundColor: "#4F4F4F",
    "&$selected": {
      backgroundColor: "#4F4F4F",
    },
  },
  input: {
    // height: "40px",

    "&:-webkit-autofill": {
      height: "0px",
      border: "none",
      borderRadius: "0px",
      WebkitBoxShadow: "0 0 0 1000px transparent inset",
      WebkitTextFillColor: "white",
      backgroundColor: "transparent !important",
      backgroundClip: "content-box !important",
    },
    // "MuiOutlinediput-input:-webkit-autofill": {
    //   WebkitTextFillColor: "black",
    // },
  },
  mainAutocompleteClass: {
    "& .MuiAutocomplete-inputRoot": {
      borderRadius: "0px",
    },
  },
  paymentTexts: {
    color: "white",
  },
}))

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 38,
    height: 23,
    padding: 0,
    paddingBottom: 2,
    display: "flex",
  },
  switchBase: {
    "&:hover": {
      paddingRight: "2.7px",
      paddingBottom: "3px",
      color: "#AC8159",
    },
    padding: 2,
    paddingTop: "2.2px",
    color: "#523C29",

    "&$checked": {
      transform: "translateX(16px)",
      color: "#AC8159",

      "& + $track": {
        opacity: 1,
        backgroundColor: "black",
        borderColor: "#AC8159",
      },
    },
  },
  thumb: {
    width: 14,
    height: 14,
    boxShadow: "none",
    marginTop: "1.5px",
    marginLeft: "2px",
  },
  track: {
    border: `1px solid #AC8159`,
    borderRadius: 19,
    opacity: 1,
    backgroundColor: "black",
  },
  checked: {},
}))(Switch)

const SignupSchema = yup.object().shape({
  // greetClientInfo: yup.object().shape({
  //     firstName: yup.string().required('Required'),
  //     phoneNumber: yup.number('Not a number').required('Required'),
  //     lastName: yup.string().required('Required'),
  //     email: yup.string().email('invalid email').required('Required'),
  // }),
  client: yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    address: yup.string().required("Required"),
    zip: yup.number().required("Required").typeError("Not a number"),
    email: yup.string().email("invalid email").required("Required"),
    phoneNumber: yup.number().typeError("Not a number").required("Required"),
  }),
  paymentInfo: yup.object().shape({
    // cardNumber: yup.string().required("Required"),
    month: yup.string().required("Required"),
    cvc: yup.number().required("Required").typeError("Not a number"),
  }),
})

const Payment = ({ next, back, total, formSummary, setPaymentForm }) => {
  const classes = useStyles()

  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [statesId, setStatesId] = useState(0)
  const [citiesId, setCitiesId] = useState(0)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    let componentMounted = true
    const fetchStates = async () => {
      const data = await placesApi.getStates()
      if (componentMounted) {
        setStates(data)
      }
    }
    fetchStates()
    return () => {
      componentMounted = false
    }
  }, [])

  useEffect(() => {
    let componentMounted = true
    const fetchCities = async (id) => {
      const data = await placesApi.getCities(id)
      if (componentMounted) {
        setCities(data)
      }
    }
    statesId ? fetchCities(statesId) : setCities([])
    return () => {
      componentMounted = false
    }
  }, [statesId])

  const {
    register,
    handleSubmit,
    formState: { errors },
    ...methods
  } = useForm({
    resolver: yupResolver(SignupSchema),
  })

  const [riderDetails, setRiderDetails] = React.useState(true)

  const inputStyle = {
    WebkitBoxShadow: "0 0 0 1000px transparent inset",
    height: "0px",
    // width: "100%",
  }

  const [statesIdError, setStatesIdError] = React.useState(null)
  const [citiesIdError, setCitiesIdError] = React.useState(null)
  const [cardForPaymentSubmit, setCardForPaymentSubmit] = useState(null)
  const [cardForPaymentSubmitError, setCardForPaymentSubmitError] =
    useState(null)
  const [restrictAmex, setRestrictAmex] = React.useState(false)

  const onSubmit = (data) => {
    console.log(data)
    const date = data.paymentInfo.month.split("/")
    if ((statesId, citiesId, cardForPaymentSubmit)) {
      setPaymentForm(
        { ...data },
        citiesId,
        statesId,
        date,
        cardForPaymentSubmit
      )
      next()
    } else {
      if (!statesId) {
        setStatesIdError(true)
      } else {
        setStatesIdError(false)
      }
      if (!citiesId) {
        setCitiesIdError(true)
      } else {
        setCitiesIdError(false)
      }
      if (!cardForPaymentSubmitError) {
        setCardForPaymentSubmitError(true)
      } else {
        setCardForPaymentSubmitError(false)
      }
    }
  }

  // const toggleAmex = () => setRestrictAmex(!restrictAmex)

  const [cardType, setCardType] = useState("")

  const [creditCardNum, setCreditCardNum] = useState("#### #### #### ####")

  const handleNum = (e) => {
    setCreditCardNum(e.target.rawValue)
    setCardForPaymentSubmit(e.target.value)
    console.log(e.target.value)
    // console.log(e.target.value);
  }

  const handleType = (type) => {
    setCardType(type)
    console.log(type)

    // if (type === "visa") {
    //   setCardTypeUrl(imageUrls[0])
    //   console.log("Visa")
    // } else if (type === "mastercard") {
    //   setCardTypeUrl(imageUrls[1])
    //   console.log("Mastercard")
    // } else if (type === "discover") {
    //   setCardTypeUrl(imageUrls[2])
    //   console.log("Discover")
    // } else if (type === "amex") {
    //   setCardTypeUrl(imageUrls[3])
    //   console.log("Amex")
    // } else if (type === "diners") {
    //   console.log("Diners")
    //   setCardTypeUrl(imageUrls[4])
    // } else if (type === "jcb") {
    //   console.log("JCB")
    //   setCardTypeUrl(imageUrls[5])
    // }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container justify="center" className={classes.contentContainer}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  fontFamily: "Roboto",
                  fontWeight: 500,
                  // color: "white",
                  fontSize: "22px",
                  lineHeight: "36px",
                }}
                className={classes.paymentTexts}
              >
                Payment
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    // variant="body1"
                    style={{
                      //   marginTop: "7px",
                      color: riderDetails ? "white" : "#757575",
                      fontSize: "15px",
                    }}
                    className={classes.paymentTexts}
                    // style={{}}
                  >
                    Is passenger a cardholder?
                  </Typography>
                </Grid>
                <Grid item>
                  <AntSwitch
                    checked={riderDetails}
                    onClick={() => setRiderDetails(!riderDetails)}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </Grid>
            {!riderDetails && (
              <Grid item style={{ paddingBottom: "20px" }}>
                <Grid item style={{ paddingBottom: "13px" }}>
                  <Typography
                    style={{ fontSize: "15px" }}
                    className={classes.paymentTexts}
                  >
                    Passenger Detail
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    spacing={2}
                    style={{ marginBottom: "8px" }}
                  >
                    <Grid item xs={6}>
                      <CustomFormInputForPayment
                        variant="standard"
                        name="greetClientInfo.firstName"
                        autoComplete="off"
                        placeholder="First Name"
                        className={classes.inputPlaceholderFontSize}
                        defaultValue={formSummary.greetClientInfo.firstName}
                        style={{
                          width: "100%",
                          background: "transparent",
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CustomFormInputForPayment
                        variant="standard"
                        name="greetClientInfo.lastName"
                        autoComplete="off"
                        className={classes.inputPlaceholderFontSize}
                        defaultValue={formSummary.greetClientInfo.lastName}
                        placeholder="Last Name"
                        style={{ width: "100%", background: "transparent" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    spacing={2}
                  >
                    <Grid item xs={6}>
                      <CustomFormInputForPayment
                        name="greetClientInfo.email"
                        variant="standard"
                        autoComplete="off"
                        placeholder="Email"
                        className={classes.inputPlaceholderFontSize}
                        defaultValue={formSummary.greetClientInfo.email}
                        style={{ width: "100%", background: "transparent" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CustomFormInputForPayment
                        variant="standard"
                        name="greetClientInfo.phoneNumber"
                        autoComplete="off"
                        defaultValue={formSummary.greetClientInfo.phoneNumber}
                        placeholder="Phone Number"
                        className={classes.inputPlaceholderFontSize}
                        style={{ width: "100%", background: "transparent" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
            <Grid item>
              <Grid item style={{ paddingBottom: "13px" }}>
                <Typography
                  style={{ fontSize: "15px" }}
                  className={classes.paymentTexts}
                >
                  Cardholder Information
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                justify="space-between"
                spacing={2}
              >
                <Grid item xs={6}>
                  <CustomFormInputForPayment
                    variant="standard"
                    name="client.firstName"
                    autoComplete="off"
                    className={classes.inputPlaceholderFontSize}
                    defaultValue={formSummary.client.firstName}
                    style={{
                      fontSize: "14px",
                      width: "100%",
                      background: "transparent",
                    }}
                    placeholder="First Name"
                    error={errors.client?.firstName ? true : false}
                  />
                  {errors.client?.firstName && (
                    <p className={classes.error}>
                      {errors.client?.firstName.message}
                    </p>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <CustomFormInputForPayment
                    variant="standard"
                    name="client.lastName"
                    autoComplete="off"
                    placeholder="Last Name"
                    className={classes.inputPlaceholderFontSize}
                    defaultValue={formSummary.client.lastName}
                    style={{ width: "100%", background: "transparent" }}
                    error={errors.client?.lastName ? true : false}
                  />
                  {errors.client?.lastName && (
                    <p className={classes.error}>
                      {errors.client?.lastName.message}
                    </p>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                spacing={2}
              >
                <Grid item xs={6}>
                  <CustomFormInputForPayment
                    name="client.email"
                    variant="standard"
                    autoComplete="off"
                    className={classes.inputPlaceholderFontSize}
                    placeholder="Email"
                    style={{ width: "100%", background: "transparent" }}
                    defaultValue={formSummary.client.email}
                    error={errors.client?.email ? true : false}
                  />
                  {errors.client?.email && (
                    <p className={classes.error}>
                      {errors.client?.email.message}
                    </p>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <CustomFormInputForPayment
                    variant="standard"
                    name="client.phoneNumber"
                    autoComplete="off"
                    className={classes.inputPlaceholderFontSize}
                    defaultValue={formSummary.client.phoneNumber}
                    placeholder="Phone Number"
                    style={{ width: "100%", background: "transparent" }}
                    error={errors.client?.phoneNumber ? true : false}
                  />
                  {errors.client?.phoneNumber && (
                    <p className={classes.error}>
                      {errors.client?.phoneNumber.message}
                    </p>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <CustomFormInputForPayment
                name="client.address"
                variant="standard"
                autoComplete="off"
                className={classes.inputPlaceholderFontSize}
                style={{ height: "100%", background: "transparent" }}
                placeholder="Address"
                defaultValue={formSummary.client.address}
                fullWidth
                error={errors.client?.address ? true : false}
              />
            </Grid>
            {errors.client?.address && (
              <p style={{ marginLeft: "10px" }} className={classes.error}>
                {errors.client?.address.message}
              </p>
            )}
            <Grid item>
              <Autocomplete
                id="combo-box-demo"
                options={states}
                defaultValue={null}
                autoComplete="off"
                autoHighlight
                disablePortal
                className={classes.mainAutocompleteClass}
                InputProps={{
                  classes: {
                    root: classes.inputRootAutocomplete2,
                  },
                }}
                classes={{
                  popupIndicator: classes.popupIndicator,
                  option: classes.option,
                  paper: classes.selectedOption,
                }}
                getOptionLabel={(option) => option.name}
                renderOption={(option) => (
                  <div style={{ fontSize: "14px" }}>
                    <span style={{ fontSize: "14px" }}>{option.code}</span>
                    {option.name} ({option.code})
                  </div>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    className={classes.inputPlaceholderFontSize}
                    placeholder="State"
                    // variant="standard"
                    style={{ background: "transparent" }}
                    autoComplete="off"
                    InputProps={{
                      ...params.InputProps,
                      style: { inputStyle },
                      classes: {
                        root: classes.inputRootAutocomplete,
                        underline: classes.noBorder,
                        input: classes.input,
                      },
                      // disableUnderline: true,
                    }}
                  />
                )}
                onChange={(event, newValue) => {
                  newValue ? setStatesId(newValue.id) : setStatesId(null)
                }}
                name="stateId"
              />
              {statesIdError && <p className={classes.error}>Required</p>}
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                spacing={2}
              >
                <Grid item xs={6}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={cities}
                    key={statesId}
                    autoComplete="off"
                    defaultValue={null}
                    autoHighlight
                    disablePortal
                    getOptionLabel={(option) => option.name}
                    className={classes.mainAutocompleteClass}
                    classes={{
                      popupIndicator: classes.popupIndicator,
                      option: classes.option,
                      paper: classes.selectedOption,
                    }}
                    renderOption={(option) => (
                      <div style={{ fontSize: "13px" }}>
                        <span style={{ fontSize: "14px" }}>{option.code}</span>
                        {option.name} ({option.code})
                      </div>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        className={classes.inputPlaceholderFontSize}
                        placeholder="Cities"
                        variant="standard"
                        style={{ background: "transparent" }}
                        InputProps={{
                          ...params.InputProps,
                          style: { inputStyle },
                          classes: {
                            root: classes.inputRootAutocomplete,
                            underline: classes.noBorder,
                            input: classes.input,
                          },
                          // disableUnderline: true,
                        }}
                      />
                    )}
                    onChange={(event, newValue) => {
                      newValue ? setCitiesId(newValue.id) : setCitiesId(null)
                    }}
                    name="cityId"
                  />
                  {citiesIdError && <p className={classes.error}>Required</p>}
                </Grid>
                <Grid item xs={6}>
                  <CustomFormInputForPayment
                    variant="standard"
                    name="client.zip"
                    autoComplete="off"
                    className={classes.inputPlaceholderFontSize}
                    placeholder="ZIP"
                    style={{ width: "100%", background: "transparent" }}
                    defaultValue={formSummary.client.zip}
                    error={errors.client?.address ? true : false}
                  />
                  {errors.client?.zip && (
                    <p className={classes.error}>
                      {errors.client?.zip.message}
                    </p>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                style={{ fontSize: "15px" }}
                className={classes.paymentTexts}
              >
                Card information
              </Typography>
            </Grid>
            <Grid item>
              {/* <CustomMaskInput
                name="paymentInfo.cardNumber"
                mask="9999-9999-9999-9999"
                autoComplete="off"
                defaultValue={formSummary.paymentInfo.cardNumber}
              >
                {() => (
                  <TextField
                    variant="standard"
                    className={classes.inputPlaceholderFontSize}
                    placeholder="Card number/0000 0000 0000 0000"
                    autoComplete="off"
                    style={{ background: "transparent" }}
                    fullWidth
                    error={errors.paymentInfo?.cardNumber ? true : false}
                    // inputProps={{ style: inputStyle }}
                    InputProps={{
                      // ...params.InputProps,
                      // style: { inputStyle },
                      classes: {
                        root: classes.inputRootAutocompleteCardNumber,
                        underline: classes.noBorder,
                        input: classes.input,
                      },
                      // disableUnderline: true,
                    }}
                  />
                )}
              </CustomMaskInput> */}

              <Cleave
                delimiter="-"
                options={{
                  creditCard: true,
                  onCreditCardTypeChanged: handleType,
                }}
                name="paymentInfo.cardNumber"
                error={errors.paymentInfo?.cardNumber ? true : false}
                onChange={handleNum}
                placeholder="Card number"
                className="credit-card-input-by-bookinglane"
              />

              {cardForPaymentSubmitError && (
                <p className={classes.error}>Required</p>
              )}
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                spacing={2}
              >
                <Grid item xs={6}>
                  <CustomMaskInput
                    name="paymentInfo.month"
                    mask="99/99"
                    autoComplete="off"
                    defaultValue={`${formSummary.paymentInfo.month}/${formSummary.paymentInfo.year}`}
                  >
                    {() => (
                      <TextField
                        variant="standard"
                        className={classes.inputPlaceholderFontSize}
                        placeholder="mm/yy"
                        autoComplete="off"
                        fullWidth
                        error={errors.paymentInfo?.month ? true : false}
                        style={{ background: "transparent" }}
                        // inputProps={{ style: inputStyle }}
                        InputProps={{
                          // ...params.InputProps,
                          classes: {
                            root: classes.inputRootAutocompleteCardNumber,
                            underline: classes.noBorder,
                            input: classes.input,
                          },
                          // disableUnderline: true,
                        }}
                      />
                    )}
                  </CustomMaskInput>
                  {errors.paymentInfo?.month && (
                    <p className={classes.error}>
                      {errors.paymentInfo?.month.message}
                    </p>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <CustomMaskInput
                    name="paymentInfo.cvc"
                    type="date"
                    mask={cardType == "amex" ? "9999" : "999"}
                    autoComplete="off"
                    defaultValue={formSummary.paymentInfo.cvc}
                  >
                    {() => (
                      <TextField
                        variant="standard"
                        className={classes.inputPlaceholderFontSize}
                        placeholder="CVV/CVC"
                        autoComplete="off"
                        fullWidth
                        error={errors.paymentInfo?.cvc ? true : false}
                        style={{ background: "transparent" }}
                        // inputProps={{ style: inputStyle }}
                        InputProps={{
                          // ...params.InputProps,
                          classes: {
                            root: classes.inputRootAutocompleteCardNumber,
                            underline: classes.noBorder,
                            input: classes.input,
                          },
                          // disableUnderline: true,
                        }}
                      />
                    )}
                  </CustomMaskInput>
                  {errors.paymentInfo?.cvc && (
                    <p className={classes.error}>
                      {errors.paymentInfo?.cvc.message}
                    </p>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Checkbox
                style={{ color: "#9e9e9e" }}
                onClick={() => setChecked(!checked)}
                className={classes.checkboxMain}
                InputProps={{
                  classes: {
                    root: classes.checkbox,
                  },
                }}
              />
              <Link underline="always" style={{ color: "#BABABA" }}>
                <TermsOfUse />
              </Link>
              <Link underline="always" style={{ color: "#BABABA" }}>
                <PrivacyPolicy />
              </Link>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
                spacing={1}
                className={classes.buttonGroup}
              >
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={back}
                    startIcon={<BackArrowIcon />}
                    className={classes.backButtonSelf}
                    style={{
                      height: "50px",

                      textTransform: "none",
                    }}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    color="primary"
                    className={classes.payButtonSelf}
                    style={{
                      height: "50px",

                      textTransform: "none",
                    }}
                    disabled={!checked}
                  >
                    Pay ${total}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  )
}

const mapStateToProps = (state) => {
  return {
    total: state.formData.orderSum,
    formSummary: state.formData,
  }
}

export default connect(mapStateToProps, { setPaymentForm })(Payment)
