import React from 'react';
import { useLoaderData } from 'react-router';
import TaskCard from './TaskCard';
import Instra from './Instra';

const Home = () => {

    const tasks = useLoaderData();
    console.log(tasks)
    return (
 <div className='w-11/12 mx-auto my-8'>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
           {
tasks.map(task => <TaskCard key={task._id} task={task}></TaskCard>)

           }
        </div>
        <div> <Instra></Instra></div>
 </div>
    );
};

export default Home;