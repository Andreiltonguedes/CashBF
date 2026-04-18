import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Recuperar() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRecover = async () => {
    if (!email) {
      alert('Digite seu email');
      return;
    }

    setLoading(true);

    // SIMULAÇÃO (depois você conecta com backend)
    setTimeout(() => {
      setLoading(false);
      alert('Link de recuperação enviado para seu email 📩');
      router.replace('/');
    }, 1500);
  };

  return (
    <LinearGradient colors={['#0A1F44', '#1E3A8A', '#00AEEF']} style={{ flex: 1 }}>
      
      <View style={{ flex: 1, justifyContent: 'center', padding: 25 }}>

        {/* TÍTULO */}
        <Text style={{
          fontSize: 28,
          color: '#fff',
          textAlign: 'center',
          marginBottom: 20,
          fontWeight: 'bold'
        }}>
          Recuperar Senha 🔑
        </Text>

        {/* DESCRIÇÃO */}
        <Text style={{
          color: '#ccc',
          textAlign: 'center',
          marginBottom: 25
        }}>
          Digite seu email para receber o link de recuperação
        </Text>

        {/* CARD */}
        <View style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: 20,
          borderRadius: 20
        }}>

          <TextInput
            placeholder="Seu email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
            style={input}
          />

          <TouchableOpacity style={button} onPress={handleRecover} disabled={loading}>
            {loading ? (
              <ActivityIndicator color="#000" />
            ) : (
              <Text style={btnText}>Enviar link</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/')}>
            <Text style={link}>Voltar para login</Text>
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