class EasyKeys {
  constructor() {
    this.chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  }

  getRandomFloats(length) {
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    return Array.from(array).map((int) => int / 2 ** 32);
  }

  generateKeySegment(length) {
    // Get a batch of random floats equal to the length of the key segment.
    const floats = this.getRandomFloats(length);
    let result = "";
    for (let i = 0; i < length; i++) {
      result += this.chars[Math.floor(floats[i] * this.chars.length)];
    }
    return result;
  }

  generateCompositeKey() {
    return this.generateKeySegment(43) + "." + this.generateKeySegment(43);
  }

  pair() {
    return {
      pub: this.generateCompositeKey(),
      priv: this.generateKeySegment(43),
      epub: this.generateCompositeKey(),
      epriv: this.generateKeySegment(43),
    };
  }
}

export default EasyKeys;
