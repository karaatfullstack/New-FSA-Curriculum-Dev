class ProductOfNumbers {
  constructor() {
    this.prefixProducts = [1];
  }

  add(num) {
    if (num === 0) {
      this.prefixProducts = [1];
    } else {
      const lastProduct = this.prefixProducts[this.prefixProducts.length - 1];
      this.prefixProducts.push(lastProduct * num);
    }
  }

  getProduct(k) {
    const n = this.prefixProducts.length;
    if (k >= n) {
      return 0;
    }

    return this.prefixProducts[n - 1] / this.prefixProducts[n - 1 - k];
  }
}

// Example usage
const obj = new ProductOfNumbers();
obj.add(3); // [3]
obj.add(0); // [3, 0]
obj.add(2); // [3, 0, 2]
obj.add(5); // [3, 0, 2, 5]
const product1 = obj.getProduct(2); // Last 2 numbers: [2, 5], Product: 10
console.log(product1); // Output: 10

obj.add(4); // [3, 0, 2, 5, 4]
const product2 = obj.getProduct(3); // Last 3 numbers: [5, 4, 2], Product: 40
console.log(product2); // Output: 40
