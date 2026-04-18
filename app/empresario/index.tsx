import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Empresario() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#0A1F44', '#1E3A8A', '#00AEEF']} style={{ flex: 1 }}>
      
      <ScrollView style={{ flex: 1, padding: 20 }}>

        {/* HEADER */}
        <View style={{ marginTop: 40, marginBottom: 20 }}>
          <Text style={{ color: '#fff', fontSize: 18 }}>
            Painel do Comércio 🏪
          </Text>
          <Text style={{ color: '#FFD700', fontSize: 22, fontWeight: 'bold' }}>
            Meu Negócio
          </Text>
        </View>

        {/* SALDO */}
        <View style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: 25,
          borderRadius: 20,
          marginBottom: 20
        }}>
          <Text style={{ color: '#ccc' }}>Total recebido</Text>
          <Text style={{ color: '#FFD700', fontSize: 32, fontWeight: 'bold' }}>
            1.250 Formosinhas 💰
          </Text>
        </View>

        {/* AÇÃO PRINCIPAL */}
        <TouchableOpacity
          style={{
            backgroundColor: '#00FFAA',
            padding: 18,
            borderRadius: 15,
            marginBottom: 15
          }}
          onPress={() => router.push('/cliente/receber')}
        >
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>
            Receber Pagamento 💵
          </Text>
        </TouchableOpacity>

        {/* QR CODE */}
        <TouchableOpacity
          style={{
            backgroundColor: '#FFD700',
            padding: 18,
            borderRadius: 15,
            marginBottom: 20
          }}
          onPress={() => alert('QR Code em breve 🔳')}
        >
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>
            Gerar QR Code 🔳
          </Text>
        </TouchableOpacity>

        {/* HISTÓRICO */}
        <View style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: 20,
          borderRadius: 20,
          marginBottom: 20
        }}>
          <Text style={{ color: '#fff', marginBottom: 10 }}>
            Vendas recentes
          </Text>

          <VendaItem nome="Cliente João" valor="+50" />
          <VendaItem nome="Cliente Maria" valor="+30" />
          <VendaItem nome="Cliente Pedro" valor="+70" />
        </View>

        {/* BOTÃO SAIR */}
        <TouchableOpacity
          style={{
            backgroundColor: '#ff4d4d',
            padding: 15,
            borderRadius: 12
          }}
          onPress={() => router.replace('/')}
        >
          <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>
            Sair
          </Text>
        </TouchableOpacity>

      </ScrollView>

    </LinearGradient>
  );
}


// COMPONENTE DE VENDA
function VendaItem({ nome, valor }) {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8
    }}>
      <Text style={{ color: '#fff' }}>{nome}</Text>
      <Text style={{ color: '#00FFAA' }}>{valor}</Text>
    </View>
  );
}