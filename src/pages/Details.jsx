import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DetailsCard from '../components/DetailsCard';

const Details = () => {
      const tasks = useLoaderData();
       const { _id } = useParams();
       const [cards, setCards] = useState({});
 useEffect(() => {
    const cardDetails = tasks.find(task => task._id == _id);
    setCards(cardDetails);
  }, [tasks, _id]);
    console.log(tasks)
    return (
 <div className='w-11/12 mx-auto my-8'>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <DetailsCard cards={cards}> </DetailsCard>
        </div>
 </div>
    );
};

export default Details;