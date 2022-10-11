import React from 'react';



const ShowQoption = ({quiz}) => {
    
     const {correctAnswer, id, options , question} = quiz;
     const handleCorrect = ({option}) =>{
          console.log(option)
     }   
     
     return (
          <div className='bg-blue-900 rounded-md w-9/12 mx-auto mb-4 p-4 text-white'>
               <p>Question: {question}</p>
               <div className='grid grid-cols-2 mx-auto'>         
               {
                    options.map(opiton => 
                         <div className='border border-white m-2 rounded-md text-left p-2 '>                       
                              <button  onClick={()=>handleCorrect(opiton)}><input className='mr-4' type="radio" name={id} value={opiton} id={opiton}/>
                                  <label htmlFor={opiton} >{opiton}</label></button>        
                         </div>
                         )
               }             
               </div>
          </div>
     );
};

export default ShowQoption;