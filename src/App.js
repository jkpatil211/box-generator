import logo from './logo.svg';
import './App.css';

import Slider from './components/Slider/Slider';
import BoxShadowGenerator from './components/BoxShadowGenerator/BoxShadowGenerator';

function App() {
  return (
    <div className="App">
      <div style={{width: "100%"}}>
        {/* <Slider infinite={true} /> */}
        <BoxShadowGenerator />
      </div>
    </div>
  );
}

export default App;
