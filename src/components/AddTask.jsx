import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import { FaPlus } from 'react-icons/fa';

const AddTask = () => {
  const { user } = use(AuthContext);

  const handleAddTask = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());

    fetch('https://tenth-assignment-repo.vercel.app/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: "Task added successfully!",
            icon: "success",
            confirmButtonColor: '#2563eb' // blue-600
          });
          form.reset();
        }
      });
  };

  return (
    <div className="px-4 py-10 md:px-24 bg-gray-100 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800 inline-flex items-center gap-2">
          <FaPlus className="text-yellow-500" /> Add New Task
        </h1>
        <p className="text-gray-500 mt-2">Fill out the form below to post your task</p>
      </div>

      <form onSubmit={handleAddTask} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-blue-800 font-semibold">Task Title</label>
            <input type="text" name="title" required className="input input-bordered w-full" placeholder="Task Title" />
          </div>

          <div>
            <label className="block mb-2 text-blue-800 font-semibold">Category</label>
            <input
              list="categories"
              name="category"
              required
              className="input input-bordered w-full"
              placeholder="Select or type a category"
            />
            <datalist id="categories">
              <option value="Web Development" />
              <option value="Design" />
              <option value="Writing" />
              <option value="Marketing" />
              <option value="Other" />
            </datalist>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-blue-800 font-semibold">Description</label>
            <textarea
              name="description"
              required
              className="textarea textarea-bordered w-full"
              placeholder="Task Description"
              rows={3}
            />
          </div>

          <div>
            <label className="block mb-2 text-blue-800 font-semibold">Deadline</label>
            <input type="date" name="deadline" required className="input input-bordered w-full" />
          </div>

          <div>
            <label className="block mb-2 text-blue-800 font-semibold">Budget</label>
            <input type="number" name="budget" required className="input input-bordered w-full" placeholder="৳ Budget" />
          </div>

          <div>
            <label className="block mb-2 text-blue-800 font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              readOnly
              className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              defaultValue={user?.displayName}
            />
          </div>

          <div>
            <label className="block mb-2 text-blue-800 font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              readOnly
              className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              defaultValue={user?.email}
            />
          </div>
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="Add Task"
            className="btn bg-white border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white w-full md:w-1/3"
            data-tooltip-id="add-task-tooltip"
            data-tooltip-content="Click to Add Task"
          />
        </div>
        <Tooltip
          id="add-task-tooltip"
          place="top"
          style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: '6px 12px',
            borderRadius: '6px'
          }}
        />
      </form>
    </div>
  );
};

export default AddTask;
