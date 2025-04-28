import React from 'react'

const LinkItem = ({href, text}) => {
  return (
    <a className='text-center text-(--darkblue) w-full text-sm underline' href={href}>{text}</a>
  )
}

export default LinkItem