// import logo from './logo.svg';
import { Container } from 'react-bootstrap';
import './App.css';
import Nav from './components/Nav';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <Container>
      <Nav />
       <div className="row">
        <div className="col-md">
          <Task />
        </div>
      </div> 
      </Container>
      
      <h1>Testing Rakamin</h1>
    </div>
  );
}

export default App;
