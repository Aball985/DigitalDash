import { useState } from "react";
import GoogleMapReact from "google-map-react";
import GenericLocationMarker from "./markers/GenericLocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import "../../css/Map/Map.css";
import { Icon } from "@iconify/react";
import {
  RiEarthquakeFill,
  AiOutlineFire,
  GiIceberg,
  GiFlood,
  IoThunderstorm,
} from "react-icons/all";
// define constants

const NATURAL_EVENT_SEVERE_STORMS = 10;
const NATURAL_EVENT_EARTHQUAKES = 16;

const NATURAL_EVENT_REGISTRY = [
  { id: 8, emoji: <p>🔥</p> },
  { id: 9, emoji: <p>🌊</p> }, // Flood
  { id: 10, emoji: <p>⛈️</p> },
  { id: 12, emoji: <p>🌋</p> },
  { id: 15, emoji: <p>🧊</p> },
  { id: 16, emoji: <p>🏠</p> }, //earthquake
  { id: 17, emoji: <p>❄️</p> },
  { id: 18, emoji: <p>🌡️</p> },
];

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev, index) => {
    //switch statement for different events here, 8 = wildfires
    // 15 = icebergs
    //10 = Tropical Cyclones

    let id = ev.categories[0].id;

    let lat = ev.geometries[0].coordinates[1];
    let lng = ev.geometries[0].coordinates[0];

    if (isNaN(lat) || isNaN(lng)) {
      return null;
    }

    for (let i = 0; i < NATURAL_EVENT_REGISTRY.length; i++) {
      let event = NATURAL_EVENT_REGISTRY[i];
      if (id === event.id) {
        let onClick = () =>
          setLocationInfo({ id: ev.id, title: ev.title, emoji: event.emoji });
        return (
          <GenericLocationMarker
            text={event.emoji}
            key={index}
            lat={lat}
            lng={lng}
            onClick={onClick}
          />
        );
      }
    }

    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDgclrR8QqACLDYcgLjsLd1RIZV9-V8Bpc" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
      <div className="key-info">
        <h2>Event Key</h2>
        <div className="legend">
          <span>
            <input
              type="checkbox"
              className="checkmark"
              defaultChecked={true}
            />
            <p> 🔥 - Wildfires</p>
          </span>
          <span>
            <input
              type="checkbox"
              className="checkmark"
              defaultChecked={true}
            />
            <p> 🌊 - Floods</p>
          </span>
          <span>
            <input
              type="checkbox"
              className="checkmark"
              defaultChecked={true}
            />
            <p> ⛈️ - Severe Storms</p>
          </span>
          <span>
            <input
              type="checkbox"
              className="checkmark"
              defaultChecked={true}
            />
            <p> 🌋 - Volcanoes</p>
          </span>
          <span>
            <input
              type="checkbox"
              className="checkmark"
              defaultChecked={true}
            />
            <p> 🧊 - Icebergs</p>
          </span>
          <span>
            <input
              type="checkbox"
              className="checkmark"
              defaultChecked={true}
            />
            <p> 🏠 - Earthquakes</p>
          </span>
          <span>
            <input
              type="checkbox"
              className="checkmark"
              defaultChecked={true}
            />
            <p> ❄️ - Winter Storms</p>
          </span>
          <span>
            <input
              type="checkbox"
              className="checkmark"
              defaultChecked={true}
            />
            <p> 🌡️ - Heat Waves</p>
          </span>
        </div>
      </div>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 39.9612,
    lng: -82.9988,
  },
  zoom: 6,
};

export default Map;
