import React from 'react';
import { Link } from 'react-router-dom';

const Showquizzs = ({quizess}) => {
     const {id , name, logo , total} = quizess;
     return (
          <div>
            <div className="card w-50 gap-x-8 gap-y-10 shadow-xl mt-8 md:mr-5">
          <figure><img className='h-16 mt-5' src={logo} alt="" /></figure>
          <div className="card-body">
          <h2 className="card-title">
              Quiz
               <div className="badge bg-gradient-to-br from-purple-500 to-rose-400">{total}</div>
          </h2>                 
          </div>
          <div className='flex justify-between'>  
          <p className='ml-4'>{name}</p> 
          <button  className='btn w-15 h-15 outline-none bg-blue-500 hover:bg-indigo-400'>
               <Link to={`/topic/${id}`}>Start Practice</Link></button>
          </div>
          </div>
          </div>
     );
};

export default Showquizzs;