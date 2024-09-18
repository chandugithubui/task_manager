import React, { useState } from 'react';
import axios from 'axios';

function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/tasks', { title, description });
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-success mb-3">
            <div className="card-header bg-warning text-dark">
              <h3 className="mb-0">Add Task</h3>
            </div>
            <div className="card-body bg-light">
              <form onSubmit={handleSubmit} className="p-4">
                <div className="form-group">
                  <label htmlFor="title" className="text-success">Title</label>
                  <input
                    type="text"
                    id="title"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task title"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description" className="text-success">Description</label>
                  <textarea
                    id="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter task description"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Add Task</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
