import NewsArticle from '../NewsArticle/NewsArticle';
import LargeButton from '../Partials/LargeButton';

function News({ newsData }) {
  if (newsData.mainNews.length === 0 && newsData.secondaryNews.length === 0) {
    return;
  }

  const mainNewsElements = newsData.mainNews.map((news, index) => <NewsArticle key={index} data={news} />);

  const mainNewsElement = newsData.mainNews.length > 0 && (
    <div className="main-news">
      {mainNewsElements}
    </div>
  );

  return (
    <section className="news">
      {mainNewsElement}

      {newsData.secondaryNews.length > 0 && (
        <div className="secondary-news">
          {newsData.secondaryNews.map((news, index) => (
            <NewsArticle key={index} data={news} />
          ))}
        </div>
      )}

      <LargeButton text={newsData.moreButton.text} url={newsData.moreButton.url} />
    </section>
  )
}

export default News;