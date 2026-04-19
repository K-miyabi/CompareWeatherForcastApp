import { useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useMapContext } from "@/hooks/useMap";

function PopUpLayer() {
  const map = useMap();
  const { pastDate } = useMapContext();
  console.log("選択された過去の日付:", pastDate);

  useMapEvents({
    async click(e) {
      const { lat, lng } = e.latlng;

      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&hourly=precipitation,cloudcover,uv_index`,
      );
      const data = await res.json();

      const weather = data.current_weather;
      const hourly = data.hourly;

      const params = {
        latitude: String(lat),
        longitude: String(lng),
        start_date: String(pastDate),
        end_date: String(pastDate),
        hourly: "temperature_2m,precipitation",
        timezone: "Asia/Tokyo",
      };
      const query = new URLSearchParams(params).toString();
      const pastRes = await fetch(
        `https://archive-api.open-meteo.com/v1/archive?${query}`,
      );
      const past = await pastRes.json();
      const hour = new Date().getHours();
      const content = ` 
      <div style="display: flex; gap: 8px;">
        <div>        
        緯度: ${lat.toFixed(4)} / 経度: ${lng.toFixed(4)}<br>
        気温: ${weather.temperature}℃<br>
        風速: ${weather.windspeed} km/h<br>
        降水量: ${hourly.precipitation[0]} mm<br>
        雲量: ${hourly.cloudcover[0]} %<br>
        UV指数: ${hourly.uv_index[0]}
        </div>
        <div>
        ${pastDate} ${hour}時<br>
        気温: ${past.hourly.temperature_2m[hour]}℃<br>
        降水量: ${past.hourly.precipitation[hour]} mm<br>
        </div>
      </div>
    `;

      L.popup().setLatLng([lat, lng]).setContent(content).openOn(map);
    },
  });

  return null;
}

export default PopUpLayer;
