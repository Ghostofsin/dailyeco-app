import footprintCalc from "@/lib/footprint/footprintCalc";

describe.each([
  { transport: undefined, distance: 1000, expected: 0 },
  { transport: "car", distance: 0, expected: 0 },
  { transport: "car", distance: undefined, expected: 0 },
  { transport: "car", distance: "any string", expected: 0 },
])('check if transport or distance is not defined', ({ transport, distance, expected }) => {

  it(`returns zero if transport = ${transport} and distance = ${distance}`, () => {
    expect(footprintCalc(transport, distance)).toBe(expected);
  });

});

describe("check if transport and distance are correct", () => {

	it(`returns number if transport = car and distance = 1000`, () => {
    expect(footprintCalc("car", 1000)).toBe(82);
  });
}); 
