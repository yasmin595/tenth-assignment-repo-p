import React, { use }  from 'react';

import { useLoaderData } from 'react-router';

import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';

const UpdateTask = () => {
       const { user } = use(AuthContext);
 const {title, _id,  category,  deadline, budget, description } = useLoaderData();

     const handleUpdateTask = e =>{
        e.preventDefault();

           const form = e.target;
        const formData = new FormData(form);
        const updatedTask = Object.fromEntries(formData.entries())
        console.log(updatedTask);

        // send updated coffee to the db
        fetch(`https://assigment-copy-gj1o.onrender.com/${_id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(updatedTask)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Task updated successfully.",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

     }
    return (
       <div className='p-24  bg-gray-100 dark:bg-gray-800 '>
            <div className='p-12 text-center space-y-4'>
                <h1 className=" text-2xl font-bold text-secondary bg-white md:p-4">Update Task</h1>
                
            </div>
            <form onSubmit={handleUpdateTask}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                        <label className="label">Task Title</label>
                        <input type="text" name='title' defaultValue={title} className="input w-full" placeholder="Task Title" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4 dropdown ">
                        <label className="label">Category</label>
                         
                        {/* <input type="text" name='category' className="input w-full" placeholder="Category Name" /> */}
                <input
           list="categories"
             name="category"
          defaultValue={category}
              className="input input-bordered w-full"
          placeholder="Select or type a category"
                required
              />

             <datalist id="categories">
              <option value="Web Development" />
                <option value="Design" />
              <option value="Writing" />
           <option value="Marketing" />
                  <option value="Other" />
              </datalist>
                    </fieldset>
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                        <label className="label">Description</label>
                        <input type="text" name='description' defaultValue={description} className="input w-full" placeholder="Description" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                        <label className="label">Deadline</label>
                        <input type="date" defaultValue={deadline} name='deadline' className="input w-full" placeholder="Deadline" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                        <label className="label">Budget</label>
                        <input type="text" name='budget' defaultValue={budget} className="input w-full" placeholder="Budget" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                        <label className="label ">Name</label>
                        <input type="text" name='name' readOnly className="input w-full  cursor-not-allowed"  defaultValue={`${user?.displayName}`} placeholder={`${user?.displayName}`}/>
                    </fieldset>
               
               
                </div>
                     <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border my-6 p-4">
                    <label className="label">User Email</label>
                    <input type="email" name='email' defaultValue={`${user?.email}`}  readOnly className="input w-full cursor-not-allowed" placeholder={`${user?.email}`}  />
                </fieldset>

                <input type="submit" data-tooltip-id="updated-task-tooltip"
          data-tooltip-content="Click to Updated Task"   className='btn btn-secondary  w-full' value="Updated task" />
                          <Tooltip
        id="updated-task-tooltip"
        place="top"
        
        style={{ backgroundColor: '#333', color: '#fff', padding: '5px 10px', borderRadius: '4px' }}
      />
            </form>
        </div>
    );
};

export default UpdateTask;