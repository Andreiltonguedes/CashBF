import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !senha) {
      alert('Preencha todos os campos');
      return;
    }

    const tipo = email.includes('empresa') ? 'empresario' : 'cliente';

    router.replace(`/${tipo}`);
  };

  return (
    <LinearGradient colors={['#0A1F44', '#1E3A8A', '#00AEEF']} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', padding: 25 }}>

        <Text style={{ fontSize: 32, color: '#fff', textAlign: 'center', marginBottom: 30 }}>
          Cash BF 💰
        </Text>

        <View style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: 20, borderRadius: 20 }}>

          <TextInput
            placeholder="Email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
            style={input}
          />

          <TextInput
            placeholder="Senha"
            placeholderTextColor="#ccc"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
            style={input}
          />

          <TouchableOpacity style={button} onPress={handleLogin}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Entrar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/recuperar')}>
            <Text style={link}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/cadastro')}>
            <Text style={[link, { color: '#00FFAA' }]}>Criar conta</Text>
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

const link = {
  color: '#ccc',
  textAlign: 'center',
  marginTop: 15
};