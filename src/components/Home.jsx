import React from 'react';
import { useLoaderData } from 'react-router';
import TaskCard from './TaskCard';
import Instra from './Instra';
import Question from './Question';
import Slider from './Slider';
import PopularTasks from '../pages/PopularTask';

const Home = () => {

    const tasks = useLoaderData();
    console.log(tasks)
    return (
 <div className='w-11/12 p-4 mx-auto my-8 bg-gray-100 dark:bg-gray-800'>
   <div><Slider></Slider></div>
      <h1 className='font-bold  bg-white text-2xl text-blue-800 md:flex my-4 '>Tasks </h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
           {
tasks.map(task => <TaskCard key={task._id} task={task}></TaskCard>)

           }
        </div>
 <div><PopularTasks></PopularTasks></div>

        <div> <Instra></Instra></div>
        <div>
         <Question></Question>
        </div>
 </div>
    );
};

export default Home;