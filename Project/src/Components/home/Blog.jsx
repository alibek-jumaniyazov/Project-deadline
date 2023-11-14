import React from 'react'

export default function Blog({item}) {
  return (
    <div className='Blog'>
        <img src={item.img} alt="" />
        <p>{item.description}</p>
    </div>
  )
}
