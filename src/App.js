import './App.css';
import TodoList from './TodoList';


function App() {
  return (
    <div className="container">
      <div className='header'>
        <h1>TO DO List</h1>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
