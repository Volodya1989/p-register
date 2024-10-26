import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState, useRef } from "react";
import useFetch from "use-http";

import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";
// import { InputField } from "components/FormComponents/InputField/InputField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Field, Wrapper, Label } from "./AddBaptismForm.styled";
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

  const [certificate, setCertificate] = useState(false);
  const [baptism, setBaptism] = useState(true);
  const [eucharist, setEucharist] = useState(false);
  const [chrismation, setChrismation] = useState(false);
  const [BtnName, setBtnName] = useState("Save");
  // const [curDate, setCurDate] = useState(new Date());
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
        case "neophyteFirstName": // Value of foo matches this criteria; execution starts from here
          setNeophyteFirstName(e.currentTarget.value.trim());
          break;
        case "neophyteLastName": // Value of foo matches this criteria; execution starts from here
          setNeophyteLastName(e.currentTarget.value.trim());
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

    dispatch(
      addBaptism({
        sacrament: data.sacrament,
        certificate: data.certificate,
        baptism: data.baptism,
        eucharist: data.eucharist,
        data: data.date.$d,
        neophyte: {
          firstName: data.neophyteFirstName,
          lastName: data.neophyteLastName,
        },
      })
    ).then((data) => {
      console.log("certificate log", data);
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
                        value={field.value}
                        onChange={(date) => {
                          console.log({ date });
                          field.onChange(date);
                        }}
                        variant="inline"
                        autoOk
                        format="DD/MM/YYYY"
                        // onChange={(e) => field.onChange(e)}
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
