import "./styles.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Marker from "../marker";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBsOEj0jVpI8ho7rEny-sM4KyYJb96qc1w",
  });

  return (
    <div className="container-map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{
            lat: -23.4507771,
            lng: -51.9228019,
          }}
          zoom={15}
        >
          <Marker lat={-23.4507771} lng={-51.9228019} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;
