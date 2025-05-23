import React from 'react';
import { useLoaderData } from 'react-router';
import BrowseCard from './BrowseCard';

const BrowseTask = () => {
        const tasks = useLoaderData();
    console.log(tasks)
    return (
 <div className='w-11/12 mx-auto my-8  bg-gray-100 dark:bg-gray-800 p-4'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
           {
tasks.map(task => <BrowseCard key={task._id} task={task}></BrowseCard>)

           }
        </div>
 </div>
    );
};

export default BrowseTask;