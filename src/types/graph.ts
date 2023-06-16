interface GraphsList {
    graphs: number[]; // IDs of the available graphs
  }

interface Graph {
  nodes: INode[];
  edges: IEdge[];
}

interface IEdge {
  fromId: number;
  toId: number;
}

interface INode {
  id: number,
  name: string,
}

interface IThreeNode extends INode {
  fromIds: number[],
  toIds: number[],
}

