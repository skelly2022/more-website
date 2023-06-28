"use client";

import useResultsModal from "@/app/hooks/useResultsModal";
import React, { useEffect, useState } from "react";

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

export default function CustomSearchResults() {
  const results = useResultsModal();
  const [data, setData] = useState("");
  useEffect(() => {
    const freeData = results.results;
    console.log(freeData);
  }, [results]);
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3bg-white rounded-lg h-auto p-3 bg-white">
      <div className="w-full flex justify-between font-light border-b h-10 items-center">
        <h1>Custom Results</h1>
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

      {/* {data.map((item: any) => (
        <div
          className="h-16 flex items-center hover:bg-neutral-300 rounded-md"
          key={item.address}
        >
          {item.place.name}
        </div>
      ))} */}
    </div>
  );
}
