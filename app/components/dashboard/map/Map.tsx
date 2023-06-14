import MapContainer from "../../map/Map";

interface MapProps {
  isOpen: boolean;
}

const Map: React.FC<MapProps> = ({ isOpen }) => {
  return (
    <div className="">
      <MapContainer isOpen={isOpen} />
    </div>
  );
};

export default Map;
