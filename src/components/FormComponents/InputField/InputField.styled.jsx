import styled from "styled-components";

export const Wrapper = styled.section`
  flex-direction: "row";
  alignitems: "center";
  position: relative;
  margin-top: 30px;
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 300;
  width: 200px;
  color: #9ca5b5;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  pointer-events: none;
  padding-left: 15px;
`;

export const Field = styled.input`
  display: flex;
  border: 0;
  font-size: 22px;
  background-color: transparent;
  padding-top: 10px;
  border-bottom: 1px solid #f4c550;

  outline: none;
  width: 100%;
  color: black;
  overflow: hidden;

  ${({ disabled }) =>
    (disabled || "") &&
    `
    pointer-events: none;
    
  `}

  &:focus {
    border-color: #6118de;
  }

  &:focus ~ ${Label} {
    transform: translateY(-40px);
    // scale: 0.9;
    color: #9ca5b5;
  }

  ${({ value = "" }) =>
    value &&
    `
    & ~ ${Label} {
      transform: translateY(-40px);

    }
  `}
`;
