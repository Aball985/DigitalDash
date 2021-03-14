const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <div className="location-icon"> {info.emoji} </div>
      <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
