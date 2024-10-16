import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFetch from "use-http";
import {
  Description,
  Heading,
  Label,
  Field,
  Wrapper,
  ErrorMessage,
  MainButton,
  ProtectedEye,
  ContainerLoader,
} from "./AddBaptismForm.styled";
import { ToastContainer } from "react-toastify";
import { StyledToastContainer } from "components/RegisterForm/RegisterForm.styled";
import Loader from "components/Loader";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addBaptism } from "redux/baptisms/operations";

export const AddBaptismForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loading } = useFetch();
  const [password, setPassword] = useState("");
  const [sacrament, setSacrament] = useState("");
  const [BtnName, setBtnName] = useState("Log In");
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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
      if (e.currentTarget.name === "password") {
        setPassword(e.currentTarget.value.trim());
      }
    },
    [setSacrament, setPassword]
  );

  const togglePassword = () => {
    setIsVisible(!isVisible);
  };

  //common method success notifications
  const toastSuccess = (message, _) => {
    toast.success(message, {
      className: "toast-message",
    });
  };
  const toastError = (message, _) => {
    toast.error(message, {
      className: "toast-message",
    });
  };

  // const toastInfo = (message, _) => {
  //   toast.info(message, {
  //     className: "toast-message",
  //   });
  // };

  const onSubmitForm = (data) => {
    setIsSubmitSuccessful(true);

    if (data.password === "" && data.sacrament === "") {
      toastError("Please provide details");
      return;
    } else {
      setPassword("");
      setSacrament("");
      setIsLoading(true);
      setActive(true);
    }

    dispatch(
      addBaptism({
        sacrament: data.sacrament.toLowerCase(),
        password: data.password,
      })
    ).then((data) => {
      try {
        clearTimeout(timeoutRef.current);
        setIsLoading(false);
        if (data?.error?.message) {
          const { payload: errorMessage } = data;
          console.log("ERROR", errorMessage);

          setActive(true);
          setTimeout(() => {
            setActive(false);
          }, 4000);
        }
        if (!data?.error?.message) {
          toastSuccess(`You are logging...`);
          setActive(true);
          setPassword("");
          setSacrament("");
          setBtnName("Logging...");
          setTimeout(() => {
            setActive(false);
            setBtnName("Log In");
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
        <Description>
          <ContainerLoader>
            {isLoading && isSubmitSuccessful && <Loader />}
          </ContainerLoader>

          <StyledToastContainer autoClose={4000} position="top-right">
            <ToastContainer />;
          </StyledToastContainer>
          <Heading>{`General Information`}</Heading>

          <form onSubmit={handleSubmit((data) => onSubmitForm(data))}>
            {errors.password && (
              <ErrorMessage>Password is required.</ErrorMessage>
            )}
            {errors.sacrament && (
              <ErrorMessage>Sacrament is required.</ErrorMessage>
            )}
            <Wrapper>
              <Field
                {...register("sacrament", { required: true, value: sacrament })}
                onChange={onQueryChange}
                name="sacrament"
                value={sacrament}
                autoComplete="off"
                type={"text"}
              />
              <Label htmlFor={1}>{"Sacrament"}</Label>
            </Wrapper>
            <input type="checkbox" {...register("January")} />
            <Wrapper>
              <Field
                {...register("password", {
                  required: true,
                  value: password,
                })}
                sx={{
                  position: "relative",
                }}
                onChange={onQueryChange}
                name="password"
                value={password}
                autoComplete="off"
                type={isVisible ? "text" : "password"}
              />
              <ProtectedEye onClick={togglePassword}>
                {!isVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </ProtectedEye>
              <Label htmlFor={1}>{"Password"}</Label>
            </Wrapper>

            <MainButton
              disabled={password && sacrament ? active : true}
              type="submit"
              value={
                isLoading && isSubmitSuccessful ? "Submitting..." : BtnName
              }
            />
          </form>
        </Description>
      )}
    </>
  );
};
export default AddBaptismForm;
