import React from 'react';

const DetailsCard = ({cards}) => {
 const {title, _id, name, email,  category, description, deadline, budget ,  } = cards;

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
       <div className="card card-border bg-base-100 w-96">
  <div className="card-body">
    <h2 className="card-title"> Task-Title: {title}</h2>
    <p className='font-semibold'> Category: {category}</p>
    <p className='font-semibold'> Budget: {budget}</p>
    <p className='font-semibold'> Deadline: {deadline}</p>
    <p>description : {description} </p>
   <div>
    <button className='btn btn-primary'>Delete</button>
   </div>
  </div>
</div>
    );
};

export default DetailsCard;