import './ProgramsPage.css';
import ProgramsFilter from '../ProgramsFilter/ProgramsFilter';
import ProgramsList from '../ProgramsList/ProgramsList';
import BannerTitle from '../BannerTitle/BannerTitle';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <div className="container">
        <main className="page-content">
          <BannerTitle />
          <div className="programs-wrapper">
            <ProgramsFilter />
            <ProgramsList />
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}