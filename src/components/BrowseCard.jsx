import React from 'react';
import { Link } from 'react-router';

const BrowseCard = ({task}) => {
const {title, category, description, deadline, budget , _id } = task

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
       <div className="card  bg-base-300 ">
  <div className="card-body w-[250px]">
    <h2 className="card-title text-secondary font-bold text-2xl"> Task-Title: {title}</h2>
    <p className='font-semibold'> Category: {category}</p>
    <p className='font-semibold'> Budget: {budget}</p>
    <p className='font-semibold'> Deadline: {deadline}</p>
    <p>description : {description} </p>
   <div>
    <Link to ={`/details/${_id}`}>
    <button className='btn btn-primary'>View details</button>
    </Link>
   </div>
  </div>
</div>
    );
};

export default BrowseCard;