import React from 'react';

const PostedCard = ({task}) => {
    const {title, _id,  category,  deadline, budget  } = task;
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
              </tr>
            </thead>
            <tbody>
            
                <tr key={_id}>
                  <td>{title}</td>
                  <td>{category}</td>
                  <td>{deadline}</td>
                  <td>${budget}</td>
                </tr>
              
            </tbody>
          </table>
        </div>

        <button className='btn btn-primary px-3 mx-3'>Delete </button>
        <button className='btn btn-primary'>Update </button>
        </div>
    );
};

export default PostedCard;