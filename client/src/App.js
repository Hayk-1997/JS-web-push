import './App.css';
import { subscribeUser } from './subscription';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => subscribeUser()}>Click Here</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;