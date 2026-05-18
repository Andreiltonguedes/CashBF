import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Linking,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

// ───────────────── DADOS DOS PRODUTOS (ENCOMENDAS) ─────────────────

const categorias = [
  { id: "1", nome: "Pudins", icone: "pudding" },
  { id: "2", nome: "Bolos", icone: "cake-variant" },
  { id: "3", nome: "Mousses", icone: "cupcake" },
  { id: "4", nome: "Pavês", icone: "layers" },
];

const produtos = [
  {
    id: "1",
    categoria: "Pudins",
    nome: "Pudim Premium (G)",
    descricao: "O carro-chefe da casa. Textura aveludada e calda de caramelo dourada.",
    preco: 58.0,
    prazo: "24h de antecedência",
    imagem: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "2",
    categoria: "Bolos",
    nome: "Bolo de Festa Gourmet",
    descricao: "Massa artesanal com recheios nobres. Personalizado para seu evento.",
    preco: 85.0,
    prazo: "48h de antecedência",
    imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "3",
    categoria: "Mousses",
    nome: "Mousse de Chocolate Belga",
    descricao: "Feito com chocolate 50% cacau. Uma explosão de sabor.",
    preco: 18.0,
    prazo: "Pronta entrega (consultar)",
    imagem: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "4",
    categoria: "Pavês",
    nome: "Pavê de Nozes com Doce de Leite",
    descricao: "Combinação clássica e sofisticada para momentos especiais.",
    preco: 72.0,
    prazo: "48h de antecedência",
    imagem: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400&auto=format&fit=crop",
  },
];

