import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PostedCard from './PostedCard';

const PostedTask = () => {
    const emailTaskPersonal = useLoaderData();
    const [emailTask, setEmailTask] = useState(emailTaskPersonal);
    console.log(emailTaskPersonal);
    return (
      <div className='w-11/12 mx-auto my-8  bg-gray-100 dark:bg-gray-800 p-4 '>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
           {
emailTask.map(task => <PostedCard key={task._id} task={task}  emailTask={emailTask}  setEmailTask={setEmailTask}></PostedCard>)

           }
        </div>
        </div>
    );
};

export default PostedTask;