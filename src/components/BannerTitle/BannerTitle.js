import './BannerTitle.css';

function BannerTitle() {  
  return (
    <div className="page-title-wrapper">
      <h1 className="page-title">Programos</h1>

      <a href="#" className="bg-image">
        <span className="pink-color">Nežinai ką pasirinkti?</span>
        <span className="black-color">Spręsk IT testą</span>
      </a>
    </div>
  )
}

export default BannerTitle;