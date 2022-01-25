import './main.scss';
import Todo from './components/Todo';
import logo from './assets/hiq-logo.jpg';

function App() {
  return (
    <div className="App-todo">
      <div className="logo-wrapper">
        <h1><img src={logo} alt="HiQ logo"/>ToDo</h1>
      </div>
      <Todo/>
    </div>
  );
}

export default App;
