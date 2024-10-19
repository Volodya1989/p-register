import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState, useRef } from "react";
import useFetch from "use-http";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";
// import { InputField } from "components/FormComponents/InputField/InputField";
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
  const [certificate, setCertificate] = useState("certificate");
  const [baptism, setBaptism] = useState("baptism");
  const [eucharist, setEucharist] = useState("eucharist");
  const [chrismation, setChrismation] = useState("chrismation");
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
        case "neophyteFirstName": // Value of foo matches this criteria; execution starts from here
          setNeophyteFirstName(e.currentTarget.value.trim());
          break;
        // Forgotten break! Execution falls through
        // case "chrismation":
        //   setChrismation(e.currentTarget.value.trim());
        //   break;
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
        neophyte: {
          firstName: data.neophyteFirstName,
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
                <Label htmlFor={1}>{"First Name"}</Label>
              </Wrapper>
              <FormControlLabel
                label={"Certificate"}
                control={
                  <Controller
                    name="certificate"
                    control={control}
                    defaultValue={true}
                    value={certificate}
                    render={({ field }) => <Checkbox {...field} />}
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
                    render={({ field }) => <Checkbox {...field} />}
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
                    defaultValue={true}
                    value={eucharist}
                    render={({ field }) => <Checkbox {...field} />}
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
                    defaultValue={true}
                    value={chrismation}
                    render={({ field }) => <Checkbox {...field} />}
                    onClick={(e) => {
                      setChrismation(e.target.checked);
                    }}
                  />
                }
              />
            </Description>

            <Description>
              <SubHeading>{"Neophyte"}</SubHeading>

              {/* <InputField
                onQueryChange={onQueryChange}
                fieldValue={neophyteFirstName}
                fieldName={"neophyteFirstName"}
                disabledStatus={false}
                labelName={"First Name"}
              /> */}
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
                  disabled={false}
                />
                <Label htmlFor={1}>{"First Name"}</Label>
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
