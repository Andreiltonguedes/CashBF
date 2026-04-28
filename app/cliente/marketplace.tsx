import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function MarketplaceScreen() {
  const [saldo, setSaldo] = useState(120);
  const [carrinho, setCarrinho] = useState<any[]>([]);
  const [aba, setAba] = useState("home");
  const [indexAtual, setIndexAtual] = useState(0);

  const banners = [
    {
      id: "1",
      imagem: require("../../assets/images/cash_bf.png"),
    },
    {
      id: "2",
      imagem: { uri: "https://picsum.photos/400/200" },
    },
    {
      id: "3",
      imagem: { uri: "https://picsum.photos/401/200" },
    },
  ];

  const categorias = [
    { id: "1", nome: "Bijuterias", imagem: "https://picsum.photos/100" },
    { id: "2", nome: "Madeira", imagem: "https://picsum.photos/101" },
    { id: "3", nome: "Bordados", imagem: "https://picsum.photos/102" },
    { id: "4", nome: "Olaria", imagem: "https://picsum.photos/103" },
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

  function adicionarCarrinho(produto: any) {
    setCarrinho([...carrinho, produto]);
  }

  function finalizarCompra() {
    const total = carrinho.reduce((s, p) => s + p.preco, 0);

    if (saldo >= total) {
      const cashback = total * 0.1;
      setSaldo(saldo - total + cashback);
      setCarrinho([]);
      Alert.alert("Compra realizada", `Cashback: R$ ${cashback.toFixed(2)}`);
    } else {
      Alert.alert("Saldo insuficiente");
    }
  }

  function renderConteudo() {
    if (aba === "mapa") {
      return (
        <View style={styles.center}>
          <Text>📍 Mapa das lojas (em breve)</Text>
        </View>
      );
    }

    if (aba === "perfil") {
      return (
        <View style={styles.center}>
          <Text>👤 Perfil do usuário</Text>
        </View>
      );
    }

    if (aba === "carrinho") {
      return (
        <View style={styles.center}>
          <Text>🛒 Itens: {carrinho.length}</Text>
          <Text>💰 Saldo: R$ {saldo.toFixed(2)}</Text>

          <TouchableOpacity style={styles.finalizar} onPress={finalizarCompra}>
            <Text style={{ color: "#fff" }}>Finalizar compra</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <>
        <TextInput placeholder="Buscar no Cash BF" style={styles.search} />

        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>

          {/* 🔥 CARROSSEL MANUAL */}
          <Carousel
            loop
            width={width}
            height={width * 0.55}
            data={banners}
            pagingEnabled
            snapEnabled
            enabled={true}
            scrollAnimationDuration={800}
            onProgressChange={(_, progress) => {
              setIndexAtual(Math.round(progress));
            }}
            renderItem={({ item }) => (
              <View style={styles.bannerContainer}>
                <Image
                  source={item.imagem}
                  style={styles.bannerImg}
                  resizeMode="cover"
                />
              </View>
            )}
          />

          {/* PAGINAÇÃO */}
          <View style={styles.pagination}>
            {banners.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === indexAtual && styles.dotActive,
                ]}
              />
            ))}
          </View>

          {/* CATEGORIAS */}
          <Text style={styles.section}>Categorias</Text>
          <FlatList
            data={categorias}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.categoria}>
                <Image source={{ uri: item.imagem }} style={styles.catImg} />
                <Text>{item.nome}</Text>
              </View>
            )}
          />

          {/* PRODUTOS */}
          <Text style={styles.section}>Produtos</Text>
          <FlatList
            data={produtos}
            numColumns={2}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.imagem }} style={styles.img} />
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.artesao}>👨‍🎨 {item.artesao}</Text>
                <Text style={styles.preco}>R$ {item.preco}</Text>

                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => adicionarCarrinho(item)}
                >
                  <Text style={styles.botaoTexto}>Adicionar</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </ScrollView>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>{renderConteudo()}</View>

      {/* NAVBAR */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => setAba("home")} style={styles.navItem}>
          <MaterialIcons name="home" size={26} color={aba === "home" ? "#00c853" : "gray"} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setAba("mapa")} style={styles.navItem}>
          <MaterialIcons name="location-on" size={26} color={aba === "mapa" ? "#00c853" : "gray"} />
          <Text style={styles.navText}>Mapa</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setAba("carrinho")} style={styles.navItem}>
          <MaterialIcons name="shopping-cart" size={26} color={aba === "carrinho" ? "#00c853" : "gray"} />
          <Text style={styles.navText}>Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setAba("perfil")} style={styles.navItem}>
          <MaterialIcons name="person" size={26} color={aba === "perfil" ? "#00c853" : "gray"} />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },

  search: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 12,
    borderRadius: 12,
  },

  bannerContainer: {
    alignItems: "center",
    paddingHorizontal: 8,
  },

  bannerImg: {
    width: width * 0.92,
    height: "100%",
    borderRadius: 20,
  },

  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },

  dotActive: {
    backgroundColor: "#00c853",
    width: 12,
    height: 12,
  },

  section: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },

  categoria: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  catImg: { width: 60, height: 60 },

  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    padding: 10,
    borderRadius: 12,
    elevation: 2,
  },

  img: { width: "100%", height: 100, borderRadius: 8 },

  nome: { fontWeight: "bold" },

  artesao: { fontSize: 12, color: "gray" },

  preco: { color: "#009688", marginBottom: 5 },

  botao: {
    backgroundColor: "#00c853",
    padding: 8,
    borderRadius: 8,
  },

  botaoTexto: {
    color: "#fff",
    textAlign: "center",
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    fontSize: 10,
  },

  finalizar: {
    backgroundColor: "#009688",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});