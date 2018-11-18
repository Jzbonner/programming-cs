## Graph 
A **Graph** is a non linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph. 

![Diagram1](https://www.geeksforgeeks.org/wp-content/uploads/undirectedgraph.png)

Graphs are used to solve many real life problems. Graphs are used to represent networks. The networks may include paths in a city or telephone network or circuit network. Graphs are also used in social networks liked LinkedIn, Facebook and others. For example, on Facebook, each person is represented with a vertex (node). Each node is a structure and contains information like person id, name, gender, locale, etc.

If the edges of a graph data structure are bi-directional then we have an __undirected graph__. But if the edges have a direction, then we have a __directed graph__. Vertex can also have edges that direct to itself this is called a __self-loop__. 

![Diagram 2](https://adrianmejia.com/images/directed-vs-undirected-graph.jpg)

A _Graph_ can have cycles which means that if you traverse through the node, you could get to the same node more than once. The graph without cycles is called an _acyclic graph_. Not all vertices have to be connected in the graph. You might have isolated nodes or even separated sub-graphs. If all nodes have at least one edge, then you have a _connected graph_ and when all nodes are connected to all other nodes, we have a _complete graph_. 

### Common Applications of the Graph Data Structure in Industry
When edges have values attached to them, this is known as a **Weighted Graph**. If the weight is absent, we can assume the value is 1. Below are some common applications of _weighted graphs_ in industry: 

* Airline Traffic 
    * Node = Airport 
    * Edges = Direct flights between two airports 
    * Weight = Miles between two airports 
* GPS Navigation 
    * Node = Road Intersection 
    * Edge = Road 
    * Weight = Time required to go from one intersection to another 
* Network Routing 
    * Node = Server 
    * Edge = Data Link 
    * Weight = Connection Speed 

**Example of Graph Implementation in Javascript** 
```javascript 
class Graph {
  constructor() {
    this.vertices = [];
    this.edges = [];
    this.numberOfEdges = 0;
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }

  removeVertex(vertex) {
    const index = this.vertices.indexOf(vertex);
    if(~index) {
      this.vertices.splice(index, 1);
    }
    while(this.edges[vertex].length) {
      const adjacentVertex = this.edges[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
  }

  addEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
    this.numberOfEdges++;
  }

  removeEdge(vertex1, vertex2) {
    const index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
    const index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;
    if(~index1) {
      this.edges[vertex1].splice(index1, 1);
      this.numberOfEdges--;
    }
    if(~index2) {
      this.edges[vertex2].splice(index2, 1);
    }
  }

  size() {
    return this.vertices.length;
  }

  relations() {
    return this.numberOfEdges;
  }

  traverseDFS(vertex, fn) {
    if(!~this.vertices.indexOf(vertex)) {
      return console.log('Vertex not found');
    }
    const visited = [];
    this._traverseDFS(vertex, visited, fn);
  }

  _traverseDFS(vertex, visited, fn) {
    visited[vertex] = true;
    if(this.edges[vertex] !== undefined) {
      fn(vertex);
    }
    for(let i = 0; i < this.edges[vertex].length; i++) {
      if(!visited[this.edges[vertex][i]]) {
        this._traverseDFS(this.edges[vertex][i], visited, fn);
      }
    }
  }

  traverseBFS(vertex, fn) {
    if(!~this.vertices.indexOf(vertex)) {
      return console.log('Vertex not found');
    }
    const queue = [];
    queue.push(vertex);
    const visited = [];
    visited[vertex] = true;

    while(queue.length) {
      vertex = queue.shift();
      fn(vertex);
      for(let i = 0; i < this.edges[vertex].length; i++) {
        if(!visited[this.edges[vertex][i]]) {
          visited[this.edges[vertex][i]] = true;
          queue.push(this.edges[vertex][i]);
        }
      }
    }
  }

  pathFromTo(vertexSource, vertexDestination) {
    if(!~this.vertices.indexOf(vertexSource)) {
      return console.log('Vertex not found');
    }
    const queue = [];
    queue.push(vertexSource);
    const visited = [];
    visited[vertexSource] = true;
    const paths = [];

    while(queue.length) {
      const vertex = queue.shift();
      for(let i = 0; i < this.edges[vertex].length; i++) {
        if(!visited[this.edges[vertex][i]]) {
          visited[this.edges[vertex][i]] = true;
          queue.push(this.edges[vertex][i]);
          // save paths between vertices
          paths[this.edges[vertex][i]] = vertex;
        }
      }
    }
    if(!visited[vertexDestination]) {
      return undefined;
    }

    const path = [];
    for(var j = vertexDestination; j != vertexSource; j = paths[j]) {
      path.push(j);
    }
    path.push(j);
    return path.reverse().join('-');
  }

  print() {
    console.log(this.vertices.map(function(vertex) {
      return (`${vertex} -> ${this.edges[vertex].join(', ')}`).trim();
    }, this).join(' | '));
  }
}
```

### Representation 
There are different ways of representing a graph, each of them with its own advantages and disadvantages: 
* Adjacency list - For every vertex a list of adjacent vertices is stored. This can be viewed as storing the list of edges. This data structure allows storage of additional data on vertices and edges
* Adjacency matrix - Data is stored in a two-dimensional matrix, in which the row represents source vertices and columns represent destination vertices. The data on the edges and vertices must be stored externally