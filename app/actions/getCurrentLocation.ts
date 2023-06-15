import axios from "axios";
import useLocation from "../hooks/useLocationStore";

export default async function getCurrentLocation() {
  axios.get("https://ipwhois.app/json/", {}).then(function (response) {
    console.log(response);
    const proximity = [
      response.data.latitude,
      response.data.longitude,
      response.data.ip,
    ];
    if (proximity !== null) {
      return proximity;
    }
  });
}
