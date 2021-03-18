import React from "react";
import { Image } from "react-native";

import LogoIgm from "../../assets/logo.png";

import { Container, Title } from "./styles";

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={LogoIgm} />

        <Title>Faça sei logon</Title>
      </Container>
    </>
  );
};

export default SignIn;
