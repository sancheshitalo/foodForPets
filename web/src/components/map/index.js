import "./styles.css";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import MyMarker from "../marker";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBsOEj0jVpI8ho7rEny-sM4KyYJb96qc1w",
  });

  const position = {
    lat: -23.416419,
    lng: -51.932993,
  };

  const markerIcon = {
    url: "https://www.petlove.com.br/static/uploads/banner_image/image/44490/petlove_logo.png",
  };

  return (
    <div className="container-map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={15}
        >
          <Marker
            position={position}
            options={{
              icon: {
                path: "M12 0C7.58 0 4 3.58 4 8c0 5.25 8 16 8 16s8-10.75 8-16c0-4.42-3.58-8-8-8zm0 11.5A3.5 3.5 0 1 1 12 5a3.5 3.5 0 0 1 0 6.5z",
                fillColor: "#269591",
                fillOpacity: 1,
                strokeWeight: 0,
                scale: 1.5,
                markerIcon,
              },
              className: "img-marker",
            }}
          ></Marker>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;
