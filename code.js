function convertToAdjList(adjMatrix) {
  let adjList = [];
  for (let row = 0; row < adjMatrix.length; row++) {
    let list = [];
    for (let column = 0; column < adjMatrix.length; column++) {
      if (adjMatrix[row][column] == 1) {
        list.push(column);
      }
    }
    adjList.push(list);
  }
  return adjList;
}
