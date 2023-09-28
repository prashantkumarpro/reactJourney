import React from 'react'
import { useParams } from 'react-router-dom'
export const User = () => {
  const {myParams} = useParams()
  return (
    <div className='text-center bg-gray-500 text-white text-2xl'>User: {myParams}</div>
  )
}
