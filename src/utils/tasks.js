
export function AddTask(tasks, setTasks, text, setText) {
  const newTask = {
    id: Date.now(),
    text,
    completed: false
  };
  const updatedTasks = [...tasks, newTask];
  setTasks(updatedTasks);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  setText('');
}

export function DeleteTask(tasks, setTasks, id) {
  const updatedTasks = tasks.filter(task => task.id !== id);
  setTasks(updatedTasks);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}