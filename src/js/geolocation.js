export function getCoordinates(callback) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (data) {
        const { latitude, longitude } = data.coords;
        console.log(data.coords);
        callback(`[${latitude}, ${longitude}]`);
      },
      function (err) {
        console.log(err);
        callback(null);
      },
      { enableHighAccuracy: true },
    );
  } else {
    console.log("no geolocation");
    callback(null);
  }
}

export function isValid(value) {
  const formattedValue = value.replace(/[a-zA-Z]/g, "").trim();
  if (!formattedValue.includes(",") || formattedValue < 5) return false;

  return true;
}

export function formatCoords(coords) {
  const formattedCoords = coords.replace(/[\s\[\]]/g, "");
  const index = formattedCoords.indexOf(",");
  const latitude = formattedCoords.slice(0, index);
  const longitude = formattedCoords.slice(index + 1);
  return { latitude, longitude };
}
