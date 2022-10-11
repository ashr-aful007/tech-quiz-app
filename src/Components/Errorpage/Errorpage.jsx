import React from 'react'
import { useRouteError } from 'react-router-dom';

function Errorpage() {
     const error = useRouteError()
     console.log(error)
  return (
    <div>
     <div className='flex flex-col h-96 justify-center items-center'>
     <h1 className='text-4xl'>Page not pound!</h1>
     <br></br>
     {error && (
          <div>
          <p className='text-red-400 font-medium'>{error.statusText}</p>
          <p className='text-red-400 font-medium'>{error.message}</p>
          </div>
     )}
     </div>
    </div>
  )
}

export default Errorpage