//create a class with vertices and edges of graph
class Graph {
  constructor() {
    this.vertices = new Set();
    this.edges = {};
  }
  //function to add vertex
  addVertex(vertex) {
    this.vertices.add(vertex);
    this.edges[vertex] = [];
  }
  //function to add edge
  addEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
  }
  //perform BFS
  bfs(startVertex) {
    const visited = {};
    const queue = [];
    const levels = {};

    visited[startVertex] = true;
    queue.push(startVertex);
    levels[startVertex] = 0;

    let currentLevel = 0;
    let levelString = "";

    // checks if the queue is not empty
    while (queue.length > 0) {
      const currentVertex = queue.shift();
      const vertexLevel = levels[currentVertex];

      if (vertexLevel > currentLevel) {
        console.log(levelString);
        levelString = "";
        currentLevel = vertexLevel;
      }

      levelString += currentVertex + " ";

      const adjacentVertices = this.edges[currentVertex] || [];
      for (const adjacentVertex of adjacentVertices) {
        if (!visited[adjacentVertex]) {
          visited[adjacentVertex] = true;
          queue.push(adjacentVertex);
          levels[adjacentVertex] = vertexLevel + 1;
        }
      }
    }

    if (levelString !== "") {
      console.log(levelString);
    }
  }
//creates the graph structure
  getGraphStructure() {
    let graphStructure = "";
    for (const vertex of this.vertices) {
      const connections = this.edges[vertex].join(" -> ");
      graphStructure += `${vertex} -> ${connections}\n`;
    }
    return graphStructure.trim();
  }
}

// Hardcoded Inputs
const graph = new Graph();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");

// Add edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("E", "G");

// Perform level order traversal (BFS) starting from vertex 'A'
console.log("Level order traversal:");
graph.bfs("A");

// Display the graph structure
console.log("\nGraph structure:");
console.log(graph.getGraphStructure());
