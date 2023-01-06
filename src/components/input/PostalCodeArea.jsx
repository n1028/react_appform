import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Button, Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const PostalCodeArea = () => {
  const {
    register, 
    getValues, 
    setValue,
    formState: { errors },
  } = useFormContext(); 

  const onClickAddress = () => {
    const postCode = getValues("post_code");
    const getData = async () => {
      const fetchData = await axios.get(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postCode}`
        );
      const { address1, address2, address3 } = fetchData.data.results[0];
      const addressData = `${address1}${address2}${address3}`;
        setValue("address", addressData, { shouldDirty: true });
      }
    getData();
  }

  return (
    <SPostalCodeArea>
      <label htmlFor="post_code">郵便番号</label>
      <Input
        ml={"50px"}
        background={"#fff"}
        id="post_code"
        {...register("post_code", {
          required: {
            value: true,
            message: "郵便番号を入力して下さい",
          },
          pattern: {
            value: /^(\d{1,})$/,
            message: "数字を入力してください",
          },
          minLength: {
            value: 7,
            message: "7桁で入力してください",
          },
          maxLength: {
            value: 7,
            message: "7桁で入力してください",
          },
        })}
        size="sm"
        width="auto"
        type="post_code"
      />

      {errors.post_code?.types.required && (
        <PStyle>{errors.post_code.types.required}</PStyle>
      )}
      {errors.post_code?.types.pattern && (
        <PStyle>{errors.post_code.types.pattern}</PStyle>
      )}
      {errors.post_code?.types.minLength && (
        <PStyle>{errors.post_code.types.minLength}</PStyle>
      )}
      {errors.post_code?.types.maxLength && (
        <PStyle>{errors.post_code.types.maxLength}</PStyle>
      )}

      <Button
        onClick={onClickAddress}
        ml={"40px"}
        background={"pink.100"}
        rounded="full"
        sx={{ position: "absolute", top: "158px", left: "330px" }}
      >
        検索
      </Button>
    </SPostalCodeArea>
  );
};

const SPostalCodeArea = styled.div`
  display: flex;
  align-items: center;
  margin: 40px;
`;

const PStyle = styled.p`
  color: red;
  position: relative;
  top: 36px;
  right: 200px;
  margin-left: 20px;
`;
