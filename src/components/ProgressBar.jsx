const ProgressBar = ({ todos }) => {
    const totalTasks = todos.length;
    const completedTasks = todos.filter(todo => todo.completed).length;
    const progressPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
  
    return (
      <div className="progress-container">
        <div className="progress-info">
          <span>Progress: {completedTasks}/{totalTasks} tasks completed</span>
          <span>{progressPercentage}%</span>
        </div>
        <div className="progress-bar-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;