import logo from './logo.svg';

function ReactHeader() {
  const pageTitle = 'Labas';
  const paragraph = 'Hello world';
  
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{pageTitle}</h1>
      <p>{paragraph}</p>
      <a 
        className="App-link" 
        href="https://reactjs.org" 
        target="_blank" 
        rel="noopener noreferrer">
          Learn React
      </a>
    </header>
  )
}

export default ReactHeader;