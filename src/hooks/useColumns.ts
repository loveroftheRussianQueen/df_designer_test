export const useColumns = (arr: IThreeNode[], parentIds: (number | undefined)[], columns: IThreeNode[][], columnNumber: number) => {
    const columnItems = arr.filter(item => item.fromIds.filter(i => parentIds.includes(i)).length > 0)
    
    if(columnItems.length === 0) {
        return;
    }
    
    columns.push(columnItems);

    const ids = [...new Set(columns[columnNumber].map(item => item.id).flat())];
    
    if(ids.length === 0) {
        return;
    }
    columnNumber++;
    useColumns(arr, ids, columns, columnNumber);
}