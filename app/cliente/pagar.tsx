import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Pagar() {
  const [codigo, setCodigo] = useState('');

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Pagar</Text>

      <TextInput placeholder="Código / QR" value={codigo} onChangeText={setCodigo} style={{ borderWidth: 1, marginBottom: 10 }} />

      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 15 }}>
        <Text style={{ color: '#fff' }}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );
}