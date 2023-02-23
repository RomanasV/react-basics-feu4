import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProgramsPage from './components/ProgramsPage/ProgramsPage';
import NewsPage from './components/NewsPage/NewsPage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MainPage /> */}
      {/* <ProgramsPage /> */}
      <NewsPage />
      <Footer />
    </div>
  );
}

export default App;