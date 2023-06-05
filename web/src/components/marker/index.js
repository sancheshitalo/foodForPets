import "./styles.css";

import MarkerIcon from "../../assets/marker.png";
import MarkerIconSelected from "../../assets/marker-selected.png";

const MyMarker = () => {
  return (
    <div>
      <img src={MarkerIcon} />
      <img
        src="https://www.petlove.com.br/static/uploads/banner_image/image/44490/petlove_logo.png"
        className="img-marker"
      />
    </div>
  );
};

export default MyMarker;
