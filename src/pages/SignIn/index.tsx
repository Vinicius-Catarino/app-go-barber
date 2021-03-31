import React, { useCallback, useRef } from "react";
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";

import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

import getValidationsErrors from "../../utils/getValidationErrors";

import Input from "../../components/Input";
import Button from "../../components/Button";

import Icon from "react-native-vector-icons/Feather";

import LogoIgm from "../../assets/logo.png";

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccoutButtonText,
} from "./styles";

interface SigInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleSigIn = useCallback(async (data: SigInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("Senha obrigatória"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // });

      // history.push("/dashboard");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationsErrors(error);
        formRef.current?.setErrors(errors);
        return;
      }

      Alert.alert(
        "Erro na autenticação",
        "Ocorreu um erro ao fazer login, cheque as credenciais."
      );
    }
  }, []);

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
              <Title>Faça seu logon</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSigIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="Email"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>
            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccoutButtonText>Criar uma conta</CreateAccoutButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
