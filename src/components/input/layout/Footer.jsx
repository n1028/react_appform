import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <SFooter>
      <p>フッター</p>
    </SFooter>
  );
};

const SFooter = styled.footer`
  background-color: #fff;
  text-align: center;
  padding: 10px;
  border: 1px solid #808080;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
