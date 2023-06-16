export function useNodes(graphData: Graph) {
    return graphData.nodes.map(node => {
        const toIDs = graphData.edges.filter(edge => edge.fromId === node.id).map(edge => edge.toId);
        const fromIds = graphData.edges.filter(edge => edge.toId === node.id).map(edge => edge.fromId);
        return ({
          ...node,
          fromIds: fromIds.length === 0 ? [undefined] : fromIds,
          toIds: toIDs,
        }) as IThreeNode
    })
}