import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { useMapContext } from "@/hooks/useMap";

function RainLayer() {
  const map = useMap();
  const { isRainLayer } = useMapContext();

  useEffect(() => {
    let layer: L.TileLayer;

    const loadRain = async () => {
      const res = await fetch(
        "https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N1.json",
      );
      const data = await res.json();

      const latest = data[0];
      const url = `https://www.jma.go.jp/bosai/jmatile/data/nowc/${latest.basetime}/none/${latest.validtime}/surf/hrpns/{z}/{x}/{y}.png`;

      layer = L.tileLayer(url, {
        opacity: 0.5,
        zIndex: 100,
        minNativeZoom: 4,
        maxZoom: 18,
        maxNativeZoom: 10,
        attribution:
          '&copy; <a href="https://www.jma.go.jp/jma/index.html">気象庁</a>',
      });

      layer.addTo(map);
    };
    if (isRainLayer) loadRain();

    return () => {
      if (layer) map.removeLayer(layer);
    };
  }, [map, isRainLayer]);

  return null;
}

export default RainLayer;
