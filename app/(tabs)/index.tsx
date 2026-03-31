import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>💰 Cash BF</Text>
      <Text style={styles.subtitle}>
        Moeda digital de Baía Formosa
      </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push("/mapa")}
      >
        <Text style={styles.buttonText}>
          Ver comércios no mapa
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});