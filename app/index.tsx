import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  function handleLogin() {
    if (cpf === 'admin') {
      router.push('/admin');
    } else if (cpf === 'empresa') {
      router.push('/empresario');
    } else {
      router.push('/cliente');
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 28, marginBottom: 20 }}>Cash BF</Text>

      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: 'green', padding: 15 }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/cadastro')}>
        <Text style={{ textAlign: 'center', marginTop: 10 }}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}