import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

// ─── DADOS ─────────────────────────────

const banners = [
  { id: "1", imagem: require("../../assets/images/cash_bf.png") },
  { id: "2", imagem: { uri: "https://picsum.photos/400/200" } },
];

const categorias = [
  { id: "1", nome: "Bijuterias", icon: "diamond" },
  { id: "2", nome: "Madeira", icon: "park" },
  { id: "3", nome: "Cerâmica", icon: "emoji-objects" },
  { id: "4", nome: "Tecidos", icon: "checkroom" },
];

const produtos = [
  {
    id: "1",
    nome: "Colar artesanal",
    preco: 25,
    imagem: "https://picsum.photos/150",
    artesao: "Maria",
  },
  {
    id: "2",
    nome: "Vaso de barro",
    preco: 40,
    imagem: "https://picsum.photos/151",
    artesao: "João",
  },
];

// ─── CARROSSEL ─────────────────────────

function BannerCarousel() {
  return (
    <Carousel
      loop
      width={width}
      height={180}
      autoPlay
      data={banners}
      scrollAnimationDuration={1000}
      renderItem={({ item }) => (
        <Image source={item.imagem} style={styles.banner} />
      )}
    />
  );
}

// ─── MAIN ─────────────────────────────

export default function MarketplaceScreen() {
  const [saldo] = useState(120);
  const [carrinho, setCarrinho] = useState([]);

  function adicionarCarrinho(produto) {
    setCarrinho([...carrinho, produto]);
    alert(produto.nome + " adicionado ao carrinho");
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.topBar}>
        <View>
          <Text style={styles.logo}>Cash BF 🌴</Text>
          <Text style={styles.location}>Baía Formosa</Text>
        </View>

        <View style={styles.wallet}>
          <MaterialIcons name="account-balance-wallet" size={16} color="#fff" />
          <Text style={styles.walletText}> R$ {saldo.toFixed(2)}</Text>
        </View>
      </View>

      <ScrollView>
        {/* BUSCA */}
        <TextInput
          placeholder="Buscar produtos..."
          style={styles.search}
        />

        {/* CARROSSEL */}
        <BannerCarousel />

        {/* CATEGORIAS */}
        <Text style={styles.section}>Categorias</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categorias.map((item) => (
            <View key={item.id} style={styles.catChip}>
              <MaterialIcons name={item.icon} size={20} color="#ff9900" />
              <Text>{item.nome}</Text>
            </View>
          ))}
        </ScrollView>

        {/* OFERTAS */}
        <Text style={styles.section}>Ofertas</Text>

        <ScrollView horizontal>
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.dealCard}>
              <Text style={styles.dealBadge}>-20%</Text>
              <Text>Produto</Text>
              <Text>R$ 20</Text>
            </View>
          ))}
        </ScrollView>

        {/* PRODUTOS */}
        <Text style={styles.section}>Produtos</Text>

        <View style={styles.grid}>
          {produtos.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.imagem }} style={styles.img} />
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.artesao}>por {item.artesao}</Text>
              <Text style={styles.preco}>R$ {item.preco}</Text>

              <TouchableOpacity
                style={styles.botao}
                onPress={() => adicionarCarrinho(item)}
              >
                <Text style={{ color: "#fff" }}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* NAVBAR INFERIOR */}
      <View style={styles.navbar}>
        <MaterialIcons name="home" size={24} color="#00acc1" />
        <MaterialIcons name="category" size={24} color="#999" />
        <View>
          <MaterialIcons name="shopping-cart" size={24} color="#999" />
          {carrinho.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{carrinho.length}</Text>
            </View>
          )}
        </View>
        <MaterialIcons name="person" size={24} color="#999" />
      </View>
    </View>
  );
}

// ─── ESTILOS ─────────────────────────

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f3f3" },

  topBar: {
    backgroundColor: "#131921",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  logo: { color: "#ff9900", fontSize: 18, fontWeight: "bold" },
  location: { color: "#ccc", fontSize: 12 },

  wallet: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#232f3e",
    padding: 8,
    borderRadius: 20,
  },

  walletText: { color: "#fff" },

  search: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },

  banner: {
    width: width - 20,
    height: 180,
    borderRadius: 15,
    alignSelf: "center",
  },

  section: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },

  catChip: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    margin: 6,
    borderRadius: 20,
    alignItems: "center",
    gap: 5,
  },

  dealCard: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 6,
    borderRadius: 10,
    width: 100,
  },

  dealBadge: {
    backgroundColor: "red",
    color: "#fff",
    padding: 2,
    fontSize: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  card: {
    width: "45%",
    backgroundColor: "#fff",
    padding: 10,
    margin: 6,
    borderRadius: 12,
  },

  img: { width: "100%", height: 100, borderRadius: 10 },

  nome: { fontWeight: "bold" },
  artesao: { fontSize: 12, color: "#555" },

  preco: { color: "#0f1111", marginVertical: 5 },

  botao: {
    backgroundColor: "#ff9900",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#fff",
  },

  badge: {
    position: "absolute",
    right: -5,
    top: -5,
    backgroundColor: "#ff9900",
    borderRadius: 10,
    paddingHorizontal: 5,
  },

  badgeText: {
    fontSize: 10,
    fontWeight: "bold",
  },
});