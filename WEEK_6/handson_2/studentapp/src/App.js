import logo from './logo.svg';
import './App.css';
import {Home} from './Home.jsx'
import {About} from './About.jsx'
import {Contact} from './Contact.jsx'
function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
