import podcastImage from '../../images/podcast-image.jpg';
import SectionTitle from '../Partials/SectionTitle';
import PodcastItem from '../PodcastItem/PodcastItem';

function PodcastsList() {
  return (
    <div className="podcasts">
      <SectionTitle text="Podcastai ir radijo laidos"></SectionTitle>

      <div className="podcasts-wrapper">
        <PodcastItem 
          time="8:32" 
          title="Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“"
          date="2021-08-11"
          image={podcastImage}
        />

        <PodcastItem 
          time="12:45" 
          title="Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“" 
          date="2022-09-18"
          image={podcastImage}
        />
        
        <PodcastItem
          time="15:33" 
          title="Dar vienas pavadinimas"
          date="2023-01-14"
          image={podcastImage}
        />
        <PodcastItem />
      </div>
    </div>
  )
}

export default PodcastsList;