import podcastImage from '../../images/podcast-image.jpg';
import SectionTitle from '../Partials/SectionTitle';
import PodcastItem from '../PodcastItem/PodcastItem';

function PodcastsList() {
  const podcastsData = [
    {
      time: '8:32',
      title: 'Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“',
      date: '2021-08-11',
      image: podcastImage
    },
    {
      time: '12:45',
      title: '2 Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“',
      date: '2022-09-18',
      image: podcastImage
    },
    {
      time: '15:33',
      title: 'Dar vienas pavadinimas',
      date: '2022-09-18',
      image: podcastImage
    },
    {
      time: '',
      title: '',
      date: '',
      image: null
    },
  ];

  // const podcasts = podcastsData.map(podcast => {
  //   return (
  //     <PodcastItem 
  //       time={podcast.time} 
  //       title={podcast.title} 
  //       date={podcast.date} 
  //       image={podcast.image} 
  //     />
  //   );
  // })

  const podcasts = podcastsData.map((podcast, index) => (
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
      <SectionTitle text="Podcastai ir radijo laidos"></SectionTitle>

      <div className="podcasts-wrapper">
        {podcasts}
      </div>
    </div>
  )
}

export default PodcastsList;