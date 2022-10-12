import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const ShowQoption = ({quiz}) => {    
     const {correctAnswer, id, options , question} = quiz;
    
    
     const success = () => toast.success('your Answer is correct!',{
          position: 'top-center',
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'colored'
     });

     const error = () => toast.error('your Answer is incorrect!',{
          position: 'top-center',
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'colored'
     });
    

     const handleCorrect = (option) =>{
          if(option === correctAnswer){
               success()
              
          }else{
               error()
               
          }
     }   
    
     
     return (
          <div className='bg-blue-900 rounded-md w-9/12 mx-auto mb-4 p-4 text-white mt-10'>
               <p>Question: {question}</p>
               <div className='grid grid-cols-2 mx-auto'>         
               {
                    options.map(opiton => 
                         <div className='border border-white m-2 rounded-md text-left p-2 '>                       
                              <button key={opiton} onClick={()=>handleCorrect(opiton)}><input  className='mr-4' type="radio" name={id} value={opiton} id={opiton}/>                           
                                  <label htmlFor={opiton} >{opiton}</label></button>  
                                  <ToastContainer/>
                         </div>
                         )
               }             
               </div>
          </div>
     );
};

export default ShowQoption;