import ArrowIcon from '../ArrowIcon';
import LargeButton from '../Partials/LargeButton';
import SectionTitle from '../Partials/SectionTitle';
import EventItem from './EventItem';

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
      month: '',
      location: '',
      title: '3 CodeAcademy Talents',
      url: './#'
    },
  ];

  const eventElements = eventsData.map((event, index) => <EventItem event={event} key={index} /> );

  return (
    <div className="events">
      <SectionTitle text="Renginiai" />

      <div className="events-wrapper">
        {/* {eventsData.map((event, index) => <EventItem event={event} key={index} /> )} */}
        {eventElements}
      </div>

      <LargeButton text="Daugiau" url="https://www.google.com" />
    </div>
  )
}