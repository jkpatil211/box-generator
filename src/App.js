import './App.css';

import BoxGenerator from './components/BoxGenerator/BoxGenerator';

function App() {
  return (
    <div className="App">
      <div style={{width: "100%"}}>
        <BoxGenerator title="Box Generator" />
      </div>
    </div>
  );
}

export default App;
