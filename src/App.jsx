import './App.css';
// I'll import here the bootstrap css file, but really you can import it in any component
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/Home'
import Home from './components/About';
import Home from './components/Browse';

// in this case App is the parent component, and MyNavbar is a child
// you can pass props from a parent to a child

function App() {
  return (
    <div className="App">
      <MyNavbar payoff="We can serve only pasta!" />
      <Home />
    </div>
  );
}

export default App;