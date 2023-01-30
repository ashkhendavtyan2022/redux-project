import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Input } from './Components/Input';
import { Redux } from './Components/Reduc-components';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      {/* <Redux /> */}
      <Header />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/input" element={<Input />}/>
      </Routes>
    </div>
  );
}

export default App;
