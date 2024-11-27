import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState, useRef } from "react";
import useFetch from "use-http";
import moment from "moment";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";
// import { InputField } from "components/FormComponents/InputField/InputField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  dateSacramentPerformed: yup.date().required(),
  neophyte: yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().required(),
    dob: yup.string().required(),
    cityOfBirth: yup.string().required(),
    stateOfBirth: yup.string().required(),
    street: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
  }),
  mother: yup.object().shape({
    maidenName: yup.string().required(),
    firstName: yup.string().required(),
    phone: yup.string().required(),
  }),
});

export const AddBaptismForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });
  const { loading } = useFetch();
  const [sacrament, setSacrament] = useState("Baptism");
  const [neophyteFirstName, setNeophyteFirstName] = useState(null);
  const [neophyteLastName, setNeophyteLastName] = useState(null);
  const [neophyteMiddleName, setNeophyteMiddleName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [cityOfBirth, setCityOfBirth] = useState(null);
  const [stateOfBirth, setStateOfBirth] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setstate] = useState(null);
  const [zip, setZip] = useState(null);
  const [motherFirstName, setMotherFirstName] = useState(null);
  const [motherLastName, setMotherLastName] = useState(null);
  const [motherPhoneNumber, setMotherPhoneNumber] = useState(null);
  const [fatherFirstName, setFatherFirstName] = useState(null);
  const [fatherLastName, setFatherLastName] = useState(null);
  const [fatherPhoneNumber, setFatherPhoneNumber] = useState(null);
  const [firstGodparentFirstName, setFirstGodparentFirstName] = useState(null);
  const [firstGodparentLastName, setFirstGodparentLastName] = useState(null);
  const [firstGodparentPhoneNumber, setFirstGodparentPhoneNumber] =
    useState(null);
  const [secondGodparentFirstName, setSecondGodparentFirstName] =
    useState(null);
  const [secondGodparentLastName, setSecondGodparentLastName] = useState(null);
  const [priestFirstName, setPriestFirstName] = useState(null);
  const [priestLastName, setPriestLastName] = useState(null);
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
        case "firstGodparentFirstName":
          setFirstGodparentFirstName(e.currentTarget.value.trim());
          break;
        case "firstGodparentLastName":
          setFirstGodparentLastName(e.currentTarget.value.trim());
          break;
        case "firstGodparentPhoneNumber":
          setFirstGodparentPhoneNumber(e.currentTarget.value.trim());
          break;
        case "secondGodparentFirstName":
          setSecondGodparentFirstName(e.currentTarget.value.trim());
          break;
        case "secondGodparentLastName":
          setSecondGodparentLastName(e.currentTarget.value.trim());
          break;
        case "priestFirstName":
          setPriestFirstName(e.currentTarget.value.trim());
          break;
        case "priestLastName":
          setPriestLastName(e.currentTarget.value.trim());
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
      firstGodparentFirstName,
      firstGodparentLastName,
      firstGodparentPhoneNumber,
      secondGodparentFirstName,
      secondGodparentLastName,
      priestFirstName,
      priestLastName,
    } = data;

    dispatch(
      addBaptism({
        sacrament,
        certificate,
        baptism,
        eucharist,
        dateSacramentPerformed: moment(date?.$d).format("YYYY-MM-DD"),
        neophyte: {
          firstName: neophyteFirstName,
          lastName: neophyteLastName,
          middleName: neophyteMiddleName,
          email,
          phone,
          dob: moment(dob?.$d).format("YYYY-MM-DD"),
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
        godParent_1: {
          lastName: firstGodparentLastName,
          firstName: firstGodparentFirstName,
          phone: firstGodparentPhoneNumber,
        },
        godParent_2: {
          lastName: secondGodparentLastName,
          firstName: secondGodparentFirstName,
        },
        priest: {
          firstName: priestFirstName,
          lastName: priestLastName,
        },
      })
    ).then((data) => {
      console.log("Data ", data.meta.arg);
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

              {errors.dateSacramentPerformed?.message && (
                <ErrorMessage>{`Date when sacrament performed is required`}</ErrorMessage>
              )}

              <SubHeading>{"Priest"}</SubHeading>
              <Wrapper>
                <Field
                  {...register("priestFirstName", {
                    required: true,
                    value: priestFirstName,
                  })}
                  onChange={onQueryChange}
                  name={"priestFirstName"}
                  value={priestFirstName}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"First Name"}</Label>
              </Wrapper>
              <Wrapper>
                <Field
                  {...register("priestLastName", {
                    required: true,
                    value: priestLastName,
                  })}
                  onChange={onQueryChange}
                  name={"priestLastName"}
                  value={priestLastName}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"Last Name"}</Label>
              </Wrapper>
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
              {errors?.neophyte?.firstName?.message && (
                <ErrorMessage>{`First name is required`}</ErrorMessage>
              )}
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
              {errors?.neophyte?.lastName?.message && (
                <ErrorMessage>{`Last name is required`}</ErrorMessage>
              )}
              <Wrapper>
                <Field
                  {...register("neophyteMiddleName", {
                    required: false,
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
              {errors.email?.message && (
                <ErrorMessage>{`Email is required`}</ErrorMessage>
              )}
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
              {errors.neophyte?.phone?.message && (
                <ErrorMessage>{`Phone is required`}</ErrorMessage>
              )}
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
              {errors.neophyte?.dob?.message && (
                <ErrorMessage>{`Date of birth is required`}</ErrorMessage>
              )}
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
              {errors.neophyte?.cityOfBirth?.message && (
                <ErrorMessage>{`City of Birth is required`}</ErrorMessage>
              )}
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
              {errors.neophyte?.stateOfBirth?.message && (
                <ErrorMessage>{`State of Birth is required`}</ErrorMessage>
              )}
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
              {errors.neophyte?.street?.message && (
                <ErrorMessage>{`Street is required`}</ErrorMessage>
              )}
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
              {errors.neophyte?.city?.message && (
                <ErrorMessage>{`City is required`}</ErrorMessage>
              )}
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
              {errors.neophyte?.state?.message && (
                <ErrorMessage>{`State is required`}</ErrorMessage>
              )}
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
            {errors.neophyte?.zip?.message && (
              <ErrorMessage>{`Zip is required`}</ErrorMessage>
            )}
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
              {errors.mother?.firstName?.message && (
                <ErrorMessage>{`First name is required`}</ErrorMessage>
              )}
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
                    required: false,
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
                    required: false,
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

            <Description>
              <SubHeading>{"Godparents"}</SubHeading>
              <SubDescr>{"First Godparent"}</SubDescr>
              <Wrapper>
                <Field
                  {...register("firstGodparentFirstName", {
                    required: true,
                    value: firstGodparentFirstName,
                  })}
                  onChange={onQueryChange}
                  name={"firstGodparentFirstName"}
                  value={firstGodparentFirstName}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"First Name"}</Label>
              </Wrapper>
              <Wrapper>
                <Field
                  {...register("firstGodparentLastName", {
                    required: true,
                    value: firstGodparentLastName,
                  })}
                  onChange={onQueryChange}
                  name={"firstGodparentLastName"}
                  value={firstGodparentLastName}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"Last Name"}</Label>
              </Wrapper>{" "}
              <Wrapper>
                <Field
                  {...register("firstGodparentPhoneNumber", {
                    required: false,
                    value: firstGodparentPhoneNumber,
                  })}
                  onChange={onQueryChange}
                  name={"firstGodparentPhoneNumber"}
                  value={firstGodparentPhoneNumber}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"Phone"}</Label>
              </Wrapper>
              <SubDescr>{"Second Godparent"}</SubDescr>
              <Wrapper>
                <Field
                  {...register("secondGodparentFirstName", {
                    required: false,
                    value: secondGodparentFirstName,
                  })}
                  onChange={onQueryChange}
                  name={"secondGodparentFirstName"}
                  value={secondGodparentFirstName}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"First Name"}</Label>
              </Wrapper>
              <Wrapper>
                <Field
                  {...register("secondGodparentLastName", {
                    required: false,
                    value: secondGodparentLastName,
                  })}
                  onChange={onQueryChange}
                  name={"secondGodparentLastName"}
                  value={secondGodparentLastName}
                  autoComplete="off"
                  type={"text"}
                />
                <Label htmlFor={1}>{"Last Name"}</Label>
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
