import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const HotelMap = () => {
  const hotelLocation = [3.870399, 11.515688];

  return (
    <MapContainer className="h-20"
      center={hotelLocation}
      zoom={16}
       style={{ height: "100%", width: "100%",opacity:"90%", backgroundColor:"gray" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={hotelLocation}>
        <Popup>
          <strong>Hotel La Falaise</strong>
          <br />
          Yaoundé, Cameroon
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default HotelMap;