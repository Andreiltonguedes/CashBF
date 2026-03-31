import { Platform } from "react-native";
import "leaflet/dist/leaflet.css";

export default function Mapa() {

  if (Platform.OS === "web") {

    const React = require("react");
    const { useState, useEffect, useRef } = React;
    const { MapContainer, TileLayer, Marker, Popup } = require("react-leaflet");
    const L = require("leaflet");

    // 🔥 ÍCONES COLORIDOS
    const criarIcone = (cor) => {
      return new L.Icon({
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${cor}.png`,
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });
    };

    const icones = {
      mercado: criarIcone("green"),
      padaria: criarIcone("orange"),
      restaurante: criarIcone("red"),
    };

    const mapRef = useRef(null);

    // 💰 CARTEIRA
    const [saldo, setSaldo] = useState(120);

    // 🎯 FILTRO
    const [categoria, setCategoria] = useState("todos");

    // 🌍 CIDADES
    const cidades = {
      "Baía Formosa": [-6.371, -35.003],
      "Tibau do Sul": [-6.209, -35.086],
      "Canguaretama": [-6.384, -35.128],
      "Goianinha": [-6.264, -35.211],
    };

    const [cidade, setCidade] = useState("Baía Formosa");

    // 📍 COMÉRCIOS
    const comercios = [
      { id: 1, nome: "Mercadinho Central", categoria: "mercado", cidade: "Baía Formosa", lat: -6.3731, lng: -35.0050, cashback: "5%" },
      { id: 2, nome: "Padaria Formosa", categoria: "padaria", cidade: "Baía Formosa", lat: -6.3725, lng: -35.0040, cashback: "3%" },
      { id: 3, nome: "Restaurante do João", categoria: "restaurante", cidade: "Baía Formosa", lat: -6.3718, lng: -35.0035, cashback: "10%" },

      { id: 4, nome: "Mercado Pipa", categoria: "mercado", cidade: "Tibau do Sul", lat: -6.2095, lng: -35.0865, cashback: "4%" },
      { id: 5, nome: "Padaria Pipa", categoria: "padaria", cidade: "Tibau do Sul", lat: -6.2102, lng: -35.0858, cashback: "2%" },
    ];

    // 🔍 FILTRO FINAL
    const filtrados = comercios.filter(c =>
      (categoria === "todos" || c.categoria === categoria) &&
      c.cidade === cidade
    );

    // 🧭 TROCAR CIDADE (COM ZOOM)
    const mudarCidade = (nome) => {
      setCidade(nome);

      if (mapRef.current) {
        const coords = cidades[nome];
        mapRef.current.setView(coords, 14);
      }
    };

    const abrirRota = (lat, lng) => {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`);
    };

    const ganharCashback = () => {
      setSaldo(saldo + 10);
    };

    return (
      <div style={{ display: "flex", height: "100vh" }}>

        {/* 📂 SIDEBAR */}
        <div style={{
          width: "260px",
          background: "#1e272e",
          color: "#fff",
          padding: "15px",
        }}>
          <h2>💰 Cash BF</h2>

          {/* 💰 CARTEIRA */}
          <div style={{
            background: "#2ecc71",
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}>
            <strong>Saldo</strong><br />
            {saldo} Formosinhas
          </div>

          {/* 🌍 CIDADES */}
          <h3>Cidades</h3>
          {Object.keys(cidades).map((c) => (
            <button
              key={c}
              onClick={() => mudarCidade(c)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "none",
                borderRadius: "5px",
                background: cidade === c ? "#3498db" : "#34495e",
                color: "#fff"
              }}
            >
              {c}
            </button>
          ))}

          {/* 🎯 CATEGORIAS */}
          <h3 style={{marginTop:"20px"}}>Categorias</h3>
          {["todos", "mercado", "padaria", "restaurante"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "none",
                borderRadius: "5px",
                background: categoria === cat ? "#2ecc71" : "#34495e",
                color: "#fff"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🗺️ MAPA */}
        <div style={{ flex: 1, position: "relative" }}>

          <MapContainer
            center={cidades[cidade]}
            zoom={14}
            style={{ height: "100%", width: "100%" }}
            whenCreated={(map) => (mapRef.current = map)}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {filtrados.map((c) => (
              <Marker
                key={c.id}
                position={[c.lat, c.lng]}
                icon={icones[c.categoria]}
              >
                <Popup>
                  <strong>{c.nome}</strong><br />
                  Categoria: {c.categoria}<br />
                  Cashback: {c.cashback}<br /><br />

                  <button onClick={() => abrirRota(c.lat, c.lng)}>
                    🧭 Ir
                  </button>

                  <button
                    style={{
                      marginLeft: "5px",
                      background: "#2ecc71",
                      color: "#fff",
                      border: "none",
                      padding: "5px"
                    }}
                    onClick={ganharCashback}
                  >
                    💰 Ganhar
                  </button>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

        </div>
      </div>
    );
  }

  return null;
}