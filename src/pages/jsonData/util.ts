//Recursive function that takes in JSON data and transforms it into a tree data structure
//Makes data compatable with visualization library d3.js
export interface TreeNode {
  name: string;
  children?: TreeNode[];
  content?: string;
}
// eslint-disable-next-line
function convertToTreeFormat(data: any): TreeNode {
  if (typeof data !== 'object' || data === null) {
    throw new Error('Invalid JSON data. Expected an object.');
  }

  const rootNode: TreeNode = { name: 'root', children: [] }; // eslint-disable-next-line
  const queue: { node: TreeNode; data: any }[] = [{ node: rootNode, data }];

  while (queue.length > 0) {
    const { node, data } = queue.shift()!;
    const children: TreeNode[] = [];

    for (const key in data) {
      const value = data[key];

      const childNode: TreeNode = { name: key };

      if (typeof value === 'object' && value !== null) {
        childNode.children = value;
        queue.push({ node: childNode, data: value });
      } else if (typeof value === 'string') {
        childNode.content = value;
      }

      children.push(childNode);
    }

    node.children = children;
  }

  return rootNode;
}

export default convertToTreeFormat;
