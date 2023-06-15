import getCurrentLocation from "@/app/actions/getCurrentLocation";
import useResultsModal from "@/app/hooks/useResultsModal";

import {
  AddressAutofill,
  AddressMinimap,
  useConfirmAddress,
  config,
} from "@mapbox/search-js-react";
import axios from "axios";
import { useEffect, useCallback, useState } from "react";

interface MapBoxSearchProps {
  label: string;
  latitude: number;
  longitude: number;
}
const MapBoxSearch: React.FC<MapBoxSearchProps> = ({
  label,
  latitude,
  longitude,
}) => {
  const results = useResultsModal();
  const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN;
  const [token, setToken] = useState("");

  const { formRef, showConfirm } = useConfirmAddress({
    // minimap: true,
    // skipConfirmModal: (feature) => {
    //   ["exact", "high"].includes(feature.properties.match_code.confidence);
    // },
  });

  const onSuggest = useCallback((res: any) => {
    // console.log(res);
    // const feature = results.features[0];
    // props.suggestionSelect(res.features[0].geometry.coordinates);
  }, []);

  return (
    <div
      className="w-auto relative h-full"
      onClick={() => {
        results.onOpen();
      }}
    >
      {/* <>
        <AddressAutofill
          options={{
            language: "en",
            proximity: [longitude, latitude],
          }}
          accessToken={TOKEN!}
          // onSuggest={onSuggest}
          browserAutofillEnabled={false}
          popoverOptions={{
            placement: "top-start",
            flip: true,
            offset: 5,
          }}
        >
          <input
            className="w-full h-full rounded-lg pl-1"
            placeholder="Start typing your address, e.g. 123 Main..."
            // autoComplete="address-line1"
            id=""
          />
        </AddressAutofill>
      </> */}

      {/* </form> */}
    </div>
  );
};

export default MapBoxSearch;
