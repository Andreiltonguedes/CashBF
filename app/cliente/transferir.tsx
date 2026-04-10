import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Transferir() {
  const [cpf, setCpf] = useState('');
  const [valor, setValor] = useState('');

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Transferir</Text>

      <TextInput placeholder="CPF destino" value={cpf} onChangeText={setCpf} style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="Valor" value={valor} onChangeText={setValor} style={{ borderWidth: 1, marginBottom: 10 }} />

      <TouchableOpacity style={{ backgroundColor: 'green', padding: 15 }}>
        <Text style={{ color: '#fff' }}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}