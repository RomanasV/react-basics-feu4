import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProgramsPage from './components/ProgramsPage/ProgramsPage';
import NewsPage from './components/NewsPage/NewsPage';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/programs' element={<ProgramsPage />} />
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