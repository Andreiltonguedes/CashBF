import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Admin() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#1a1a2e', '#16213e', '#0f3460']} style={{ flex: 1 }}>
      
      <ScrollView style={{ flex: 1, padding: 20 }}>

        {/* HEADER */}
        <View style={{ marginTop: 40, marginBottom: 20 }}>
          <Text style={{ color: '#fff', fontSize: 18 }}>
            Painel Administrativo 🛠️
          </Text>
          <Text style={{ color: '#00FFAA', fontSize: 24, fontWeight: 'bold' }}>
            Cash BF Admin
          </Text>
        </View>

        {/* RESUMO */}
        <View style={card}>
          <Text style={label}>Usuários cadastrados</Text>
          <Text style={value}>120</Text>
          <Text style={label}>Empresários</Text>
          <Text style={value}>35</Text>
          <Text style={label}>Total em circulação</Text>
          <Text style={value}>5.000 Formosinhas 💰</Text>
        </View>


        {/* AÇÕES */}
        <View style={{ marginTop: 20 }}>

          <Action title="Gerenciar Usuários 👥" onPress={() => alert('Em breve')} />
          <Action title="Gerenciar Transações 💸" onPress={() => alert('Em breve')} />
          <Action title="Aprovar Comerciantes 🏪" onPress={() => alert('Em breve')} />
          <Action title="Configurar Cashback 🎁" onPress={() => alert('Em breve')} />

        </View>

        {/* ALERTAS / LOG */}
        <View style={[card, { marginTop: 20 }]}>
          <Text style={{ color: '#fff', marginBottom: 10 }}>
            Atividades recentes
          </Text>

          <LogItem text="Novo usuário cadastrado" />
          <LogItem text="Pagamento realizado de 50" />
          <LogItem text="Comerciante aprovado" />
        </View>

        {/* BOTÃO SAIR */}
        <TouchableOpacity
          style={{
            backgroundColor: '#ff4d4d',
            padding: 15,
            borderRadius: 12,
            marginTop: 20
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


// COMPONENTES

const card = {
  backgroundColor: 'rgba(255,255,255,0.08)',
  padding: 20,
  borderRadius: 20,
  marginBottom: 10
};

const label = {
  color: '#ccc',
  marginTop: 10
};

const value = {
  color: '#00FFAA',
  fontSize: 22,
  fontWeight: '700' as const
};

function Action({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#00FFAA',
        padding: 15,
        borderRadius: 12,
        marginBottom: 10
      }}
      onPress={onPress}
    >
      <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

function LogItem({ text }: { text: string }) {
  return (
    <Text style={{ color: '#ccc', marginBottom: 5 }}>
      • {text}
    </Text>
  );
}