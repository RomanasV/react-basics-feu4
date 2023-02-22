import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProgramsPage from './components/ProgramsPage/ProgramsPage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MainPage /> */}
      <ProgramsPage />
      <Footer />
    </div>
  );
}

export default App;