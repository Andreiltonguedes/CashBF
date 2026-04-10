import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Cliente() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Saldo</Text>
      <Text style={{ fontSize: 32, marginBottom: 20 }}>R$ 100,00</Text>

      <TouchableOpacity onPress={() => router.push('/cliente/transferir')} style={{ backgroundColor: 'orange', padding: 15, marginBottom: 10 }}>
        <Text>Transferir</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/cliente/pagar')} style={{ backgroundColor: 'purple', padding: 15 }}>
        <Text>Pagar</Text>
      </TouchableOpacity>
    </View>
  );
}