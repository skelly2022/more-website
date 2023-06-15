import useResultsModal from "@/app/hooks/useResultsModal";
import Container from "../../Container";

const testData = [
  {
    address: "1905 Brooks St, Missoula, MT",
  },
  {
    address: "2528 Sunset Dr, Tampa, Fl",
  },
  {
    address: "Wildlife Management Area",
  },
  {
    address: "Missoula, MT",
  },
];

const MapSearchResults = () => {
  const results = useResultsModal();
  return (
    <div className="bg-white rounded-lg h-auto w-1/3 p-2.5">
      <div className="w-full flex justify-between font-light border-b h-10 items-center">
        <h1>Search Results</h1>
        <button
          className="pr-2"
          onClick={() => {
            results.onClose();
          }}
        >
          X
        </button>
      </div>
      <hr></hr>

      {testData.map((item) => (
        <div
          className="h-16 flex items-center hover:bg-neutral-300"
          key={item.address}
        >
          {item.address}
        </div>
      ))}
    </div>
  );
};

export default MapSearchResults;
