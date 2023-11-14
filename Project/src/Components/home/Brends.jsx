import React from 'react'
import adidas from '../../images/icon/adidas_logo.png'
import puma from '../../images/icon/puma.png'
import rebook from '../../images/icon/puma.png'
import nike from '../../images/icon/reboook.png'
import lacost from '../../images/icon/lacoste.png'

export default function Brends() {

  return (
    <div className='Brends'>
      <button>
        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 1L2 9.17778L14 17" stroke="#33CAFF" stroke-width="2" />
        </svg>
      </button>
      <div className="BrandImages">
        <img src={nike} alt="" />
        <img src={adidas} alt="" />
        <img src={puma} alt="" />
        <img src={rebook} alt="" />
        <img src={lacost} alt="" />
      </div>
      <button>
        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 17L13 8.82222L1 1" stroke="#33CAFF" stroke-width="2" />
        </svg>
      </button>
    </div>
  )
}
