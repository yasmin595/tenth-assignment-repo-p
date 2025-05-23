import React from 'react';

const TaskCard = ({task}) => {
const {title, category, description, deadline, budget ,  } = task

//  {
//     "_id": "682dfa2347da1f9bdd28f345",
//     "title": "design",
//     "category": "Design",
//     "description": "design from heart",
//     "deadline": "31may 2025",
//     "budget": "200000",
//     "name": "rifat",
//     "email": "mdrifatnicevedio202@gmail.com"
//   },

    return (
       <div className="card  bg-base-300 w-11/12">
     
  <div className="card-body">
    <h2 className="card-title font-bold text-2xl text-secondary flex flex-col justify-center text-center"> Task-Title: {title}</h2>
    <div className='flex flex-col justify-center text-center'>
      <p className='font-semibold'> Category: {category}</p>
    <p className='font-semibold'> Budget: {budget}</p>
    <p className='font-semibold'> Deadline: {deadline}</p>
    <p>description : {description} </p>
    </div>
   
  </div>
</div>
    );
};

export default TaskCard;