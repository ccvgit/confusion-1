import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import {Navbar,NavbarBrand} from 'reactstrap';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
