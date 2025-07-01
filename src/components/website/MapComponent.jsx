import React, { useEffect, useRef, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { companyDetails } from "../../content/constant";

// Fix for default icon
let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  // Use useMemo to memoize the location array - TVH Beliciaa Towers coordinates
  const location = useMemo(() => [13.01889, 80.27389], []); // TVH Beliciaa Towers, Raja Annamalai Puram, Chennai coordinates

  const mapRef = useRef(); // Reference to the map

  // Center the map to the location when it loads
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(location, 16); // Set view to the location and zoom level
    }
  }, [location]); // Now location will not change on every render

  return (
    <MapContainer
      center={location}
      zoom={16}
      className="h-[70vh] w-full z-0 outline-none mt-10"
      whenCreated={(mapInstance) => (mapRef.current = mapInstance)} // Save the map instance to ref
      scrollWheelZoom={false} // Disable zooming with the scroll wheel
      doubleClickZoom={false} // Disable zooming by double-clicking
    //   dragging={false} // Disable dragging the map
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=""
      />
      <Marker position={location}>
        <Popup>
          <div>
            <strong>Headquarters:</strong><br />
            TVH Beliciaa Towers, Tower 2 6th Floor, 71/4 M.R.C. Nagar, Raja Annamalai Puram, Chennai, Tamil Nadu, 600028, India
          </div>
        </Popup>
      </Marker>
      <Marker position={[12.960951, 77.648331]}>
        <Popup>
          <div>
            <strong>Registered Office:</strong><br />
            {companyDetails.address.registered}
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
