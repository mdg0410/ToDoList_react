import Header from './components/Header';
import TodosLogic from './components/todoLogic';
import './styles/App.css';

function App() {
  return (
    <div className='containerTodos'>
    <Header />
    <TodosLogic />
    </div>
  );
}

export default App;
