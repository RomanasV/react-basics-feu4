import './NewsPage.css';
import News from '../../components/News/News';
import Video from '../../components/Video/Video';
import PodcastsList from '../../components/PodcastsList/PodcastsList';
import Events from '../../components/Events/Events';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import { eventsData } from '../../projectData';

function NewsPage() {
  const pageTitle = 'Naujienos';

  const podcastsData = [];

  return (
    <>
      <Header />
      <Container>
        <div className="content-wrapper">
          <main className="main-content">
            <h1 className="page-title">{pageTitle}</h1>
            <News />
            <Video />
          </main>

          <aside className="sidebar-content">
            <PodcastsList />
            <Events events={eventsData.events} sectionTitle={eventsData.sectionTitle} moreButton={eventsData.moreButton} />
          </aside>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default NewsPage;