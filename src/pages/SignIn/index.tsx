import React from "react";
import { Image } from "react-native";

import Input from "../../components/Input";
import Button from "../../components/Button";

import LogoIgm from "../../assets/logo.png";

import { Container, Title } from "./styles";

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={LogoIgm} />

        <Title>Faça sei logon</Title>

        <Input name="email" icon="mail" placeholder="Email" />
        <Input name="password" icon="lock" placeholder="Senha" />

        <Button
          onPress={() => {
            console.log("FOI");
          }}
        >
          Entrar
        </Button>
      </Container>
    </>
  );
};

export default SignIn;
