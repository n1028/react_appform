import React from "react";
import styled from "styled-components";
import { Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const AddressArea = () => {
  const { register } = useFormContext();

  return (
    <SAddressArea>
      <label htmlFor="address">詳細住所</label>
      <Input
        ml={"50px"}
        background={"#fff"}
        id="address"
        {...register("address")}
        size="sm"
        width="400px"
      />
    </SAddressArea>
  );
};

const SAddressArea = styled.div`
  display: flex;
  align-items: center;
  margin: 40px;
`;