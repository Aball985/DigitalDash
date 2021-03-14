const GenericLocationMarker = ({ text, lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      {text}
    </div>
  );
};

export default GenericLocationMarker;
