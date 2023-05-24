//Using Dijkstra's algorithm, what is the minimum distance and shortest path between Dallas and Seattle in the given graph?
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(vertex, priority) {
    this.values.push({ vertex, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ city: vertex2, weight });
    this.adjacencyList[vertex2].push({ city: vertex1, weight });
  }

  dijkstra(start, end) {
    const distances = {};
    const previous = {};
    const priorityQueue = new PriorityQueue();
    const visited = new Set();

    // Initialize distances and previous
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (priorityQueue.values.length) {
      const { vertex } = priorityQueue.dequeue();
      visited.add(vertex);

      if (vertex === end) {
        // Ceate the path from end to start
        const path = [];
        let currentVertex = end;
        while (currentVertex) {
          path.unshift(currentVertex);
          currentVertex = previous[currentVertex];
        }
        return { distance: distances[end], path };
      }

      if (distances[vertex] !== Infinity) {
        for (let neighbor of this.adjacencyList[vertex]) {
          if (!visited.has(neighbor.city)) {
            const distance = distances[vertex] + neighbor.weight;
            if (distance < distances[neighbor.city]) {
              distances[neighbor.city] = distance;
              previous[neighbor.city] = vertex;
              priorityQueue.enqueue(neighbor.city, distance);
            }
          }
        }
      }
    }

    // If no path is found
    return { distance: -1, path: [] };
  }
}

// Given the vertices as city namesand edges as distance between two cities.
const graph = new Graph();

graph.addVertex("Dallas");
graph.addVertex("Lexington");
graph.addVertex("Boston");
graph.addVertex("Chicago");
graph.addVertex("Seattle");

graph.addEdge("Dallas", "Lexington", 3000);
graph.addEdge("Dallas", "Boston", 2700);
graph.addEdge("Lexington", "Chicago", 2000);
graph.addEdge("Boston", "Chicago", 2200);
graph.addEdge("Boston", "Seattle", 800);
graph.addEdge("Chicago", "Seattle", 1700);

const startCity = "Dallas";
const endCity = "Seattle";

const { distance, path } = graph.dijkstra(startCity, endCity);
if (distance !== -1) {
  console.log(
    `Minimum distance between ${startCity} and ${endCity}: ${distance} miles`
  );
  console.log(`Shortest path: ${path.join(" -> ")}`);
} else {
  console.log(`There is no path between ${startCity} and ${endCity}.`);
}
