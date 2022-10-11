import React from 'react';

const Showquizzs = ({quizess}) => {
     const {id , name, logo , total} = quizess;
     return (
          <div>
               {name}
          </div>
     );
};

export default Showquizzs;