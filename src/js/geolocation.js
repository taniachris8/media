export function getCoordinates(callback) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (data) {
        const { latitude, longitude } = data.coords;
        callback(`[${latitude.toFixed(5)}, ${longitude.toFixed(5)}]`);
      },
      function (err) {
        console.log(err);
        callback(null);
      },
      { enableHighAccuracy: true },
    );
  } else {
    callback(null);
  }
}

export function isValid(value) {
  // eslint-disable-next-line no-useless-escape
  const cleanValue = value.trim().replace(/[\s\[\]]/g, "");
  if (!cleanValue) return false;

  // eslint-disable-next-line no-useless-escape
  const regex = /^([\-−]?\d{1,2}\.\d{5,7})\,([\-−]?\d{1,2}\.\d{5,7})$/g;
  return regex.test(cleanValue);
}

export function formatCoords(coords) {
  // eslint-disable-next-line no-useless-escape
  const formattedCoords = coords.replace(/[\s\[\]]/g, "");
  const index = formattedCoords.indexOf(",");
  const latitude = Number(formattedCoords.slice(0, index));
  const longitude = Number(formattedCoords.slice(index + 1));

  return { latitude, longitude };
}
