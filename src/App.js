import { useState } from 'react';
import Context from './context/nodeContext';
import Card from './components/card/card';

function App() {

  const [note, setNote] = useState([])

  return (
    <Context.Provider value={{note, setNote}}>
            <Card/>
    </Context.Provider>
  );
}

export default App;
