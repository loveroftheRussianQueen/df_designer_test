import { memo, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Dropdown } from './components/DropDown';
import { MenuItem } from './components/MenuItem';
import axios from 'axios';
import { useFetch } from './hooks/useFetch';
import { Graph } from './components/Graph';

function App() {
  const [id, setId] = useState<number>();
  const { isLoading: loadingGraphs, data: graphs } = useQuery<
    GraphsList,
    Error
  >(['graphs'], () => axios.get('/api/graphs').then((res) => res.data));

  const { data: graph, error } = useFetch<Graph>(`/api/graphs/${id}`);

  const handleClick = (id: number) => {
    setId(id);
  };

  return (
    <div>
      <Dropdown label="Graphs">
        {loadingGraphs ? (
          <div>Loading...</div>
        ) : graphs ? (
          Object.keys(graphs).map((item, i) => (
            <MenuItem key={i} value={item} onClick={() => handleClick(i)}>
              {item}
            </MenuItem>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Dropdown>
      {graph ? <Graph graph={graph} /> : null}
    </div>
  );
}

export default App;
