import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Preferences from './Preferences';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/preferences" element={<Preferences userId="12345" />} />
    </Routes>
  );
}

export default App;
