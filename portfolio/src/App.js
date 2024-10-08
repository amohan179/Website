import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}
function NavBar() {
  return (
    <div>
      <button>
        Home
      </button>
      <button>
        Portfolio
      </button>
      <button>
        Autobiography
      </button>
      <button>
        Transcript + Resume
      </button>
    </div>
  )
}
export default App;
