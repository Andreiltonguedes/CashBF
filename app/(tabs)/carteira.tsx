import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";

export default function Dashboard() {

  const [saldo, setSaldo] = useState(120);

  // 💳 pagar
  function pagar() {
    const valor = 20;

    if (saldo < valor) {
      alert("Saldo insuficiente");
      return;
    }

    setSaldo(saldo - valor);

    // 💰 cashback 5%
    const cashback = valor * 0.05;
    setTimeout(() => {
      setSaldo((s) => s + cashback);
      alert(`Cashback recebido: ${cashback} 💰`);
    }, 1000);

    alert("Pagamento realizado 💸");
  }

  // 🔄 transferir
  function transferir() {
    const valor = 10;

    if (saldo < valor) {
      alert("Saldo insuficiente");
      return;
    }

    setSaldo(saldo - valor);
    alert("Transferência realizada 🔄");
  }

  return (
    <ScrollView style={styles.container}>

      {/* SALDO */}
      <View style={styles.card}>
        <Text style={styles.titulo}>Saldo</Text>
        <Text style={styles.valor}>{saldo} Formosinhas</Text>
      </View>

      {/* AÇÕES */}
      <View style={styles.grid}>

        <TouchableOpacity style={styles.botao} onPress={pagar}>
          <Text style={styles.texto}>📷 Pagar com QR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={transferir}>
          <Text style={styles.texto}>💸 Transferir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>💰 Cashback</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>🏪 Comerciantes</Text>
        </TouchableOpacity>

      </View>

      {/* INFO */}
      <View style={styles.info}>
        <Text style={styles.infoText}>
          ✔ Carteira digital ativa
        </Text>
        <Text style={styles.infoText}>
          ✔ Pagamento com QR Code
        </Text>
        <Text style={styles.infoText}>
          ✔ Cashback automático
        </Text>
        <Text style={styles.infoText}>
          ✔ Transferência entre usuários
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e272e",
    padding: 15,
  },
  card: {
    backgroundColor: "#2ecc71",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  titulo: {
    color: "#fff",
    fontSize: 16,
  },
  valor: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  botao: {
    backgroundColor: "#34495e",
    width: "48%",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  texto: {
    color: "#fff",
  },
  info: {
    marginTop: 20,
  },
  infoText: {
    color: "#aaa",
    marginBottom: 5,
  },
});