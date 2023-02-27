import MainPage from './pages/MainPage/MainPage';
import ProgramsPage from './pages/ProgramsPage/ProgramsPage';
import NewsPage from './pages/NewsPage/NewsPage';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CounterPage from './pages/CounterPage/CounterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <ul>
            <li>
              <Link to='/codeacademy'>CodeAcademy Project</Link>
            </li>
            <li>
              <Link to='/other-projects/contacts'>Contacts Project</Link>
            </li>
            <li>
              <Link to='/other-projects/counter'>Counter</Link>
            </li>
          </ul>
        } />
        <Route path='/codeacademy' element={<MainPage />} />
        <Route path='/codeacademy/news' element={<NewsPage />} />
        <Route path='/codeacademy/programs' element={<ProgramsPage />} />
        <Route path='/other-projects/counter' element={<CounterPage />} />
        <Route path='/other-projects/contacts' element={<h1>Contacts</h1>} />
        <Route path='*' element={
          <div>
            <h1>404 error. Page not found</h1>
            <Link to='/'>Back to Home page</Link>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;