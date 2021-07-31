import { useState } from 'react';
import Context from './context/nodeContext';
import Card from './components/card/card';

function App() {

  const [note, setNote] = useState([
    {note: "note 1"},
    {note: "note 2"},
    {note: "note 3"},
    {note: "note 4"}
  ])

  return (
    <Context.Provider value={{note, setNote}}>
            <Card/>
    </Context.Provider>
  );
}

export default App;
