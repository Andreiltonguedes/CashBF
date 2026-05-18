import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";

import {
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

// ───────────────── DADOS DAS EMPRESAS ─────────────────

const empresas = [
  {
    id: "1",
    nome: "Mercado Central",
    corPrimaria: "#6366f1",
    corSecundaria: "#4338ca",
    pontosAtuais: 1250,
    pontosProximoNivel: 2000,
    nivel: "Bronze",
    icone: "shopping-basket",
    recompensas: [
      { id: "r1", titulo: "Cupom R$ 10", custo: 500, icone: "local-offer" },
      { id: "r2", titulo: "Entrega Grátis", custo: 800, icone: "local-shipping" },
    ],
  },
  {
    id: "2",
    nome: "Padaria Formosa",
    corPrimaria: "#f59e0b",
    corSecundaria: "#d97706",
    pontosAtuais: 450,
    pontosProximoNivel: 1000,
    nivel: "Iniciante",
    icone: "bread-slice",
    recompensas: [
      { id: "r3", titulo: "Café Expresso", custo: 300, icone: "coffee" },
      { id: "r4", titulo: "Pão de Queijo", custo: 400, icone: "bakery-dining" },
    ],
  },
  {
    id: "3",
    nome: "Posto Beira Mar",
    corPrimaria: "#10b981",
    corSecundaria: "#059669",
    pontosAtuais: 3800,
    pontosProximoNivel: 5000,
    nivel: "Ouro",
    icone: "gas-pump",
    recompensas: [
      { id: "r5", titulo: "Ducha Grátis", custo: 1500, icone: "shower" },
      { id: "r6", titulo: "Troca de Óleo", custo: 3500, icone: "build" },
    ],
  },
];

export default function PremiumPointsScreenRefatorado() {
  const [empresaAtiva, setEmpresaAtiva] = useState(empresas[0]);

  const progresso =
    empresaAtiva.pontosAtuais / empresaAtiva.pontosProximoNivel;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Meus Pontos</Text>
            <Text style={styles.subGreeting}>
              Fidelidade Multi-Empresa
            </Text>
          </View>

          <TouchableOpacity style={styles.profileBtn}>
            <Ionicons name="person-circle" size={42} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* EMPRESAS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.selectorScroll}
        >
          {empresas.map((emp) => (
            <TouchableOpacity
              key={emp.id}
              onPress={() => setEmpresaAtiva(emp)}
              style={[
                styles.companyCard,
                empresaAtiva.id === emp.id && {
                  borderColor: emp.corPrimaria,
                  backgroundColor: "#1e1e1e",
                },
              ]}
            >
              <View
                style={[
                  styles.iconCircle,
                  { backgroundColor: emp.corPrimaria + "22" },
                ]}
              >
                <FontAwesome5
                  name={emp.icone}
                  size={18}
                  color={emp.corPrimaria}
                />
              </View>

              <Text
                style={[
                  styles.companyName,
                  empresaAtiva.id === emp.id && styles.companyNameActive,
                ]}
              >
                {emp.nome}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* CARD PRINCIPAL */}
        <LinearGradient
          colors={[
            empresaAtiva.corPrimaria,
            empresaAtiva.corSecundaria,
          ]}
          style={styles.mainPointsCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.pointsHeader}>
            <View>
              <Text style={styles.pointsLabel}>Saldo de Pontos</Text>
              <Text style={styles.pointsValue}>
                {empresaAtiva.pontosAtuais} pts
              </Text>
            </View>

            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>
                {empresaAtiva.nivel}
              </Text>
            </View>
          </View>

          <View style={styles.progressSection}>
            <View style={styles.progressInfo}>
              <Text style={styles.progressText}>
                Próximo nível
              </Text>

              <Text style={styles.progressPercent}>
                {(progresso * 100).toFixed(0)}%
              </Text>
            </View>

            <View style={styles.progressBarBg}>
              <View
                style={[
                  styles.progressBarFill,
                  {
                    width: `${Math.min(progresso * 100, 100)}%`,
                  },
                ]}
              />
            </View>

            <Text style={styles.pointsNeeded}>
              Faltam{" "}
              {empresaAtiva.pontosProximoNivel -
                empresaAtiva.pontosAtuais}{" "}
              pontos
            </Text>
          </View>
        </LinearGradient>

        {/* AÇÕES */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionItem}>
            <View style={styles.actionIcon}>
              <Ionicons name="qr-code" size={24} color="#fff" />
            </View>

            <Text style={styles.actionLabel}>Ganhar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <View style={styles.actionIcon}>
              <Ionicons
                name="share-social"
                size={24}
                color="#fff"
              />
            </View>

            <Text style={styles.actionLabel}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <View style={styles.actionIcon}>
              <Ionicons name="time" size={24} color="#fff" />
            </View>

            <Text style={styles.actionLabel}>Extrato</Text>
          </TouchableOpacity>
        </View>

        {/* RECOMPENSAS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Resgatar Recompensas
          </Text>

          <TouchableOpacity>
            <Text
              style={[
                styles.seeAll,
                { color: empresaAtiva.corPrimaria },
              ]}
            >
              Ver todas
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rewardsGrid}>
          {empresaAtiva.recompensas.map((reward) => (
            <TouchableOpacity
              key={reward.id}
              style={styles.rewardCard}
            >
              <View
                style={[
                  styles.rewardIconContainer,
                  {
                    backgroundColor:
                      empresaAtiva.corPrimaria + "15",
                  },
                ]}
              >
                <MaterialIcons
                  name={reward.icone}
                  size={30}
                  color={empresaAtiva.corPrimaria}
                />
              </View>

              <Text style={styles.rewardTitle}>
                {reward.titulo}
              </Text>

              <View
                style={[
                  styles.costBadge,
                  { backgroundColor: empresaAtiva.corPrimaria },
                ]}
              >
                <Text style={styles.costText}>
                  {reward.custo} pts
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* GANHAR MAIS */}
        <View style={styles.earnMoreCard}>
          <View style={styles.earnMoreInfo}>
            <Text style={styles.earnMoreTitle}>
              Como ganhar mais pontos?
            </Text>

            <Text style={styles.earnMoreSub}>
              A cada R$ 1,00 gasto no {empresaAtiva.nome},
              você ganha 1 ponto.
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.earnMoreBtn,
              { backgroundColor: empresaAtiva.corPrimaria },
            ]}
          >
            <Text style={styles.earnMoreBtnText}>
              Saber mais
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  greeting: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },

  subGreeting: {
    color: "#94a3b8",
    fontSize: 14,
    marginTop: 4,
  },

  profileBtn: {
    padding: 5,
  },

  selectorScroll: {
    marginBottom: 25,
  },

  companyCard: {
    backgroundColor: "#1e293b",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 16,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },

  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  companyName: {
    color: "#94a3b8",
    fontSize: 14,
  },

  companyNameActive: {
    color: "#fff",
    fontWeight: "bold",
  },

  mainPointsCard: {
    borderRadius: 24,
    padding: 25,
    marginBottom: 30,
    elevation: 10,
  },

  pointsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  pointsLabel: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
    textTransform: "uppercase",
  },

  pointsValue: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 4,
  },

  levelBadge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
  },

  levelText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },

  progressSection: {
    width: "100%",
  },

  progressInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  progressText: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
  },

  progressPercent: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },

  progressBarBg: {
    height: 8,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 4,
    overflow: "hidden",
  },

  progressBarFill: {
    height: "100%",
    backgroundColor: "#fff",
  },

  pointsNeeded: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 11,
    marginTop: 8,
    textAlign: "right",
  },

  quickActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 35,
  },

  actionItem: {
    alignItems: "center",
  },

  actionIcon: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: "#1e293b",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  actionLabel: {
    color: "#94a3b8",
    fontSize: 12,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  seeAll: {
    fontSize: 14,
    fontWeight: "600",
  },

  rewardsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 30,
  },

  rewardCard: {
    backgroundColor: "#1e293b",
    width: "48%",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
  },

  rewardIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  rewardTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },

  costBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
  },

  costText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
  },

  earnMoreCard: {
    backgroundColor: "#1e293b",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },

  earnMoreInfo: {
    flex: 1,
    marginRight: 15,
  },

  earnMoreTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  earnMoreSub: {
    color: "#94a3b8",
    fontSize: 12,
    lineHeight: 18,
  },

  earnMoreBtn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
  },

  earnMoreBtnText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});