import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import Button from "./Button";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={()=> navigate("form")}>
      <h1>Map</h1>
      <h2>
        Position: {lat} , {lng}
      </h2>
      <Button type="position" onclick={() => {
          setSearchParams({ lat: 50, lng: 23 })}}>Change pos</Button>
      <button
        onClick={() => {
          setSearchParams({ lat: 50, lng: 23 });
        }}
      >
        Change pos
      </button>
    </div>
  );
}

export default Map;
