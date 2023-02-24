import './ProgramsPage.css';
import ProgramsFilter from '../../components/ProgramsFilter/ProgramsFilter';
import ProgramsList from '../../components/ProgramsList/ProgramsList';
import BannerTitle from '../../components/BannerTitle/BannerTitle';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

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