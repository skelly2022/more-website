import { useEffect, useRef, useState } from "react";

import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Container from "../Container";
import useSideBar from "@/app/hooks/useSideBar";

interface MapProps {
  isOpen: boolean;
}

const MapContainer: React.FC<MapProps> = ({ isOpen }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-80.29);
  const [lat, setLat] = useState(25.717);
  const [zoom, setZoom] = useState(9);

  const sideBar = useSideBar();

  return (
    <div className="text-black relative h-screen flex items-center ">
      <div className="mx-auto px-3 w-full h-full">
        <div className="h-4/5 overflow-hidden">
          <Map
            initialViewState={{
              longitude: lng,
              latitude: lat,
              zoom: zoom,
            }}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
            style={{ width: "100vw", height: "100vh" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            onRender={(event) => event.target.resize()}
          />
        </div>
      </div>
    </div>
  );
};
export default MapContainer;
