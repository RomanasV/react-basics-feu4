import { Route, Routes, Link } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ProgramsPage from './pages/ProgramsPage/ProgramsPage';
import NewsPage from './pages/NewsPage/NewsPage';
import CounterPage from './pages/CounterPage/CounterPage';
import CarsPage from './pages/CarsPage/CarsPage';
import './App.css';
import ShoppingList from './pages/ShoppingList/ShoppingList';
import TodoPage from './pages/TodoPage/TodoPage';
import StudentsPage from './pages/StudentsPage/StudentsPage';
import MainNavigation from './components/MainNavigation/MainNavigation';
import ChuckNorrisPage from './pages/ChuckNorrisPage/ChuckNorrisPage';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path='/codeacademy' element={<MainPage />} />
        <Route path='/codeacademy/news' element={<NewsPage />} />
        <Route path='/codeacademy/programs' element={<ProgramsPage />} />
        <Route path='/other-projects/counter' element={<CounterPage />} />
        <Route path='/other-projects/cars' element={<CarsPage />} />
        <Route path='/other-projects/shopping-list' element={<ShoppingList />} />
        <Route path='/other-projects/todo' element={<TodoPage />} />
        <Route path='/other-projects/students' element={<StudentsPage /> } />
        <Route path='/other-projects/chuck-norris' element={<ChuckNorrisPage /> } />
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