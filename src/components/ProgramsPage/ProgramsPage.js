import './ProgramsPage.css';
import ProgramsFilter from '../ProgramsFilter/ProgramsFilter';
import ProgramsList from '../ProgramsList/ProgramsList';
import BannerTitle from '../BannerTitle/BannerTitle';

export default function ProgramsPage() {
  return (
    <div className="container">
      <main className="page-content">
        <BannerTitle />
        <div className="programs-wrapper">
          <ProgramsFilter />
          <ProgramsList />
        </div>
      </main>
    </div>
  )
}