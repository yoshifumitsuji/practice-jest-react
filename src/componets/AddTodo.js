import { useState } from 'react';

const AddTodo = ({ setTodos }) => {
  const [task, setTask] = useState('');

  const handleNewTask = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task === '') return;
    setTodos((todos) => [...todos, { task, isCompleted: false }]);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add Task :
        <input value={task} placeholder='Add New Task' onChange={handleNewTask} />
      </label>
      <button type='submit'>追加</button>
    </form>
  );
};

export default AddTodo;
