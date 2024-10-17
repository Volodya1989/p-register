import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState, useRef } from "react";
import useFetch from "use-http";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import { InputField } from "components/FormComponents/InputField/InputField";
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
    // register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { loading } = useFetch();
  const [sacrament, setSacrament] = useState("Baptism");
  const [neophyteFirstName, setNeophyteFirstName] = useState(null);
  const [certificate, setCertificate] = useState("Certificate");
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
      if (e.currentTarget.name === "sacrament") {
        setSacrament(e.currentTarget.value.trim());
      }
      if (e.currentTarget.name === "neophyteFirstName") {
        setNeophyteFirstName(e.currentTarget.value.trim());
      }
    },
    [setSacrament]
  );
  console.log("currentValue of the sacrament", sacrament);

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
      })
    ).then((data) => {
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
              <InputField
                onQueryChange={onQueryChange}
                fieldValue={"Baptism"}
                fieldName={"sacrament"}
                disabledStatus={true}
                labelName={"Sacrament"}
              />
              <FormControlLabel
                label={"Certificate"}
                control={
                  <Controller
                    name="certificate"
                    control={control}
                    defaultValue={true}
                    value={certificate}
                    render={({ field }) => (
                      <Checkbox {...field} defaultChecked />
                    )}
                    onClick={(e) => {
                      setCertificate(e.target.checked);
                    }}
                  />
                }
              />
            </Description>

            <Description>
              <SubHeading>{"Neophyte"}</SubHeading>

              <InputField
                onQueryChange={onQueryChange}
                fieldValue={neophyteFirstName}
                fieldName={"neophyteFirstName"}
                disabledStatus={false}
                labelName={"First Name"}
              />
            </Description>

            {/* <Grid item xs={4} key={i}>
              <FormControlLabel
                value={option.id}
                control={<Checkbox />}
                label={option.name}
                name={`techStack[${option.id}]`}
                inputRef={register}
              />
              </Grid> */}

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
