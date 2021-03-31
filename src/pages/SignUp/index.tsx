import React from "react";
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import Input from "../../components/Input";
import Button from "../../components/Button";

import Icon from "react-native-vector-icons/Feather";

import LogoIgm from "../../assets/logo.png";

import { Container, Title, BackToSignIn, BackToSignInText } from "./styles";

const SignUp: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={LogoIgm} />

            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Input name="Name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="Email" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button
              onPress={() => {
                console.log("FOI");
              }}
            >
              Criar conta
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignIn onPress={() => {}}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText>Voltar para logon</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
