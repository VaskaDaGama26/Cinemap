import React from 'react'

const Input = ({name, label, type, pattern}) => {
  return (
    <div className='flex flex-col'>
        <label className='text-base' htmlFor={name}>{label}</label>
        <input className='w-full h-8 ps-4' name={name} type={type} pattern={pattern} required />
    </div>
  )
}

export default Input