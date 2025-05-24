import React, { useState } from 'react';

const DetailsCard = ({cards}) => {
 const {title, _id, name, email,  category, description, deadline, budget ,  } = cards;
 
  const [bidsCount, setBidsCount] = useState(0);

  const handleBidsClick = () => {
    setBidsCount(prev => prev + 1); 
  };


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
       <div className="card  bg-base-300 w-[250px]">
  <div className="card-body">
    <h1 className=" text-secondary text-2xl font-bold"> Task-Title: {title}</h1>
         <h2 className="flex text-primary justify-end  text-xl font-bold mb-4">
        You bid for {bidsCount} opportunities.
           </h2>
    <p className='font-semibold'> Category: {category}</p>
    <p className='font-semibold'> Budget: {budget}</p>
    <p className='font-semibold'> Deadline: {deadline}</p>
    <p className='font-semibold'> Name: {name}</p>
    <p className='font-semibold'> Email: {email}</p>
    <p>description : {description} </p>
   <div>
    <button onClick={handleBidsClick} className='btn btn-primary'>Bid</button>
   </div>
  </div>
</div>
    );
};

export default DetailsCard;