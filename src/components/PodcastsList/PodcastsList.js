import SectionTitle from '../Partials/SectionTitle';
import PodcastItem from '../PodcastItem/PodcastItem';

function PodcastsList({ podcasts, sectionTitle }) {

  if (podcasts.length === 0) {
    return;
  }
  
  // const podcastsElements = podcasts.map(podcast => {
  //   return (
  //     <PodcastItem 
  //       time={podcast.time} 
  //       title={podcast.title} 
  //       date={podcast.date} 
  //       image={podcast.image} 
  //     />
  //   );
  // })

  const podcastsElements = podcasts.map((podcast, index) => (
    <PodcastItem 
      time={podcast.time} 
      title={podcast.title} 
      date={podcast.date} 
      image={podcast.image} 
      key={index}
    />
  ))

  return (
    <div className="podcasts">
      <SectionTitle text={sectionTitle}></SectionTitle>

      <div className="podcasts-wrapper">
        {podcastsElements}
      </div>
    </div>
  )
}

export default PodcastsList;