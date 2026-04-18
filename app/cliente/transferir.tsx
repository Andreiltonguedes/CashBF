import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Transferir() {
  const [destinatario, setDestinatario] = useState('');
  const [valor, setValor] = useState('');
  const router = useRouter();

  const handleTransfer = () => {
    if (!destinatario || !valor) {
      alert('Preencha todos os campos');
      return;
    }

    if (parseFloat(valor) <= 0) {
      alert('Digite um valor válido');
      return;
    }

    // SIMULAÇÃO (depois conecta com backend)
    alert(`Transferido ${valor} Formosinhas para ${destinatario} 💸`);
    router.replace('/cliente');
  };

  return (
    <LinearGradient colors={['#0A1F44', '#1E3A8A', '#00AEEF']} style={{ flex: 1 }}>

      <View style={{ flex: 1, justifyContent: 'center', padding: 25 }}>

        {/* TÍTULO */}
        <Text style={{
          fontSize: 28,
          color: '#fff',
          textAlign: 'center',
          marginBottom: 25,
          fontWeight: 'bold'
        }}>
          Transferir 💸
        </Text>

        {/* CARD */}
        <View style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: 20,
          borderRadius: 20
        }}>

          <TextInput
            placeholder="Destinatário (email ou ID)"
            placeholderTextColor="#ccc"
            value={destinatario}
            onChangeText={setDestinatario}
            style={input}
          />

          <TextInput
            placeholder="Valor"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
            style={input}
          />

          <TouchableOpacity style={button} onPress={handleTransfer}>
            <Text style={btnText}>Confirmar transferência</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/cliente')}>
            <Text style={link}>Cancelar</Text>
          </TouchableOpacity>

        </View>

      </View>

    </LinearGradient>
  );
}

const input = {
  backgroundColor: 'rgba(255,255,255,0.2)',
  color: '#fff',
  padding: 14,
  borderRadius: 12,
  marginBottom: 12
};

const button = {
  backgroundColor: '#00FFAA',
  padding: 15,
  borderRadius: 12,
  marginTop: 10
};

const btnText = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 16
};

const link = {
  color: '#ccc',
  textAlign: 'center',
  marginTop: 15
};