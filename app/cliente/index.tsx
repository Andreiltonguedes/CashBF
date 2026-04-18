import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Cliente() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#0A1F44', '#1E3A8A', '#00AEEF']} style={{ flex: 1 }}>
      
      <ScrollView style={{ flex: 1, padding: 20 }}>

        {/* HEADER */}
        <View style={{ marginTop: 40, marginBottom: 20 }}>
          <Text style={{ color: '#fff', fontSize: 18 }}>
            Olá 👋
          </Text>
          <Text style={{ color: '#00FFAA', fontSize: 22, fontWeight: 'bold' }}>
            Usuário Cash BF
          </Text>
        </View>

        {/* SALDO */}
        <View style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: 25,
          borderRadius: 20,
          marginBottom: 20
        }}>
          <Text style={{ color: '#ccc' }}>Saldo disponível</Text>
          <Text style={{ color: '#00FFAA', fontSize: 32, fontWeight: 'bold' }}>
            250 Formosinhas 💰
          </Text>
        </View>

        {/* AÇÕES */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 25
        }}>

          <ActionButton title="Transferir" onPress={() => router.push('/cliente/transferir')} />
          <ActionButton title="Pagar" onPress={() => router.push('/cliente/pagar')} />
         <ActionButton title="Receber" onPress={() => router.push('/cliente/receber')} />

        </View>

        {/* GAMIFICAÇÃO */}
        <View style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: 20,
          borderRadius: 20,
          marginBottom: 20
        }}>
          <Text style={{ color: '#fff', marginBottom: 10 }}>
            Nível Surfista 🌊
          </Text>

          <View style={{
            height: 10,
            backgroundColor: '#ccc',
            borderRadius: 10,
            overflow: 'hidden'
          }}>
            <View style={{
              width: '60%',
              height: '100%',
              backgroundColor: '#00FFAA'
            }} />
          </View>

          <Text style={{ color: '#ccc', marginTop: 5 }}>
            Progresso: 60%
          </Text>
        </View>

        {/* HISTÓRICO */}
        <View style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: 20,
          borderRadius: 20,
          marginBottom: 20
        }}>
          <Text style={{ color: '#fff', marginBottom: 10 }}>
            Últimas transações
          </Text>

          <TransactionItem title="Recebido de João" value="+50" />
          <TransactionItem title="Pagamento mercado" value="-30" />
          <TransactionItem title="Cashback loja" value="+10" />

        </View>

        {/* BOTÃO SAIR */}
        <TouchableOpacity
          style={{
            backgroundColor: '#ff4d4d',
            padding: 15,
            borderRadius: 12,
            marginTop: 10
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


// ================= COMPONENTES =================

function ActionButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: 15,
        borderRadius: 12,
        width: '30%',
        alignItems: 'center'
      }}
      onPress={onPress}
    >
      <Text style={{ color: '#fff', fontSize: 12 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

function TransactionItem({ title, value }) {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8
    }}>
      <Text style={{ color: '#fff' }}>{title}</Text>
      <Text style={{
        color: value.includes('+') ? '#00FFAA' : '#ff4d4d'
      }}>
        {value}
      </Text>
    </View>
  );
}