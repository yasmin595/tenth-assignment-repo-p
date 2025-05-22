import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PostedCard from './PostedCard';

const PostedTask = () => {
    const emailTask =useLoaderData();
    const [table, setTable] = useState(emailTask)
    console.log(emailTask);
    return (
      <div className='w-11/12 mx-auto my-8'>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
           {
emailTask.map(task => <PostedCard key={task._id} task={task}  table={table}  setTable={setTable}></PostedCard>)

           }
        </div>
        </div>
    );
};

export default PostedTask;