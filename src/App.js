
import { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import SearchResultsList from './Components/SearchResultsList';

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <SearchBar  setResults={setResults}/>
      <SearchResultsList results={results}/>
    </div>
  );
}

export default App;
