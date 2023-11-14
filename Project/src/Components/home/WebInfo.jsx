import React from 'react'
import icon1 from '../../images/icon/icon2.png'

export default function WebInfo({item}) {
  return (
    <div className='WebInfo'>
        <div className="imgIcon">
            <img src={item.img} alt="" />
        </div>
        <div className="texts">
            <p>{item.title}</p>
            <span>{item.description}</span>
        </div>
    </div>
  )
}
