import './todoList.css';
import React, { useState, useEffect } from 'react';
import List from '../list/list';
import Switch from 'react-switch';
import { AddTask, DeleteTask } from '../../utils/tasks';
import { ToggleCompleted, ToggleDarkMode } from '../../utils/toggles';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');
    const [isToggled, setIsToggled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTodos = localStorage.getItem('tasks');
        if (storedTodos) {
            setTasks(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        if (tasks.length) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    return (
        <div className="todoList">
            <h1>Todo List</h1>

            <div className="switcherUncompletedTasks">
                <Switch
                    onChange={() => setIsToggled(!isToggled)}
                    checked={isToggled}
                    checkedIcon={false}
                    uncheckedIcon={true}
                />
                <span>Show all uncompleted tasks</span>
            </div>

            <div className="switcherDarkMode">
                <Switch
                    onChange={() => ToggleDarkMode(isDarkMode, setIsDarkMode)}
                    checked={!isDarkMode}
                    checkedIcon={false}
                    uncheckedIcon={true}
                />
                <span>Dark mode</span>
            </div>

            <List
                isToggled={isToggled}
                tasks={tasks}
                deleteTask={(id) => DeleteTask(tasks, setTasks, id)}
                toggleCompleted={(id) => ToggleCompleted(id, tasks, setTasks)}
            />
            <input
                id="myInput"
                className="userInput"
                placeholder="Enter a new task"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        AddTask(tasks, setTasks, text, setText);
                    }
                }}
            />
            <button
                onClick={() => AddTask(tasks, setTasks, text, setText)}
                className="addTaskButton"
                disabled={!text}
            >
                Add Task
            </button>
        </div>
    );
}

export default TodoList;
