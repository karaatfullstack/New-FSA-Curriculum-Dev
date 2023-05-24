function simplifyPath(path) {
  const stack = [];
  const components = path.split("/").filter(Boolean);

  for (let component of components) {
    if (component === ".") {
      continue;
    } else if (component === "..") {
      stack.pop();
    } else {
      stack.push(component);
    }
  }

  return "/" + stack.join("/");
}

// Example usage
const path = "/a//b/c/../d/";
const canonicalPath = simplifyPath(path);
console.log(canonicalPath); // Output: "/a/b/d"
