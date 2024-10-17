import { Wrapper, Field, Label } from "./InputField.styled";
import { useForm } from "react-hook-form";

export const InputField = ({
  onQueryChange,
  fieldValue,
  fieldName,
  disabledStatus,
  labelName,
}) => {
  const {
    register,
    // formState: { errors },
  } = useForm();
  return (
    <>
      <Wrapper>
        <Field
          {...register(fieldName, { required: true, value: fieldValue })}
          onChange={onQueryChange}
          name={fieldName}
          value={fieldValue}
          autoComplete="off"
          type={"text"}
          disabled={disabledStatus}
        />
        <Label htmlFor={1}>{labelName}</Label>
      </Wrapper>
    </>
  );
};
