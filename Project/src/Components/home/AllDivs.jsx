import React, { useContext } from 'react'
import WebInfo from './WebInfo'
import Blog from './Blog'
import User from './User'
import Brends from './Brends'
import { UserContext } from '../../Context/UserContext'

export default function AllDivs() {

    const { webInfo , blog } = useContext(UserContext)


    return (
        <div className='AllDivs'>
            <hr />
            <div className="Brendsinfo">
                <div className="Brendstitle">
                    <p>Популярные бренды</p>
                    <span>Все бренды</span>
                </div>
                <Brends />
            </div>
            <hr />
            <div className="Brendsinfo">
                <div className="Brendstitle">
                    <p>Популярные дизайнеры</p>
                    <span>Все дизайнеры</span>
                </div>
                <div className="usersDiv">
                    <User />
                    <User />
                    <User />
                    <User />
                </div>
            </div>
            <hr />
            <div className="Brendsinfo">
                <div className="Brendstitle">
                    <p>Почему вибирают именно  нас ?</p>
                </div>
                <div className="usersDiv">
                    {
                        webInfo.map((item) => (
                            <WebInfo item={item} />
                        ))
                    }
                </div>
            </div>
            <hr />
            <div className="Brendsinfo">
                <div className="Brendstitle">
                    <p>Блог</p>
                </div>
                <div className="blockDiv">
                    {
                        blog.map((item) => (
                            <Blog item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
