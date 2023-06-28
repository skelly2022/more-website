"use client";
import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Container from "../components/Container";

const Page = () => {
  const [center, setCenter] = useState({ lat: -4.043477, lng: 39.668205 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();
  return (
    <div className="pt-28 w-screen h-screen bg-gray-900">
      <Container>
        <div>About</div>
      </Container>
    </div>
  );
};

export default Page;
