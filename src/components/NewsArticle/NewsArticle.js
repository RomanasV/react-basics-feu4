export default function NewsArticle({ data }) {
  if (!data.link || !data.title) {
    return;
  }

  const dateElement = data.date && <span className="article-date">{data.date}</span>;

  return (
    <article className="news-article">
      <a href={data.link}>
        {data.imageUrl && (
          <div className="image-wrapper">
            <img src={data.imageUrl} alt={data.title} />
          </div>
        )}

        <div className="info-wrapper">
          {data.category && <span className="article-category">{data.category}</span>}
          <h2 className="article-title">{data.title}</h2>
          {dateElement}
        </div>
      </a>
    </article>
  )
}