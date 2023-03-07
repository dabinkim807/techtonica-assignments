const filterByTerm = require("../filterByTerm");

// implementation of filterByTerm()
// should normally be defined in another file and imported into test file

// function filterByTerm(inputArr, searchTerm) {
//   if (!searchTerm) throw Error("searchTerm cannot be empty");
  
//   // new RegExp() with "i" as second argument ignores case
//   const regex = new RegExp(searchTerm, "i");
//   return inputArr.filter((arrayElement) => arrayElement.url.match(regex));
// }


describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);
    expect(filterByTerm(input, "LINK")).toEqual(output);    
  });
  test("it should filter by a search term (uRl)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" }
    ];

    expect(filterByTerm(input, "uRl")).toEqual(output);
  });
  test("it should throw Error when searchTerm is empty string", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    // for errors, must wrap the function we're testing inside another function, or else the error
    // will be thrown unexpectedly
    expect(() => filterByTerm(input, "")).toThrow("searchTerm cannot be empty");
  });
});