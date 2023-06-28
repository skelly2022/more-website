"use client";

import useResultsModal from "@/app/hooks/useResultsModal";
import { ChangeEvent, useEffect, useState } from "react";

interface MapBoxSearchProps {
  latitude: string;
  longitude: string;
}

const MapBoxSearch: React.FC<MapBoxSearchProps> = ({ latitude, longitude }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Array<{ place_name: string }>>(
    []
  );
  const results = useResultsModal();

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      setQuery(event.target.value);
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?proximity=${longitude},${latitude}&country=US&access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}&autocomplete=true`;
      const response = await fetch(endpoint);
      const resultsMap = await response.json();
      console.log(resultsMap);
      if (resultsMap?.features.length === 0) {
        results.setResults("");
      } else {
        results.setResults(resultsMap?.features);
      }
      // setSuggestions(results?.features);r
    } catch (error: any) {
      console.log("Error fetching data: " + error.message);
    }
  };
  /* Display location selected by User  */
  const handleSelectAddress = (selectedAddress: string) => {
    localStorage.setItem("delivery_address", selectedAddress);
    setQuery(selectedAddress);
    setSuggestions([]);
    // setIsEditing(false);
  };

  return (
    <input
      onClick={() => {
        results.onOpen();
      }}
      className="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pl-3 pr-3 h-full z-15 outline-none rounded-lg bg-white text-black"
      value={query}
      onChange={handleChange}
      placeholder="Search an Address..."
    ></input>
  );
};

export default MapBoxSearch;
