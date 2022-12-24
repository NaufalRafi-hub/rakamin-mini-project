// import logo from './logo.svg';
import { Container } from 'react-bootstrap';
import './App.css';
import Nav from './components/Nav';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='container-cust'>
        <div className="row">
          <div className="col-md">
            <Task />
          </div>
        </div> 
      </div>
    </div>
  );
}

export default App;
