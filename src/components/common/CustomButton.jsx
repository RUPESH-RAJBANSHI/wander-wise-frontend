import React from 'react'

const CustomButton = ({text}) => {
  return (
    <button className='bg-purple-600 text-white rounded px-10 py-2 text-lg hover:bg-purple-700'>
        {text}
    </button>
  )
}

export default CustomButton