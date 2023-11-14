import React from 'react'
import MenuIcon from '../images/icon/Menu.svg'
import LeftIcon from '../images/icon/turnLeft.svg'
import RightIcon from '../images/icon/turnRight.svg'
import CloudIMg from '../images/icon/cloud-img.svg'
import AllDivs from '../Components/home/AllDivs'

export default function PatterPrint() {
    
    return (
        <>
            <div className='PatterPrint'>
                <div class="last-top">
                    <h1 class="title">Pattern Print</h1>
                    <span class="subtitle">Главная / Мужское / Футболки/ Pattern Print</span>
                </div>
                <div class="bottom">
                    <div class="bottom-list">
                        <div class="last-img__box">
                            <img src={MenuIcon} alt="" />
                        </div>
                        <hr />
                        <a href="#" class="home-text">Home</a>
                        <hr />
                        <div class="turn-imgs">
                            <img src={LeftIcon} alt="" />
                            <img src={RightIcon} alt="" />
                        </div>
                    </div>
                    <span class="ptitle">Project title</span>
                    <hr />
                    <div class="bottom-right__content">
                        <span>Share</span>
                        <img src={CloudIMg} alt="" />
                    </div>
                </div>
            </div>
            <div className="Home">
                <AllDivs />
            </div>
        </>
    )
}
