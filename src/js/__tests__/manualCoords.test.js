import { isValid, formatCoords } from "../geolocation";

describe("Testing isValid function", () => {
  test("User can't submit an empty form", () => {
    const coords = " ";
    expect(isValid(coords)).toBeFalsy();
  });

  test("Coords shouldn't have any letters", () => {
    const coords = "33A.556651, K58.25258";
    expect(isValid(coords)).toBeFalsy();
  });

  test("Coords should have a comma between longitude and latitude", () => {
    const coords = "33.556651 58.25258";
    expect(isValid(coords)).toBeFalsy();
  });

  test("Latitude and longitude should have 1 or 2 digits before '.'", () => {
    const coords = "335.556651, 584.25258";
    expect(isValid(coords)).toBeFalsy();
  });

  test("Latitude and longitude can be negative", () => {
    const coords = "-33.556651, -1.25258";
    expect(isValid(coords)).toBeTruthy();
  });

  test("Latitude and longitude should have min 5 and max 7 digits after '.'", () => {
    const coordsShort = "33.556, 58.25258";
    const coordsLong = "33.556145558, 58.25258";
    expect(isValid(coordsShort)).toBeFalsy();
    expect(isValid(coordsLong)).toBeFalsy();
  });
});

describe("Testing formatCoords function", () => {
  test.each([
    ["55.58964, -0.58963", 55.58964, -0.58963],
    ["55.58964,-0.58963", 55.58964, -0.58963],
    ["[51.50851, -0.12572]", 51.50851, -0.12572],
  ])("should return a correct obj'", (input, lat, lng) => {
    expect(formatCoords(input)).toStrictEqual({
      latitude: lat,
      longitude: lng,
    });
  });
});
