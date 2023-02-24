import ArrowIcon from '../ArrowIcon';
import LargeButton from '../Partials/LargeButton';

export default function Events() {
  const eventsData = [
    {
      image: 'https://codeacademy.lt/wp-content/uploads/2022/10/MicrosoftTeams-image-20-300x300.png',
      day: 10,
      month: 'lap',
      location: 'Online',
      title: 'CodeAcademy Talents',
      url: './#'
    },
    {
      day: 5,
      month: 'lap',
      location: '2 Online',
      title: '2 CodeAcademy Talents',
      url: './#'
    },
    {
      day: null,
      month: 'spa',
      location: '',
      title: '3 CodeAcademy Talents',
      url: './#'
    },
  ];

  return (
    <div className="events">
      <h2 className="section-title">Renginiai</h2>

      <div className="events-wrapper">
        {eventsData.map((event, index) => (
          <div key={index} className="event">
            <a href={event.url}>
              <div className="image-wrapper">
                {event.image && <img src={event.image} alt={event.title} />}
              </div>
              <div className="event-info">
                <div className="date">
                  {event.day && <div className="day">{event.day}</div>}
                  <div className="month">{event.month}</div>
                </div>

                {event.location && <span className="event-location">{event.location}</span>}
                <h3 className="event-title">{event.title}</h3>
              </div>
            </a>
          </div>
        ))}

      </div>

      <LargeButton text="Daugiau" url="https://www.google.com" />
    </div>
  )
}