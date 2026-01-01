import React from 'react'

const FeaturesCard = ({ title, description }) => {
  return (
    <div className='border-gray-400 border rounded p-4'>
        <h3 className='text-2xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
    </div>
    
  )
}

export default FeaturesCard