import LargeButton from '../Partials/LargeButton';
import SectionTitle from '../Partials/SectionTitle';
import EventItem from './EventItem';

export default function Events({ events, sectionTitle, moreButton }) {
  // let events = props.events;
  // let sectionTitle = props.sectionTitle;

  // let { events, sectionTitle } = props;

  if (events.length === 0) {
    return;
  }

  const eventElements = events.map((event, index) => <EventItem event={event} key={index} /> );

  return (
    <div className="events">
      <SectionTitle text={sectionTitle} />

      <div className="events-wrapper">
        {/* {eventsData.map((event, index) => <EventItem event={event} key={index} /> )} */}
        {eventElements}
      </div>

      <LargeButton text={moreButton.text} url={moreButton.url} />
    </div>
  )
}