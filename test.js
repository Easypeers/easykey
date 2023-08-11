import EasyKey from "./index.js";
import assert from "assert";

function shannonEntropy(data) {
  let map = new Map();

  // Calculate the frequency of each character
  for (let char of data) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  let entropy = 0;
  const length = data.length;

  // Calculate Shannon entropy
  for (let count of map.values()) {
    let probability = count / length;
    entropy -= probability * Math.log2(probability);
  }

  return entropy;
}

let runs = 9_999;

describe("Check Shannon entropy of keys", () => {
  it("Must have an average entropy greater than 4.5", () => {
    for (let i = 0; i < runs; i++) {
      const easyKey = new EasyKey();
      const pair = easyKey.pair();

      // Uncomment the next line if you want to see the keys (beware of flooding your console)
      // console.log("Sample key:", pair);

      let entropies = [];

      for (let key in pair) {
        let entropy = shannonEntropy(pair[key]);
        // Uncomment the next line if you want to see the entropy values
        // console.log("Entropy", entropy);
        entropies.push(entropy);
      }

      let avgEntropy =
        entropies.reduce((sum, value) => sum + value, 0) / entropies.length;
      assert(
        avgEntropy > 4.5,
        `Expected average entropy > 4.5 but got ${avgEntropy}`
      );
    }
  });
});
