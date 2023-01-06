import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";

import theme from "./theme/theme";
import { Header } from "./components/input/layout/Header";
import { Form } from "./components/Form";
import { Footer } from "./components/input/layout/Footer";

export const App = () => {
    const methods = useForm({
      mode: "onChange",
      criteriaMode: "all",
    });

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <FormProvider {...methods}>
        <Form />
      </FormProvider>
      <Footer />
    </ChakraProvider>
  );
};

