import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand } from 'reactstrap'
import Greet from './components/greet'
import Welcome from './components/welcome';
import Hello from './components/heloJs';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Restorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
