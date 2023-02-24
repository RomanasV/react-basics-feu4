function EventItem(props) {
  let { url, image, title, day, month, location } = props.event;
  
  if (!title) {
    return;
  }

  return (
    <div className="event">
      <a href={url}>
        <div className="image-wrapper">
          {image && <img src={image} alt={title} />}
        </div>
        <div className="event-info">
          {(day || month) && (
            <div className="date">
              {day && <div className="day">{day}</div>}
              {month && <div className="month">{month}</div>}
            </div>
          )}
          

          {location && <span className="event-location">{location}</span>}
          <h3 className="event-title">{title}</h3>
        </div>
      </a>
    </div>
  )
}

export default EventItem;