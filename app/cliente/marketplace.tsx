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
  SafeAreaView,
  StatusBar,
} from "react-native";

import Carousel from "react-native-reanimated-carousel";

import {
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

// ───────────────── DADOS (MANTIDOS ORIGINAIS) ─────────────────

const banners = [
  {
    id: "1",
    imagem: require("../../assets/images/cash_bf.png"),
  },
  {
    id: "2",
    imagem: {
      uri: "https://picsum.photos/800/300?random=1",
    },
  },
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

const lojas = [
  {
    id: "1",
    nome: "Artesanato da Maria",
    categoria: "Bijuterias",
    avaliacao: 4.8,
    produtos: 32,
    imagem: "https://picsum.photos/seed/loja1/80/80",
    destaque: true,
  },
  {
    id: "2",
    nome: "Cerâmica do João",
    categoria: "Cerâmica",
    avaliacao: 4.6,
    produtos: 18,
    imagem: "https://picsum.photos/seed/loja2/80/80",
    destaque: false,
  },
  {
    id: "3",
    nome: "Madeiras & Arte",
    categoria: "Madeira",
    avaliacao: 4.9,
    produtos: 45,
    imagem: "https://picsum.photos/seed/loja3/80/80",
    destaque: true,
  },
  {
    id: "4",
    nome: "Tecidos da Serra",
    categoria: "Tecidos",
    avaliacao: 4.5,
    produtos: 27,
    imagem: "https://picsum.photos/seed/loja4/80/80",
    destaque: false,
  },
];

// ───────────────── COMPONENTES ─────────────────

function BannerCarousel() {
  return (
    <Carousel
      loop
      width={width > 1000 ? 1000 : width - 30}
      height={width > 1000 ? 300 : 180}
      autoPlay
      data={banners}
      scrollAnimationDuration={1000}
      renderItem={({ item }) => (
        <Image source={item.imagem} style={styles.banner} />
      )}
      style={{ alignSelf: "center" }}
    />
  );
}

function LojaCard({ loja }: { loja: typeof lojas[0] }) {
  return (
    <TouchableOpacity style={styles.lojaCard}>
      <View style={styles.lojaImageWrapper}>
        <Image
          source={{ uri: loja.imagem }}
          style={styles.lojaImagem}
        />
        {loja.destaque && (
          <View style={styles.lojaBadge}>
            <Text style={styles.lojaBadgeText}>⭐ Destaque</Text>
          </View>
        )}
      </View>

      <View style={styles.lojaInfo}>
        <Text style={styles.lojaNome} numberOfLines={1}>
          {loja.nome}
        </Text>

        <Text style={styles.lojaCategoria}>{loja.categoria}</Text>

        <View style={styles.lojaStats}>
          <View style={styles.lojaStatItem}>
            <Ionicons name="star" size={12} color="#ff9900" />
            <Text style={styles.lojaStatText}>{loja.avaliacao}</Text>
          </View>

          <View style={styles.lojaStatDot} />

          <View style={styles.lojaStatItem}>
            <MaterialIcons name="inventory" size={12} color="#00BCD4" />
            <Text style={styles.lojaStatText}>{loja.produtos} itens</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.lojaBtn}>
          <Text style={styles.lojaBtnText}>Ver loja</Text>
          <Ionicons name="arrow-forward" size={14} color="#ff9900" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

// ───────────────── TELA ─────────────────

export default function MarketplaceScreen() {
  const [saldo] = useState(120);
  const [carrinho, setCarrinho] = useState<any[]>([]);

  function adicionarCarrinho(produto: any) {
    setCarrinho([...carrinho, produto]);
    alert(produto.nome + " adicionado ao carrinho");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#232f3e" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* NAVBAR ESTÁTICO (PARTE DA PÁGINA) */}
        <View style={styles.amazonHeader}>
          <View style={styles.headerTopRow}>
            <Text style={styles.amazonLogo}>Cash BF 🌴</Text>
            
            <View style={styles.headerActions}>
              <TouchableOpacity style={styles.headerActionItem}>
                <Ionicons name="person-outline" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerActionItem}>
                <Ionicons name="cart-outline" size={26} color="#fff" />
                {carrinho.length > 0 && (
                  <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>{carrinho.length}</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* BARRA DE BUSCA */}
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Buscar produtos..."
              placeholderTextColor="#666"
              style={styles.searchInput}
            />
            <TouchableOpacity style={styles.searchButton}>
              <Ionicons name="search" size={22} color="#333" />
            </TouchableOpacity>
          </View>

          {/* SUB-NAV DE LOCALIZAÇÃO */}
          <TouchableOpacity style={styles.locationSubNav}>
            <Ionicons name="location-outline" size={16} color="#fff" />
            <Text style={styles.locationText}>
              Enviar para Baía Formosa - RN
            </Text>
          </TouchableOpacity>
        </View>

        {/* CONTEÚDO PRINCIPAL */}
        <View style={styles.mainWrapper}>
          {/* CARD SALDO */}
          <LinearGradient
            colors={["#1F2D3D", "#243447"]}
            style={styles.walletCard}
          >
            <View>
              <Text style={styles.walletLabel}>Saldo disponível</Text>
              <Text style={styles.walletBalance}>R$ {saldo.toFixed(2)}</Text>
              <Text style={styles.walletSub}>Cashback + Moeda Social</Text>
            </View>

            <View style={styles.walletRight}>
              <MaterialIcons
                name="account-balance-wallet"
                size={34}
                color="#ff9900"
              />
              <Text style={styles.cashbackText}>Cashback ativo</Text>
            </View>
          </LinearGradient>

          {/* CARROSSEL */}
          <BannerCarousel />

          {/* CATEGORIAS */}
          <Text style={styles.section}>Categorias</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categorias.map((item) => (
              <View key={item.id} style={styles.catChip}>
                <MaterialIcons
                  name={item.icon as any}
                  size={20}
                  color="#ff9900"
                />
                <Text>{item.nome}</Text>
              </View>
            ))}
          </ScrollView>

          {/* OFERTAS */}
          <Text style={styles.section}>Ofertas</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4, 5].map((item) => (
              <View key={item} style={styles.dealCard}>
                <Text style={styles.dealBadge}>-20%</Text>
                <Text>Produto</Text>
                <Text>R$ 20</Text>
              </View>
            ))}
          </ScrollView>

          {/* LOJAS */}
          <View style={styles.sectionRow}>
            <Text style={styles.section}>🏪 Lojas dos Comerciantes</Text>
            <TouchableOpacity>
              <Text style={styles.verTodos}>Ver todos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lojasGrid}>
            {lojas.map((loja) => (
              <LojaCard key={loja.id} loja={loja} />
            ))}
          </View>

          {/* PRODUTOS */}
          <Text style={styles.section}>Produtos</Text>
          <View style={styles.grid}>
            {produtos.map((item) => (
              <View key={item.id} style={styles.card}>
                <Image
                  source={{ uri: item.imagem }}
                  style={styles.img}
                />
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.artesao}>por {item.artesao}</Text>
                <Text style={styles.preco}>R$ {item.preco}</Text>

                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => adicionarCarrinho(item)}
                >
                  <Text style={styles.botaoTexto}>Adicionar</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* FOOTER COMPACTO */}
          <View style={styles.footerCompact}>
            <View style={styles.footerDivider} />
            <Text style={styles.footerLogoCompact}>Cash BF 🌴</Text>
            <Text style={styles.footerCopyCompact}>
              © 2025 Baía Formosa - RN · Todos os direitos reservados
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ───────────────── ESTILOS ─────────────────

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  // AMAZON HEADER (ESTÁTICO)
  amazonHeader: {
    backgroundColor: "#232f3e",
    paddingBottom: 10,
    width: "100%",
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
  },
  amazonLogo: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerActionItem: {
    marginLeft: 20,
  },
  cartBadge: {
    position: "absolute",
    top: -5,
    right: -8,
    backgroundColor: "#f08804",
    borderRadius: 10,
    paddingHorizontal: 5,
    minWidth: 18,
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#000",
    fontSize: 11,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    borderRadius: 8,
    height: 45,
    alignItems: "center",
    overflow: "hidden",
    maxWidth: 1170,
    alignSelf: "center",
    width: "calc(100% - 30px)",
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#000",
    outlineStyle: "none",
  } as any,
  searchButton: {
    backgroundColor: "#febd69",
    height: "100%",
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  locationSubNav: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#37475a",
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  locationText: {
    color: "#fff",
    fontSize: 13,
    marginLeft: 5,
    maxWidth: 1170,
    alignSelf: "center",
    width: "100%",
  },
  // CONTEÚDO
  mainWrapper: {
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
    paddingBottom: 20,
  },
  walletCard: {
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 24,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  walletLabel: { color: "#B0BEC5", fontSize: 13 },
  walletBalance: { color: "#fff", fontSize: 32, fontWeight: "bold", marginTop: 8 },
  walletSub: { color: "#90A4AE", marginTop: 5, fontSize: 12 },
  walletRight: { alignItems: "center" },
  cashbackText: { color: "#ff9900", marginTop: 8, fontSize: 12, fontWeight: "600" },
  banner: { 
    width: "100%", 
    height: "100%", 
    borderRadius: 20, 
    resizeMode: "cover" 
  },
  section: { fontSize: 18, fontWeight: "bold", marginHorizontal: 15, marginTop: 20, marginBottom: 10, color: "#111" },
  sectionRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginRight: 15 },
  verTodos: { color: "#00BCD4", fontSize: 13, fontWeight: "600", marginTop: 20 },
  catChip: { flexDirection: "row", backgroundColor: "#fff", paddingVertical: 12, paddingHorizontal: 15, marginLeft: 15, borderRadius: 22, alignItems: "center", gap: 6, elevation: 2 },
  dealCard: { backgroundColor: "#fff", padding: 15, marginLeft: 15, borderRadius: 16, width: 150, elevation: 2 },
  dealBadge: { backgroundColor: "#F44336", color: "#fff", padding: 5, borderRadius: 6, alignSelf: "flex-start", marginBottom: 10, fontSize: 10, fontWeight: "bold" },
  lojasGrid: { paddingHorizontal: 15, gap: 12, marginBottom: 6 },
  lojaCard: { flexDirection: "row", backgroundColor: "#fff", borderRadius: 20, padding: 14, alignItems: "center", elevation: 4, borderLeftWidth: 4, borderLeftColor: "#ff9900" },
  lojaImageWrapper: { position: "relative", marginRight: 14 },
  lojaImagem: { width: 72, height: 72, borderRadius: 16, backgroundColor: "#eee" },
  lojaBadge: { position: "absolute", top: -6, left: -6, backgroundColor: "#ff9900", borderRadius: 8, paddingHorizontal: 5, paddingVertical: 2 },
  lojaBadgeText: { color: "#fff", fontSize: 9, fontWeight: "bold" },
  lojaInfo: { flex: 1 },
  lojaNome: { fontSize: 15, fontWeight: "bold", color: "#111" },
  lojaCategoria: { fontSize: 12, color: "#888", marginTop: 2 },
  lojaStats: { flexDirection: "row", alignItems: "center", marginTop: 6, gap: 6 },
  lojaStatItem: { flexDirection: "row", alignItems: "center", gap: 3 },
  lojaStatText: { fontSize: 12, color: "#555", fontWeight: "500" },
  lojaStatDot: { width: 4, height: 4, borderRadius: 2, backgroundColor: "#ccc" },
  lojaBtn: { flexDirection: "row", alignItems: "center", marginTop: 10, gap: 4 },
  lojaBtnText: { color: "#ff9900", fontSize: 13, fontWeight: "bold" },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", paddingHorizontal: 7 },
  card: { width: width > 1000 ? "23%" : "45%", backgroundColor: "#fff", padding: 10, margin: "1%", borderRadius: 18, elevation: 2 },
  img: { width: "100%", height: 150, borderRadius: 14 },
  nome: { fontWeight: "bold", marginTop: 10, fontSize: 15 },
  artesao: { fontSize: 12, color: "#666", marginTop: 4 },
  preco: { color: "#00BCD4", marginVertical: 8, fontWeight: "bold", fontSize: 18 },
  botao: { backgroundColor: "#ff9900", padding: 10, borderRadius: 12, alignItems: "center" },
  botaoTexto: { color: "#fff", fontWeight: "bold" },
  // FOOTER COMPACTO
  footerCompact: {
    marginTop: 40,
    paddingBottom: 30,
    alignItems: "center",
  },
  footerDivider: {
    height: 1,
    backgroundColor: "#ddd",
    width: "90%",
    marginBottom: 20,
  },
  footerLogoCompact: {
    color: "#232f3e",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  footerCopyCompact: {
    color: "#666",
    fontSize: 11,
  },
});