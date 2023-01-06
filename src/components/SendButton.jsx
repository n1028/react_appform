import React from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { Button } from "@chakra-ui/react";

export const SendButton = () => {
  const {
    formState: { isValid, dirtyFields },
  } = useFormContext(); 

  return (
    <SButton>
      <Button
        background={"purple.100"}
        rounded="full"
        type="submit"
        disabled={
          !isValid ||
          !dirtyFields.last_name ||
          !dirtyFields.first_name ||
          !dirtyFields.post_code ||
          !dirtyFields.address
        }
      >
        申込み内容を送信
      </Button>
    </SButton>
  );
};

const SButton = styled.div`
  text-align: center;
`;
