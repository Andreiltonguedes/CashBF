import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('cliente');
  const router = useRouter();

  const handleRegister = () => {
    if (!nome || !email || !senha) {
      alert('Preencha todos os campos');
      return;
    }

    alert(`Conta criada como ${tipo}`);
    router.replace('/');
  };

  return (
    <LinearGradient colors={['#0A1F44', '#1E3A8A', '#00AEEF']} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', padding: 25 }}>

        <Text style={{ fontSize: 28, color: '#fff', textAlign: 'center', marginBottom: 25 }}>
          Criar Conta
        </Text>

        <View style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: 20, borderRadius: 20 }}>

          <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={input} />
          <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={input} />
          <TextInput placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} style={input} />

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
            <TouchableOpacity onPress={() => setTipo('cliente')}>
              <Text style={{ color: tipo === 'cliente' ? '#00FFAA' : '#fff', marginRight: 20 }}>
                Cliente
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setTipo('empresario')}>
              <Text style={{ color: tipo === 'empresario' ? '#00FFAA' : '#fff' }}>
                Empresário
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={button} onPress={handleRegister}>
            <Text style={{ textAlign: 'center' }}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/')}>
            <Text style={link}>Já tenho conta</Text>
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