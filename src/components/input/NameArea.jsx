import React from "react";
import styled from "styled-components";
import { Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const NameArea = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  
  return (
    <SNameArea>
      <label htmlFor="last_name">氏名</label>
      <Input
        id="last_name"
        {...register("last_name", { required: true })}
        size="sm"
        width="auto"
        ml={"80px"}
        background={"#fff"}
      />
      {errors.last_name && <SError>氏名を入力して下さい</SError>}

      <Input
        id="first_name"
        {...register("first_name", { required: true })}
        size="sm"
        width="auto"
        ml={"40px"}
        background={"#fff"}
        sx={{ position: "absolute", top: "88px", left: "330px" }}
      />

      {errors.first_name && <SError2>氏名を入力して下さい</SError2>}
    </SNameArea>
  );
};

const SNameArea = styled.div`
  display: flex;
  align-items: center;
  margin: 42px;
`;

const SError = styled.div`
  color: red;
  position: absolute;
  top: 125px;
  left: 155px;
`;

const SError2 = styled.div`
  color: red;
  position: absolute;
  top: 125px;
  left: 370px;
`;