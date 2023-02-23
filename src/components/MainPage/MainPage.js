import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MainPage.css';

function MainPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <section className="hero-box">
          <div className="container">
            <div className="hero-box-content">
              <div className="hero-box-title-wrapper">
                <h1 className="page-title">Programuok savo ateitį!®</h1>
                <p className="page-description">CodeAcademy programavimo kursai – tiesiausias kelias technologinės karjeros link</p>
              </div>
        
              <div className="service-list">
                <div className="service-item">
                  <h2 className="service-title">Studentams</h2>
                  <p>Ar žengi pirmą ar kažkelintą žingsnį link tech išsilavinimo – mes tau padėsim!</p>
                  <p>Tiesiausias kelias link karjeros – per mus. 🏁 CodeAcademy programavimo kursai</p>
                  <a className="button" href="#">Sužinok daugiau</a>
                </div>
                <div className="service-item">
                  <h2 className="service-title">Verslui</h2>
                  <p>Esame geriausias kompanijų draugas Edutech erdvėje.</p>
                  <p>Kelsime Jūsų darbuotojų kompetenciją bei atrasime talentus. 📈CodeAcademy programavimo kursai</p>
                  <a className="button" href="#">Sužinok daugiau</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="facts">
          <div className="container">
            <h2 className="facts-header">CodeAcademy pulsas</h2>
            <div className="facts-wrapper">
              <div className="facts-description">
                <p>Manome, jog technologinis išsilavinimas privalo sekti šiandienos ir rytojaus darbo rinkos tendencijas bei būti prieinamas kiekvienam. 🙌</p>
                <p>Šiuo principu vadovaudamiesi, kas dieną savo studentams atveriame naujas galimybes. 🔝</p>
              </div>
              <div className="facts-list-wrapper">
                <ul className="facts-list">
                  <li className="facts-item">
                    <div className="fact-value">1298</div> 
                    <div className="fact-description">Šiuo metu mokosi studentų</div>
                  </li>
                  <li className="facts-item">
                    <div className="fact-value">4762</div>
                    <div className="fact-description">Viso baigė studentų</div>
                  </li>
                  <li className="facts-item">
                    <div className="fact-value">80%</div>
                    <div className="fact-description">Baigę Pažengusių studijas įsidarbino</div>
                  </li>
                  <li className="facts-item">
                    <div className="fact-value small">Front-End</div> 
                    <div className="fact-description">Populiariausia programa</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default MainPage;