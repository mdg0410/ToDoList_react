import { useState } from 'react';
import TodosList from './todoList';
import InputTodo from './InputTodo';
import saveStorage from './localStorage';

const TodosLogic = () => {
  const storage = () => {
    if (localStorage.getItem('tasksReact')) {
      return JSON.parse(localStorage.getItem('tasksReact'));
    }
    return [{
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    }];
  };

  const data = storage();

  const [todos, setTodos] = useState(data);

  saveStorage(todos);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
    saveStorage(todos);
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
    saveStorage(todos);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    saveStorage(todos);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
    saveStorage(todos);
  };

  return (
    <div className="todos">
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        todosProps={todos}
        setTodos={setTodos}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default TodosLogic;
