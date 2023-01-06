import React from "react";
import { useFormContext } from "react-hook-form";

import { NameArea } from "./input/NameArea";
import { PostalCodeArea } from "./input/PostalCodeArea";
import { AddressArea } from "./input/AddressArea";
import { SendButton } from "./SendButton";

export const Form = () => {
  const {
    handleSubmit,
  } = useFormContext(); 
      const onSubmit = (data) =>
        console.log(JSON.stringify({ customer_info: { ...data } }));


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <NameArea />
      <PostalCodeArea />
      <AddressArea />
      <SendButton />
    </form>
  );
};
