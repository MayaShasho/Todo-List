import '../components/toggles/toggles.css';

export function ToggleCompleted(id, tasks, setTasks) {
    setTasks(tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        } else { return task; }
    }));
}

export const ToggleDarkMode = (isDarkMode, setIsDarkMode) => {
    document.body.className = isDarkMode ? "darkMode" : "lightMode";
    setIsDarkMode(!isDarkMode);
};