import './NewsPage.css';
import News from '../News/News';
import Video from '../Video/Video';
import PodcastsList from '../PodcastsList/PodcastsList';
import Events from '../Events/Events';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function NewsPage() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content-wrapper">
          <main className="main-content">
            <h1 className="page-title">Naujienos</h1>
            <News />
            <Video />
          </main>

          <aside className="sidebar-content">
            <PodcastsList />
            <Events />
          </aside>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NewsPage;