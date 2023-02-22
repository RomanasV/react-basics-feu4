import hatIcon from '../../../icons/hat.svg';
import moonIcon from '../../../icons/moon.svg';

function ProgramItem() {
  return (
    <div className="program-item">
      <a href="#">
        <div className="program-main-info">
          <img className="program-image" src="https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg" alt='course icon' />
          <h2 className="program-title">„Salesforce“ CRM – pradedančių</h2>
          <p className="program-description">„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis.</p>
        </div>

        <div className="program-features-wrapper">
          <ul className="program-features-list">
            <li className="program-feature-item">
              <span className="program-feature-item-icon">
                <img src={hatIcon} alt="hat" />
              </span>

              <span className="program-feature-item-content">Finansuojama UŽT - dirbantiems</span>
            </li>

            <li className="program-feature-item">
              <span className="program-feature-item-icon">
                <img src={moonIcon} alt="moon" />
              </span>

              <span className="program-feature-item-content">Vakarais</span>
            </li>                
          </ul>
        </div>

        <span className="program-extra-info">Naujas</span>
      </a>
    </div>
  )
}

export default ProgramItem;