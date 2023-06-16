function countRev(s) {
  // if length is odd, we can't balance
  if (s.length % 2 !== 0) return -1;

  // number of opening and closing braces
  let op = 0,
    cl = 0;

  let res = 0; // ans
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{") op++;
    else cl++;

    // if cl exceeds op, then we balance the brackets till that point
    if (cl > op) {
      res += cl - op;
      [cl, op] = [op, cl]; // swap using destructuring assignment
    }
  }

  // finally, the we reverse the half of brackets that form the unbalance
  // to balance the unbalanced pairs
  res += Math.abs(cl - op) / 2;
  return res;
}

// Example usage:
const input = "{{{}{{}}{{";
console.log(countRev(input)); // Output: 2
