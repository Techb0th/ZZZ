import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1 style={heading}>Hello</h1>
      <p>logo</p>
      <Profile />
    </>
  );
}

export default App;

// simple function components
export function Profile(){

  return(
    <img 
      style={image}
      src='https://eduport.webestica.com/assets/images/courses/4by3/07.jpg' />
  );
}

// object style
const image = {
  width: 200,
  display: 'block',
  margin: 'auto',
}
const heading = {
  textAlign: 'center'
}


