"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Map from "react-map-gl";
import Container from "../Container";
import useSideBar from "@/app/hooks/useSideBar";
import MapBoxSearch from "../inputs/MapBoxSearch";
import MapLayersButton from "../dashboard/map/MapLayersButton";
import MapSearchResults from "../dashboard/map/MapSearchResults";
import useResultsModal from "@/app/hooks/useResultsModal";

import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

interface MapProps {
  isOpen: boolean;
  location: any;
}

const MapContainer: React.FC<MapProps> = ({ isOpen, location }) => {
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 9,
  });
  const map = useRef(null);
  const [display, showDisplay] = useState(true);

  // eslint-disable-next-line
  const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN;
  const onMapLoad = useCallback(() => {
    // mapRef.current.on("move", () => {
    //   // do something
    // });
    showDisplay(true);
  }, []);
  useEffect(() => {
    axios.get("https://ipwhois.app/json/", {}).then(function (response) {
      setViewState({
        longitude: response.data.longitude,
        latitude: response.data.latitude,
        zoom: 9,
      });
    });
  }, []);

  return (
    <div className="text-black relative h-screen flex items-center ">
      <div className="mx-auto px-3 w-full h-full">
        <div className="h-4/5 overflow-hidden relative">
          <Container>
            <div className="flex flex-row absolute top-6 left-9 z-10 h-9 gap-3 w-full">
              <MapBoxSearch
                label={"Enter Address"}
                latitude={viewState.latitude}
                longitude={viewState.longitude}
              />
              <MapLayersButton />
            </div>
            {/* {results.isOpen && (
                <div className="absolute top-20 left-9 z-10 w-full h-9">
                  <MapSearchResults />
                </div>
              )} */}
          </Container>

          <Map
            {...viewState}
            mapboxAccessToken={TOKEN!}
            style={{ width: "100vw", height: "100vh", zIndex: 1 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            onRender={(event) => event.target.resize()}
            ref={map}
            onLoad={onMapLoad}
            onMove={(evt) => setViewState(evt.viewState)}
          ></Map>
        </div>
      </div>
    </div>
  );
};
export default MapContainer;
