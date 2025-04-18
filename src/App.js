import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile';
import CoursePage from './Pages/CoursePage';
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/courses'>Courses</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/courses" element={<CoursePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
