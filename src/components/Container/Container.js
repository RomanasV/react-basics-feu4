import './Container.css'; 

function Container({ className, children }) {
  // let classes = 'container ' + className;
  let classes = `container ${className ? className : ''}`;

  return (
    <div className={classes}>{children}</div>
  )
}

export default Container;