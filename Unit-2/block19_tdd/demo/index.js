function generateRandomPhoneNumber(a, b, c) {
    const areaCode = Math.floor(Math.random() * (a * 100)) + 100;
    const prefix = Math.floor(Math.random() * (b * 100)) + 100;
    const lineNumber = Math.floor(Math.random() * (c * 1000)) + 1000;
    return `(${areaCode}) ${prefix}-${lineNumber}`;
  }


module.exports = {generateRandomPhoneNumber};