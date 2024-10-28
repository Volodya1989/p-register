import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState, useRef } from "react";
import useFetch from "use-http";

import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";
// import { InputField } from "components/FormComponents/InputField/InputField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Field, Wrapper, Label, SubDescr } from "./AddBaptismForm.styled";
import {
  Description,
  Heading,
  ErrorMessage,
  MainButton,
  ContainerLoader,
  SubHeading,
} from "./AddBaptismForm.styled";
import Loader from "components/Loader";
import { useDispatch } from "react-redux";
import { addBaptism } from "redux/baptisms/operations";

export const AddBaptismForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { loading } = useFetch();
  const [sacrament, setSacrament] = useState("Baptism");
  const [neophyteFirstName, setNeophyteFirstName] = useState("");
  const [neophyteLastName, setNeophyteLastName] = useState("");
  const [neophyteMiddleName, setNeophyteMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cityOfBirth, setCityOfBirth] = useState("");
  const [stateOfBirth, setStateOfBirth] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setstate] = useState("");
  const [zip, setZip] = useState("");
  const [motherFirstName, setMotherFirstName] = useState("");
  const [motherLastName, setMotherLastName] = useState("");
  const [motherPhoneNumber, setMotherPhoneNumber] = useState("");
  const [fatherFirstName, setFatherFirstName] = useState("");
  const [fatherLastName, setFatherLastName] = useState("");
  const [fatherPhoneNumber, setFatherPhoneNumber] = useState("");

  const [certificate, setCertificate] = useState(false);
  const [baptism, setBaptism] = useState(true);
  const [eucharist, setEucharist] = useState(false);
  const [chrismation, setChrismation] = useState(false);
  const [BtnName, setBtnName] = useState("Save");
  // const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const timeoutRef = useRef(null);

  //setting query state on change and passing it as props to search component
  const onQueryChange = useCallback(
    (e) => {
      if (e.currentTarget.value === " ") {
        return;
      }
      let curValue = e.currentTarget.name;
      switch (curValue) {
        case "sacrament":
          setSacrament(e.currentTarget.value.trim());
          console.log("SACRAMENT", e.currentTarget.value.trim());
          break;
        case "neophyteFirstName":
          setNeophyteFirstName(e.currentTarget.value.trim());
          break;
        case "neophyteLastName":
          setNeophyteLastName(e.currentTarget.value.trim());
          break;
        case "neophyteMiddleName":
          setNeophyteMiddleName(e.currentTarget.value.trim());
          break;
        case "email":
          setEmail(e.currentTarget.value.trim());
          break;
        case "phone":
          setPhone(e.currentTarget.value.trim());
          break;
        case "cityOfBirth":
          setCityOfBirth(e.currentTarget.value.trim());
          break;
        case "stateOfBirth":
          setStateOfBirth(e.currentTarget.value.trim());
          break;
        case "street":
          setStreet(e.currentTarget.value.trim());
          break;
        case "city":
          setCity(e.currentTarget.value.trim());
          break;
        case "state":
          setstate(e.currentTarget.value.trim());
          break;
        case "zip":
          setZip(e.currentTarget.value.trim());
          break;
        case "motherFirstName":
          setMotherFirstName(e.currentTarget.value.trim());
          break;
        case "motherLastName":
          setMotherLastName(e.currentTarget.value.trim());
          break;
        case "motherPhoneNumber":
          setMotherPhoneNumber(e.currentTarget.value.trim());
          break;
        case "fatherFirstName":
          setFatherFirstName(e.currentTarget.value.trim());
          break;
        case "fatherLastName":
          setFatherLastName(e.currentTarget.value.trim());
          break;
        case "fatherPhoneNumber":
          setFatherPhoneNumber(e.currentTarget.value.trim());
          break;

        default:
          console.log("default");
      }
    },
    [setSacrament]
  );

  const onSubmitForm = (data) => {
    setIsSubmitSuccessful(true);
    console.log("data", data);
    if (data.sacrament === "") {
      return;
    } else {
      // setSacrament("");
      setIsLoading(true);
      // setActive(true);
    }
    const {
      sacrament,
      certificate,
      baptism,
      eucharist,
      date,
      neophyteFirstName,
      neophyteLastName,
      neophyteMiddleName,
      email,
      phone,
      dob,
      cityOfBirth,
      stateOfBirth,
      street,
      city,
      state,
      zip,
      motherFirstName,
      motherLastName,
      motherPhoneNumber,
      fatherFirstName,
      fatherLastName,
      fatherPhoneNumber,
    } = data;
    dispatch(
      addBaptism({
        sacrament,
        certificate,
        baptism,
        eucharist,
        date: date?.$d,
        neophyte: {
          firstName: neophyteFirstName,
          lastName: neophyteLastName,
          middleName: neophyteMiddleName,
          email,
          phone,
          dob: dob?.$d,
          cityOfBirth,
          stateOfBirth,
          street,
          city,
          state,
          zip,
        },
        mother: {
          maidenName: motherLastName,
          firstName: motherFirstName,
          phone: motherPhoneNumber,
        },
        father: {
          lastName: fatherLastName,
          firstName: fatherFirstName,
          phone: fatherPhoneNumber,
        },
      })
    ).then((data) => {
      console.log("Data", data.meta.arg);
      try {
        clearTimeout(timeoutRef.current);
        setIsLoading(false);
        if (data?.error?.message) {
          const { payload: errorMessage } = data;
          console.log("ERROR", errorMessage);
          // setActive(true);
          setTimeout(() => {
            // setActive(false);
          }, 4000);
        }
        if (!data?.error?.message) {
          // setActive(true);
          // setSacrament("");
          setBtnName("Saving...");
          setTimeout(() => {
            // setActive(false);
            setBtnName("Save");
          }, 2000);
        }
      } catch (error) {
        console.log("error", error.message);
      }
    });
  };

  const handleLoading = useCallback(
    (e) => {
      if (!loading && !isSubmitSuccessful) {
        setTimeout(() => {
          setIsLoading(true);
        }, 1000);
      }
    },
    [loading, isSubmitSuccessful]
  );

  useEffect(() => {
    handleLoading();
  }, [handleLoading]);
  return (
    <>
      {!isLoading && !isSubmitSuccessful ? (
        <Loader />
      ) : (
        <>
          <ContainerLoader>
            {isLoading && isSubmitSuccessful && <Loader />}
          </ContainerLoader>

          <Heading>{`Add Baptism Form`}</Heading>

          <form onSubmit={handleSubmit((data) => onSubmitForm(data))}>
            {errors.sacrament && (
              <ErrorMessage>Sacrament is required.</ErrorMessage>
            )}

            <Description>
              <SubHeading>{"General Information"}</SubHeading>
              {/* <InputField
                onQueryChange={onQueryChange}
                fieldValue={sacrament}
                fieldName={"sacrament"}
                disabledStatus={true}
                labelName={"Sacrament"}
              /> */}

              <Wrapper>
                <Field
                  {...register("sacrament", {
                    required: true,
                    value: sacrament,
                  })}
                  onChange={onQueryChange}
                  name={"sacrament"}
                  value={sacrament}
                  autoComplete="off"
                  type={"text"}
                  disabled={true}
                />
                <Label htmlFor={1}>{"Sacrament"}</Label>
              </Wrapper>
              <FormControlLabel
                label={"Certificate"}
                control={
                  <Controller
                    name="certificate"
                    control={control}
                    defaultValue={false}
                    value={certificate}
                    render={({ field }) => (
                      <Checkbox {...field} color="success" />
                    )}
                    onClick={(e) => {
                      setCertificate(e.target.checked);
                    }}
                  />
                }
              />
              <FormControlLabel
                label={"Baptism"}
                control={
                  <Controller
                    name="baptism"
                    control={control}
                    defaultValue={true}
                    value={baptism}
                    render={({ field }) => (
                      <Checkbox {...field} defaultChecked color="success" />
                    )}
                    onClick={(e) => {
                      setBaptism(e.target.checked);
                    }}
                  />
                }
              />
              <FormControlLabel
                label={"Eucharist"}
                control={
                  <Controller
                    name="eucharist"
                    control={control}
                    defaultValue={false}
                    value={eucharist}
                    render={({ field }) => (
                      <Checkbox {...field} color="success" />
                    )}
                    onClick={(e) => {
                      setEucharist(e.target.checked);
                    }}
                  />
                }
              />
              <FormControlLabel
                label={"Chrismation"}
                control={
                  <Controller
                    name="chrismation"
                    control={control}
                    defaultValue={false}
                    value={chrismation}
                    render={({ field }) => (
                      <Checkbox {...field} color="success" />
                    )}
                    onClick={(e) => {
                      setChrismation(e.target.checked);
                    }}
                  />
                }
              />
              <Controller
                name="date"
                control={control}
                defaultValue={null}
                render={({ field, ...props }) => {
                  return (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Sacrament Performed"
                        value={field.value}
                        onChange={(date) => {
                          console.log({ date });
                          field.onChange(date);
                        }}
                        variant="inline"
                        autoOk
                        format="DD/MM/YYYY"
                      />
                    </LocalizationProvider>
                  );
                }}
              />
            </Description>

            <Description>
              <SubHeading>{"Neophyte"}</SubHeading>
              <Wrapper>
                <Field
                  {...register("neophyteFirstName", {
                    required: true,
                    value: neophyteFirstName,
                  })}
                  onChange={onQueryChange}
                  name={"neophyteFirstName"}
                  value={neophyteFirstName}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"First Name"}</Label>
              </Wrapper>
              <Wrapper>
                <Field
                  {...register("neophyteLastName", {
                    required: true,
                    value: neophyteLastName,
                  })}
                  onChange={onQueryChange}
                  name={"neophyteLastName"}
                  value={neophyteLastName}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"Last Name"}</Label>
              </Wrapper>
              <Wrapper>
                <Field
                  {...register("neophyteMiddleName", {
                    required: true,
                    value: neophyteMiddleName,
                  })}
                  onChange={onQueryChange}
                  name={"neophyteMiddleName"}
                  value={neophyteMiddleName}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"Middle Name (optional)"}</Label>
              </Wrapper>
              <Wrapper>
                <Field
                  {...register("email", {
                    required: true,
                    value: email,
                  })}
                  onChange={onQueryChange}
                  name={"email"}
                  value={email}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"Email"}</Label>
              </Wrapper>
              <Wrapper>
                <Field
                  {...register("phone", {
                    required: true,
                    value: phone,
                  })}
                  onChange={onQueryChange}
                  name={"phone"}
                  value={phone}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"Phone"}</Label>
              </Wrapper>
              <Controller
                name="dob"
                control={control}
                defaultValue={null}
                render={({ field, ...props }) => {
                  return (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="DOB"
                        value={field.value}
                        onChange={(date) => {
                          console.log({ date });
                          field.onChange(date);
                        }}
                        variant="inline"
                        autoOk
                        format="DD/MM/YYYY"
                      />
                    </LocalizationProvider>
                  );
                }}
              />
              <Wrapper>
                <Field
                  {...register("cityOfBirth", {
                    required: true,
                    value: cityOfBirth,
                  })}
                  onChange={onQueryChange}
                  name={"cityOfBirth"}
                  value={cityOfBirth}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"City of Birth"}</Label>
              </Wrapper>
              <Wrapper>
                <Field
                  {...register("stateOfBirth", {
                    required: true,
                    value: stateOfBirth,
                  })}
                  onChange={onQueryChange}
                  name={"stateOfBirth"}
                  value={stateOfBirth}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"State of Birth"}</Label>
              </Wrapper>
              <Wrapper>
                <Field
                  {...register("street", {
                    required: true,
                    value: street,
                  })}
                  onChange={onQueryChange}
                  name={"street"}
                  value={street}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"Street"}</Label>
              </Wrapper>
              <Wrapper>
                <Field
                  {...register("city", {
                    required: true,
                    value: city,
                  })}
                  onChange={onQueryChange}
                  name={"city"}
                  value={city}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"City"}</Label>
              </Wrapper>
              <Wrapper>
                <Field
                  {...register("state", {
                    required: true,
                    value: state,
                  })}
                  onChange={onQueryChange}
                  name={"state"}
                  value={state}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"State"}</Label>
              </Wrapper>
              <Wrapper>
                <Field
                  {...register("zip", {
                    required: true,
                    value: zip,
                  })}
                  onChange={onQueryChange}
                  name={"zip"}
                  value={zip}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"Zip"}</Label>
              </Wrapper>
            </Description>

            <Description>
              <SubHeading>{"Parents"}</SubHeading>
              <SubDescr>{"Mother"}</SubDescr>
              <Wrapper>
                <Field
                  {...register("motherFirstName", {
                    required: true,
                    value: motherFirstName,
                  })}
                  onChange={onQueryChange}
                  name={"motherFirstName"}
                  value={motherFirstName}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"First Name"}</Label>
              </Wrapper>
              <Wrapper>
                <Field
                  {...register("motherLastName", {
                    required: true,
                    value: motherLastName,
                  })}
                  onChange={onQueryChange}
                  name={"motherLastName"}
                  value={motherLastName}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"Last Name"}</Label>
              </Wrapper>{" "}
              <Wrapper>
                <Field
                  {...register("motherPhoneNumber", {
                    required: true,
                    value: motherPhoneNumber,
                  })}
                  onChange={onQueryChange}
                  name={"motherPhoneNumber"}
                  value={motherPhoneNumber}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"Phone"}</Label>
              </Wrapper>
              <SubDescr>{"Father"}</SubDescr>
              <Wrapper>
                <Field
                  {...register("fatherFirstName", {
                    required: true,
                    value: fatherFirstName,
                  })}
                  onChange={onQueryChange}
                  name={"fatherFirstName"}
                  value={fatherFirstName}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"First Name"}</Label>
              </Wrapper>
              <Wrapper>
                <Field
                  {...register("fatherLastName", {
                    required: true,
                    value: fatherLastName,
                  })}
                  onChange={onQueryChange}
                  name={"fatherLastName"}
                  value={fatherLastName}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"Last Name"}</Label>
              </Wrapper>{" "}
              <Wrapper>
                <Field
                  {...register("fatherPhoneNumber", {
                    required: true,
                    value: fatherPhoneNumber,
                  })}
                  onChange={onQueryChange}
                  name={"fatherPhoneNumber"}
                  value={fatherPhoneNumber}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"Phone"}</Label>
              </Wrapper>
            </Description>

            <MainButton
              // disabled={password && sacrament ? active : true}
              type="submit"
              value={isLoading && isSubmitSuccessful ? "Saving..." : BtnName}
            />
          </form>
        </>
      )}
    </>
  );
};
export default AddBaptismForm;
