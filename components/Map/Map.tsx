"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import PopUpLayer from "./PopUpLayer";

import "./Map.css";
import RainLayer from "./RainLayer";

const Map = () => {
  const position = new LatLng(31.570903, 130.541868);

  return (
    <div className="Map">
      <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>'
          url="https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"
        />
        <PopUpLayer />
        <RainLayer />
      </MapContainer>
    </div>
  );
};

export default Map;
