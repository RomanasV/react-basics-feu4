function PodcastItem({ time, title, date, image }) {
  // let { time, title, date, image } = props;'

  if (!title) {
    return;
  }

  let timeText = time ? `Trukmė: ${time}` : 'Trukmė nenurodyta';
  // let titleElement = title && <h3 className="podcast-title">{title}</h3>
  let dateElement = date && <span className="podcast-date">{date}</span>;

  return (
    <div className="podcast">
      <div className="podcast-controls">
        <img src={image} className="podcast-image" alt="podcast" />
        <span className="podcast-time">{timeText}</span>
        <button className="podcast-play">Play</button>
      </div>
      <div className="podcast-info">
        {title && <h3 className="podcast-title">{title}</h3>}
        {dateElement}
      </div>
    </div>
  )
}

export default PodcastItem;