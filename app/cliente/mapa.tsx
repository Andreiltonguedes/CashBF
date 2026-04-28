import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function LoginScreen() {
  const [showSenha, setShowSenha] = useState(false);

  return (
    <ImageBackground
      source={require("../../assets/images/BF.png")}
      style={styles.bg}
      resizeMode="cover"
      imageStyle={styles.bgImage}
    >
      {/* 🔥 OVERLAY SUAVE */}
      <View style={styles.overlay} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <SafeAreaView style={styles.container}>
            
            {/* LOGO */}
            <View style={styles.logoBox}>
              <Text style={styles.logo}>🏄‍♂️ Cash BF</Text>
              <Text style={styles.sub}>
                Ganhe explorando o{" "}
                <Text style={styles.paraiso}>paraíso</Text>
              </Text>
            </View>

            {/* 🔥 CARD CENTRAL */}
            <View style={styles.card}>
              <Text style={styles.titulo}>Seja bem-vindo(a)! 👋</Text>
              <Text style={styles.desc}>Faça login para continuar</Text>

              {/* EMAIL */}
              <View style={styles.inputBox}>
                <Icon name="email" size={20} color="#009688" />
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="#666"
                  style={styles.input}
                />
              </View>

              {/* SENHA */}
              <View style={styles.inputBox}>
                <Icon name="lock" size={20} color="#009688" />
                <TextInput
                  placeholder="Senha"
                  placeholderTextColor="#666"
                  secureTextEntry={!showSenha}
                  style={styles.input}
                />
                <TouchableOpacity onPress={() => setShowSenha(!showSenha)}>
                  <Icon
                    name={showSenha ? "visibility-off" : "visibility"}
                    size={20}
                    color="#666"
                  />
                </TouchableOpacity>
              </View>

              {/* BOTÃO */}
              <TouchableOpacity activeOpacity={0.85}>
                <LinearGradient
                  colors={["#009688", "#FFC107"]}
                  style={styles.botao}
                >
                  <Text style={styles.botaoTexto}>🔒 Entrar</Text>
                </LinearGradient>
              </TouchableOpacity>

              {/* LINKS */}
              <Text style={styles.link}>Esqueci minha senha</Text>
              <Text style={styles.link}>
                Não tem conta?{" "}
                <Text style={styles.criar}>Criar conta</Text>
              </Text>
            </View>

          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#0d3b3f", // evita fundo vazio
  },

  bgImage: {
    opacity: 0.9, // 🔥 deixa a imagem mais suave
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)", // 🔥 overlay leve (não esconde imagem)
  },

  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 30,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  logoBox: {
    alignItems: "center",
    marginBottom: 15,
  },

  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },

  sub: {
    color: "#eee",
    marginTop: 5,
  },

  paraiso: {
    color: "#FFC107",
    fontWeight: "bold",
  },

  /* 🔥 CARD ESTILO VIDRO CENTRAL */
  card: {
    width: "100%",
    maxWidth: 380,
    minHeight: 300,

    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 25,
    paddingVertical: 25,
    paddingHorizontal: 20,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",

    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: "#fff",
  },

  desc: {
    textAlign: "center",
    color: "#ddd",
    marginBottom: 20,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 15,
    paddingHorizontal: 12,
    marginBottom: 12,
  },

  input: {
    flex: 1,
    padding: 12,
    color: "#000",
  },

  botao: {
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },

  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  link: {
    textAlign: "center",
    marginTop: 10,
    color: "#eee",
  },

  criar: {
    color: "#FFC107",
    fontWeight: "bold",
  },
});