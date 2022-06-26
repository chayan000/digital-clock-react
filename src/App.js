
import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './components/Header.js';
import Clock from './components/Clock.js';
import Timer from './components/Timer.js';
import Stop_watch from './components/Stop_watch.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Clock/> } />
        <Route path="/timer" element={<Timer />} />
        <Route path="/stopwatch" element={<Stop_watch />} />
      </Routes>
      
    </div>
  );
}

export default App;
