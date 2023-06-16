import React, { memo, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import LineTo from 'react-lineto';
import { useNodes } from '../hooks/useNodes';
import { useColumns } from '../hooks/useColumns';

import './Graph.css';

type Props = {
  graph: Graph;
};

export const Graph = memo(function Graph(props: Props) {
  const { graph } = props;
  const [columns, setColumns] = useState<IThreeNode[][]>([]);

  useEffect(() => {
    const nodes = useNodes(graph);
    let columnNumber = 0;
    const columns: IThreeNode[][] = [];
    useColumns(nodes, [undefined], columns, columnNumber);
    setColumns(columns);
    console.log(columns);
  }, [graph]);

  return (
    <div>
      {columns.map((column, index) => (
        <Nodes>
          {column
            .sort((a, b) => b.fromIds.length - a.fromIds.length)
            .map((item, itemIndex) => (
              <div
                className={`columnItem`}
                key={`column_item_${index}_${itemIndex}`}
              >
                <div className="from">
                  <div className={`from_${item.id}`} />
                </div>
                {item.name}
                <div className="to">
                  <div className={`to_${item.id}`} />
                </div>
                {item.toIds.map((toId) => (
                  <LineTo
                    borderColor="#000"
                    borderWidth={2}
                    fromAnchor="center center"
                    toAnchor="center center"
                    key={`line_from_${item.id}_to_${toId}`}
                    from={`to_${item.id}`}
                    to={`from_${toId}`}
                    delay={0}
                  />
                ))}
              </div>
            ))}
        </Nodes>
      ))}
    </div>
  );
});

const Nodes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding: 10px;
`;
