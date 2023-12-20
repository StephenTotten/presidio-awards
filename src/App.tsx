import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Login from './pages/Login'
import Nomination from './pages/Nomination'
import Registration from './pages/Registration'
import Navbar from './components/Navbar';
import Approval from './pages/Approval';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/nomination" element={<Nomination />} />
        <Route path="/approval" element={<Approval />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
