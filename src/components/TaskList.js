import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-info">
            <div className="card-header bg-info text-white">
              <h3 className="mb-0">Task List</h3>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {tasks.map(task => (
                  <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center bg-light mb-2">
                    <div>
                      <h5 className="text-info">{task.title}</h5>
                      <p>{task.description}</p>
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTask(task._id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
