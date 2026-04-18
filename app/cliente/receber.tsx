import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Receber() {
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const router = useRouter();

  const handleGerar = () => {
    if (!valor) {
      alert('Digite um valor');
      return;
    }

    if (parseFloat(valor) <= 0) {
      alert('Valor inválido');
      return;
    }

    // SIMULAÇÃO
    alert(`Cobrança de ${valor} Formosinhas gerada 💰`);
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
          Receber 💰
        </Text>

        {/* CARD */}
        <View style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: 20,
          borderRadius: 20
        }}>

          <TextInput
            placeholder="Valor a receber"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
            style={input}
          />

          <TextInput
            placeholder="Descrição (opcional)"
            placeholderTextColor="#ccc"
            value={descricao}
            onChangeText={setDescricao}
            style={input}
          />

          <TouchableOpacity style={button} onPress={handleGerar}>
            <Text style={btnText}>Gerar cobrança</Text>
          </TouchableOpacity>

          {/* FUTURO QR CODE */}
          <TouchableOpacity
            style={{
              backgroundColor: '#FFD700',
              padding: 15,
              borderRadius: 12,
              marginTop: 10
            }}
            onPress={() => alert('QR Code em breve 🔳')}
          >
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Gerar QR Code
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/cliente')}>
            <Text style={link}>Voltar</Text>
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