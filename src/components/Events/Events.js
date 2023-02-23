import ArrowIcon from '../ArrowIcon';
import LargeButton from '../Partials/LargeButton';

export default function Events() {
  return (
    <div className="events">
      <h2 className="section-title">Renginiai</h2>

      <div className="events-wrapper">
        <div className="event">
          <a href="#">
            <div className="image-wrapper">
              <img src="https://codeacademy.lt/wp-content/uploads/2022/10/MicrosoftTeams-image-20-300x300.png" />
            </div>
            <div className="event-info">
              <div className="date">
                <div className="day">10</div>
                <div className="month">lap</div>
              </div>

              <span className="event-location">Online</span>
              <h3 className="event-title">CodeAcademy Talents</h3>
            </div>
          </a>
        </div>

        <div className="event">
          <a href="#">
            <div className="event-info">
              <div className="date">
                <div className="day">10</div>
                <div className="month">lap</div>
              </div>

              <span className="event-location">Online</span>
              <h3 className="event-title">CodeAcademy Talents</h3>
            </div>
          </a>
        </div>

        <div className="event">
          <a href="#">
            <div className="event-info">
              <div className="date">
                <div className="day">10</div>
                <div className="month">lap</div>
              </div>

              <span className="event-location">Online</span>
              <h3 className="event-title">CodeAcademy Talents</h3>
            </div>
          </a>
        </div>
      </div>

      <LargeButton text="Daugiau" url="https://www.google.com" />
    </div>
  )
}