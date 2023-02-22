import ProgramItem from './ProgramItem/ProgramItem';
import './ProgramsList.css';

function ProgramsList() {
  return (
    <div className="programs-list">
      <ProgramItem />
      <ProgramItem />
      <ProgramItem />
      <ProgramItem />
    </div>
  )
}

export default ProgramsList;