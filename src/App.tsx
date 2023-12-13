import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Login from './pages/Login'
import Nomination from './pages/Nomination'
import Registration from './pages/Registration'

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/nomination" element={<Nomination />} />
      </Routes>
    </Router>
  )
}

export default App
