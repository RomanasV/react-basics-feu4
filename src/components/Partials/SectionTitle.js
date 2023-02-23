function SectionTitle(props) {
  // PIRMAS BŪDAS

  // let titleElement;
  
  // if (props.text) {
  //   titleElement = <h2 className="section-title">{props.text}</h2>;
  // }

  // return titleElement;

  // ANTRAS BŪDAS
  // const titleElement = props.text && <h2 className="section-title">{props.text}</h2>;

  // return titleElement;

  // TREČIAS BŪDAS
  return (
    props.text && <h2 className="section-title">{props.text}</h2>
  )
}

export default SectionTitle;