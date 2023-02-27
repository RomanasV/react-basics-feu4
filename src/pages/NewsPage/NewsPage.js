import './NewsPage.css';
import News from '../../components/News/News';
import Video from '../../components/Video/Video';
import PodcastsList from '../../components/PodcastsList/PodcastsList';
import Events from '../../components/Events/Events';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import { eventsData, podcastsData, newsPageTitle, newsData } from '../../projectData';

function NewsPage() {
  const pageTitle = newsPageTitle;

  let sidebar;

  if (podcastsData.podcasts.length > 0 || eventsData.events.length > 0) {
    sidebar = (
      <aside className="sidebar-content">
        {podcastsData.podcasts.length > 0 && <PodcastsList podcasts={podcastsData.podcasts} sectionTitle={podcastsData.sectionTitle} />}
        <Events events={eventsData.events} sectionTitle={eventsData.sectionTitle} moreButton={eventsData.moreButton} />
      </aside>
    )
  }

  return (
    <>
      <Header />
      <Container>
        <div className="content-wrapper">
          <main className="main-content">
            <h1 className="page-title">{pageTitle}</h1>
            <News newsData={newsData} />
            <Video />
          </main>

          {sidebar}

        </div>
      </Container>
      <Footer />
    </>
  )
}

export default NewsPage;