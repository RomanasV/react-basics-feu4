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
            <li>
              <Link to='/other-projects/cars'>Cars</Link>
            </li>
            <li>
              <Link to='/other-projects/shopping-list'>Shopping List</Link>
            </li>
            <li>
              <Link to='/other-projects/todo'>Todo</Link>
            </li>
            <li>
              <Link to='/other-projects/students'>Students</Link>
            </li>
          </ul>
        } />
        <Route path='/codeacademy' element={<MainPage />} />
        <Route path='/codeacademy/news' element={<NewsPage />} />
        <Route path='/codeacademy/programs' element={<ProgramsPage />} />
        <Route path='/other-projects/counter' element={<CounterPage />} />
        <Route path='/other-projects/cars' element={<CarsPage />} />
        <Route path='/other-projects/shopping-list' element={<ShoppingList />} />
        <Route path='/other-projects/todo' element={<TodoPage />} />
        <Route path='/other-projects/students' element={<StudentsPage /> } />
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