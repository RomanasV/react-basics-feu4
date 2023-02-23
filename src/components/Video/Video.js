import LargeButton from "../Partials/LargeButton";
import SectionTitle from "../Partials/SectionTitle";

export default function Video() {
  return (
    <section className="video">
      <SectionTitle text="Vaizdo įrašai" />

      <div className="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <h3 className="sub-title">Jei galiu aš - gali ir tu!</h3>

      <LargeButton text="Visi vaizdo įrašai" />
    </section>
  )
}