import { Tabs } from 'expo-router';

export default function LayoutTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="mapa"
        options={{
          title: "Mapa",
        }}
      />

      <Tabs.Screen
        name="carteira"
        options={{
          title: "Carteira",
        }}
      />

      <Tabs.Screen
        name="pagar"
        options={{
          title: "Pagar",
        }}
      />

      <Tabs.Screen
        name="transferir"
        options={{
          title: "Transferir",
        }}
      />
    </Tabs>
  );
}