class Node {
  constructor(position) {
    this.position = position;
  }
  addChildren() {
    const children = [];
    const x = this.position[0];
    const y = this.position[1];
    const operations = {
      1: [1, 2],
      2: [1, -2],
      3: [-1, 2],
      4: [-1, -2],
      5: [2, 1],
      6: [2, -1],
      7: [-2, 1],
      8: [-2, -1],
    };
    for (const operation in operations) {
      const childPosition = [
        x + operations[operation][0],
        y + operations[operation][1],
      ];
      if (
        childPosition[0] <= 8 &&
        childPosition[0] > 0 &&
        childPosition[1] > 0 &&
        childPosition[1] <= 8
      ) {
        children.push(new Node(childPosition));
      }
    }
    return children;
  }
}

function findPath(start, end) {
  let queue = [{ node: start, path: [] }];
  while (queue.length > 0) {
    const currentNode = queue[0].node;
    const currentPath = queue[0].path;
    queue.shift();
    for(const child of currentNode.addChildren()){
        queue.push({node: child, path:[...currentPath, currentNode.position]});
    }
    if (
      currentNode.position[0] === end.position[0] &&
      currentNode.position[1] === end.position[1]
    ) {
      console.log("Path found!");
      return currentPath;
    }
  }
  return null;
}

let start = new Node([3, 3]);
let end = new Node([4, 3]);
console.log(findPath(start, end));
