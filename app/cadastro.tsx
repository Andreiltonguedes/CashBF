import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  function handleCadastro() {
    alert('Cadastro realizado!');
    router.push('/');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 28, marginBottom: 20 }}>Cadastro</Text>

      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="CPF" value={cpf} onChangeText={setCpf} style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} style={{ borderWidth: 1, marginBottom: 10 }} />

      <TouchableOpacity onPress={handleCadastro} style={{ backgroundColor: 'blue', padding: 15 }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}