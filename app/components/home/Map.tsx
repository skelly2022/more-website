import axios from "axios";
import { useState, useRef, useCallback, useEffect } from "react";
import Container from "../Container";
import Map from "react-map-gl";
import MapLayersButton from "../reUseComponents/MapLayersButton";
import MapBoxSearch from "../inputs/MapBoxSearch";
import MapSearchResults from "../dashboard/map/MapSearchResults";
import useResultsModal from "@/app/hooks/useResultsModal";
import CustomSearchResults from "../dashboard/map/CustomSearchResults";

const MapHome = () => {
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 9,
  });
  const map = useRef(null);
  const [display, showDisplay] = useState(true);
  const results = useResultsModal();

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
  useEffect(() => {
    axios.get("https://ipwhois.app/json/", {}).then(function (response) {
      setViewState({
        longitude: response.data.longitude,
        latitude: response.data.latitude,
        zoom: 9,
      });
    });
  }, []);
  //   https://api.mapbox.com/styles/v1/mapright2/cjcteuse310fg2so4o4rra7m9/
  // https://api.mapbox.com/styles/v1/mapright2/cjcteuse310fg2so4o4rra7m9?access_token=pk.eyJ1Ijoib3dlbmxhbWIiLCJhIjoiY2lleWljcnF4MDBiOXQ0bHR0anRvamtucSJ9.t3YnHHqvQZ8Y0MTCNy0NNw

  // https://api.mapbox.com/styles/v1/mapright2/cjcteuse310fg2so4o4rra7m9?access_token=pk.eyJ1Ijoib3dlbmxhbWIiLCJhIjoiY2lleWljcnF4MDBiOXQ0bHR0anRvamtucSJ9.t3YnHHqvQZ8Y0MTCNy0NNw

  //api.mapbox.com/styles/v1/mapbox/streets-v9/sprite.json?access_token=pk.eyJ1Ijoib3dlbmxhbWIiLCJhIjoiY2lleWljcnF4MDBiOXQ0bHR0anRvamtucSJ9.t3YnHHqvQZ8Y0MTCNy0NNw
  https: return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative text-black">
      <div className="w-full h-screen flex items-center justify-center relative overflow-hidden rounded-sm">
        <Map
          {...viewState}
          mapboxAccessToken={TOKEN}
          style={{
            width: "80%",
            height: "80%",
            zIndex: 1,
            position: "relative",
            borderRadius: "2",
          }}
          mapStyle="mapbox://styles/mapright2/cjcteuse310fg2so4o4rra7m9"
          onRender={(event) => event.target.resize()}
          ref={map}
          onLoad={onMapLoad}
          onMove={(evt) => setViewState(evt.viewState)}
        >
          <div className="flex flex-row absolute top-6 left-6 z-10 h-9 gap-3 w-full ">
            <MapBoxSearch
              // label={"Enter Address"}
              latitude={viewState.latitude.toString()}
              longitude={viewState.longitude.toString()}
            />
            <MapLayersButton />
          </div>
          {results.isOpen && results.results === "" && (
            <div className="absolute top-20 left-6 z-10 w-full h-9">
              <MapSearchResults />
            </div>
          )}
          {results.isOpen && results.results !== "" && (
            <div className="absolute top-20 left-6 z-10 w-full h-9 ">
              <CustomSearchResults />
            </div>
          )}
        </Map>
      </div>
    </div>
  );
};

export default MapHome;
