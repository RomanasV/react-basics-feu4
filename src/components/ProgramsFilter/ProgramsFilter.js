import './ProgramsFilter.css';

export default function ProgramsFilter() {
  return (
    <div className="programs-filter">
      <form className="programs-filter-form">
        <span className="programs-found">Rastos 31 programos</span>

        <div className="form-control">
          <label htmlFor="course-select">Tema</label>
          <select id="course-select">
            <option>Visos</option>
            <option>Testavimas</option>
            <option>Programavimas</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="location-select">Vieta</label>
          <select id="location-select">
            <option>Visos</option>
            <option>Online</option>
            <option>Vilnius</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="type-select">Tipas</label>
          <select id="type-select">
            <option>1 + 2 lygis</option>
            <option>Dar vienas tipas</option>
            <option>Paskutinis tipas</option>
          </select>
        </div>

        <fieldset id="time-select">
          <legend>Laikas</legend>

          <div className="form-control checkbox">
            <input type="checkbox" id="time-variation-1" />
            <label htmlFor="time-variation-1">Dienomis</label>
          </div>

          <div className="form-control checkbox">
            <input type="checkbox" id="time-variation-2" />
            <label htmlFor="time-variation-2">Vakarais</label>
          </div>
        </fieldset>

        <button type="reset">Išvalyti</button>
      </form>
    </div>
  )
}