export default function DocesDaFranScreen() {
  const [catAtiva, setCatAtiva] = useState("1");

  const abrirInstagram = () => {
    Linking.openURL("https://www.instagram.com/delicias_da_frann_");
  };

  const fazerEncomenda = (produto: string) => {
    const mensagem = `Olá Fran! Vi a nova logo e amei! Gostaria de encomendar o ${produto}.`;
    Linking.openURL(`https://wa.me/5500000000000?text=${encodeURIComponent(mensagem)}`);
  };

  const produtosFiltrados = produtos.filter(p => p.categoria === categorias.find(c => c.id === catAtiva)?.nome);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* HEADER PREMIUM COM A NOVA LOGO FUNCIONAL */}
        <LinearGradient colors={["#064e3b", "#065f46"]} style={styles.header}>
          <View style={styles.logoWrapper}>
            <Image 
              // LINK PERMANENTE DA LOGO
              source={{ uri: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663653744690/dzTvgBZGuQWttEVk.png" }} 
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.headerTitle}>Doces da Fran ✨</Text>
          <Text style={styles.headerSub}>Fui atrás da felicidade e voltei com Doces da Fran</Text>
          
          <TouchableOpacity style={styles.instaBadge} onPress={abrirInstagram}>
            <FontAwesome5 name="instagram" size={16} color="#fbbf24" />
            <Text style={styles.instaText}>@delicias_da_frann_</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* INFO DE ENCOMENDAS PREMIUM */}
        <View style={styles.infoCard}>
          <View style={styles.infoItem}>
            <Ionicons name="star" size={20} color="#fbbf24" />
            <Text style={styles.infoText}>Qualidade Premium</Text>
          </View>
          <View style={styles.infoDivider} />
          <View style={styles.infoItem}>
            <Ionicons name="time" size={20} color="#fbbf24" />
            <Text style={styles.infoText}>Pedidos Antecipados</Text>
          </View>
        </View>

        {/* CATEGORIAS */}
        <Text style={styles.sectionTitle}>Nossas Delícias</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catScroll}>
          {categorias.map(cat => (
            <TouchableOpacity 
              key={cat.id} 
              onPress={() => setCatAtiva(cat.id)}
              style={[styles.catCard, catAtiva === cat.id && styles.catCardActive]}
            >
              <MaterialCommunityIcons 
                name={cat.icone as any} 
                size={22} 
                color={catAtiva === cat.id ? "#064e3b" : "#fbbf24"} 
              />
              <Text style={[styles.catText, catAtiva === cat.id && styles.catTextActive]}>{cat.nome}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* LISTA DE PRODUTOS */}
        <View style={styles.productList}>
          {produtosFiltrados.map(prod => (
            <View key={prod.id} style={styles.productCard}>
              <Image source={{ uri: prod.imagem }} style={styles.productImg} />
              <View style={styles.productInfo}>
                <View style={styles.productHeader}>
                  <Text style={styles.productName}>{prod.nome}</Text>
                  <View style={styles.prazoBadge}>
                    <Text style={styles.prazoText}>{prod.prazo}</Text>
                  </View>
                </View>
                <Text style={styles.productDesc}>{prod.descricao}</Text>
                <View style={styles.productFooter}>
                  <Text style={styles.productPrice}>R$ {prod.preco.toFixed(2)}</Text>
                  <TouchableOpacity 
                    style={styles.orderBtn}
                    onPress={() => fazerEncomenda(prod.nome)}
                  >
                    <Text style={styles.orderBtnText}>Encomendar</Text>
                    <Ionicons name="logo-whatsapp" size={16} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Doces da Fran © 2025</Text>
          <Text style={styles.footerSub}>Feito com amor em Baía Formosa - RN</Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* FAB PREMIUM */}
      <TouchableOpacity style={styles.fab} onPress={() => fazerEncomenda("Informações")}>
        <Ionicons name="chatbubbles" size={28} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0fdf4",
  },
  header: {
    paddingTop: 50,
    paddingBottom: 40,
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 15,
  },
  logoWrapper: {
    width: 150,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 75,
    padding: 2,
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#fbbf24",
  },
  logo: {
    width: "100%",
    height: "100%",
    borderRadius: 75,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  headerSub: {
    color: "#fbbf24",
    fontSize: 13,
    marginTop: 8,
    fontStyle: "italic",
    textAlign: "center",
    paddingHorizontal: 30,
  },
  instaBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "rgba(251,191,36,0.5)",
  },
  instaText: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  infoCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 25,
    marginTop: -30,
    borderRadius: 20,
    padding: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    justifyContent: "space-around",
    alignItems: "center",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoText: {
    fontSize: 12,
    color: "#064e3b",
    fontWeight: "bold",
  },
  infoDivider: {
    width: 1,
    height: 25,
    backgroundColor: "#f0f0f0",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#064e3b",
    margin: 25,
    marginTop: 35,
  },
  catScroll: {
    paddingLeft: 25,
    marginBottom: 25,
  },
  catCard: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 18,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#d1fae5",
    elevation: 2,
  },
  catCardActive: {
    backgroundColor: "#fbbf24",
    borderColor: "#fbbf24",
  },
  catText: {
    color: "#064e3b",
    fontWeight: "bold",
    fontSize: 14,
  },
  catTextActive: {
    color: "#064e3b",
  },
  productList: {
    paddingHorizontal: 25,
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 25,
    marginBottom: 25,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  productImg: {
    width: "100%",
    height: 200,
  },
  productInfo: {
    padding: 20,
  },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
    flex: 1,
  },
  prazoBadge: {
    backgroundColor: "#fef3c7",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  prazoText: {
    fontSize: 11,
    color: "#92400e",
    fontWeight: "bold",
  },
  productDesc: {
    fontSize: 14,
    color: "#4b5563",
    lineHeight: 20,
    marginBottom: 20,
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
    paddingTop: 15,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#059669",
  },
  orderBtn: {
    backgroundColor: "#064e3b",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 15,
    gap: 10,
    elevation: 3,
  },
  orderBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  footer: {
    alignItems: "center",
    marginTop: 30,
    paddingBottom: 30,
  },
  footerText: {
    color: "#064e3b",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerSub: {
    color: "#6b7280",
    fontSize: 13,
    marginTop: 5,
  },
  fab: {
    position: "absolute",
    bottom: 25,
    right: 25,
    backgroundColor: "#059669",
    width: 65,
    height: 65,
    borderRadius: 32.5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});


