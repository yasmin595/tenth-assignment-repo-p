import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const PostedCard = ({task, emailTask, setEmailTask}) => {
    const {title, _id,  category,  deadline, budget  } = task;
  const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                // start deleting the coffee
                fetch(`http://localhost:3000/task/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Task has been deleted.",
                                icon: "success"
                            });

                            // remove the task from the state
                            const remainingTasks = emailTask.filter(ta => ta._id !== _id);
                            setEmailTask(remainingTasks);
                        }
                    })


            }
        });

    }

    return (
        <div className='w-11/12 mx-auto'>

            
             <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Deadline</th>
                <th>Budget</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            
                <tr key={_id}>
                  <td>{title}</td>
                  <td>{category}</td>
                  <td>{deadline}</td>
                  <td>{budget}</td>
                    <td className="space-x-2 grid grid-cols-1 ">
          <Link to={`/updated-task/${_id}`}><button className="btn btn-xs btn-primary my-1">Update</button></Link>
          <button onClick={()=> handleDelete(_id)} className="btn btn-xs text-white bg-red-700 my-1">Delete</button>
          <button className="btn btn-xs btn-primary">Bids</button>
        </td>
                </tr>
              
            </tbody>
          </table>
        </div>

        </div>
    );
};

export default PostedCard;