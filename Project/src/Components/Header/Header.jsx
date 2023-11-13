import React from 'react'
import SearchSection from './SearchSection'
import logo from '../../images/icon/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {

    return (        
        <div className='Header'>
            <div className="HeadreLists">
                <img src={logo} alt="" className='logo' />
                <ul className="list">
                    <Link to={'/'}><li className="headerItems" >Мужское</li></Link>
                    <Link to={'girl'}><li className="headerItems" >Женское</li></Link>
                    <Link to={'baby'}><li className="headerItems" >Детские </li></Link>
                    <Link to={'/'}><li className="headerItems">Безопасная Сделка</li></Link>
                    <li className="headerItems">Правило Пользование</li>
                </ul>
                <div className="headerContact">
                    <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.2952 15.1591C35.6172 15.1591 34.9732 15.053 34.3634 14.8409C33.7573 14.625 33.2194 14.286 32.7497 13.8239C32.28 13.3617 31.9107 12.7595 31.6418 12.017C31.3766 11.2746 31.2459 10.375 31.2497 9.31818C31.2535 8.375 31.3747 7.52652 31.6134 6.77273C31.8558 6.01894 32.1986 5.37689 32.6418 4.84659C33.0887 4.31629 33.6228 3.91098 34.2441 3.63068C34.8653 3.34659 35.5565 3.20455 36.3179 3.20455C37.174 3.20455 37.9278 3.36932 38.5793 3.69886C39.2308 4.02841 39.7497 4.4697 40.1361 5.02273C40.5262 5.57197 40.7535 6.17803 40.8179 6.84091H37.7043C37.6323 6.51136 37.4656 6.27083 37.2043 6.11932C36.9467 5.96401 36.6512 5.88636 36.3179 5.88636C35.655 5.88636 35.1683 6.17424 34.8577 6.75C34.5509 7.32576 34.3937 8.08333 34.3861 9.02273H34.4543C34.602 8.66667 34.8255 8.36174 35.1247 8.10795C35.424 7.85417 35.7725 7.65909 36.1702 7.52273C36.5679 7.38636 36.9884 7.31818 37.4316 7.31818C38.1361 7.31818 38.7516 7.47727 39.2781 7.79545C39.8084 8.11364 40.2213 8.54924 40.5168 9.10227C40.8122 9.6553 40.9581 10.2879 40.9543 11C40.9581 11.8333 40.7611 12.5625 40.3634 13.1875C39.9694 13.8125 39.4221 14.2973 38.7213 14.642C38.0206 14.9867 37.2119 15.1591 36.2952 15.1591ZM36.2725 12.7727C36.5869 12.7727 36.8653 12.7008 37.1077 12.5568C37.3539 12.4129 37.5452 12.2159 37.6816 11.9659C37.8217 11.7159 37.8899 11.4318 37.8861 11.1136C37.8899 10.7917 37.8217 10.5076 37.6816 10.2614C37.5452 10.0114 37.3539 9.81439 37.1077 9.67045C36.8653 9.52652 36.5869 9.45455 36.2725 9.45455C36.0414 9.45455 35.8274 9.49621 35.6304 9.57955C35.4372 9.65909 35.2687 9.77462 35.1247 9.92614C34.9808 10.0739 34.8672 10.25 34.7838 10.4545C34.7043 10.6553 34.6626 10.875 34.6588 11.1136C34.6626 11.4318 34.7346 11.7159 34.8747 11.9659C35.0149 12.2159 35.2062 12.4129 35.4486 12.5568C35.691 12.7008 35.9656 12.7727 36.2725 12.7727Z" fill="#33CAFF" />
                        <path d="M23.5861 43.4644C19.2181 43.4644 15.6638 39.99 15.6638 35.7204C15.6638 31.4507 19.2181 27.9763 23.5861 27.9763C27.9541 27.9763 31.5084 31.4507 31.5084 35.7204C31.5084 39.99 27.9541 43.4644 23.5861 43.4644ZM23.5861 30.0693C20.4029 30.0693 17.805 32.6088 17.805 35.7204C17.805 38.8319 20.4029 41.3714 23.5861 41.3714C26.7693 41.3714 29.3672 38.8319 29.3672 35.7204C29.3672 32.6088 26.7693 30.0693 23.5861 30.0693Z" fill="#33CAFF" />
                        <path d="M26.1414 36.8506H21.0169C20.4316 36.8506 19.9463 36.3761 19.9463 35.8041C19.9463 35.232 20.4316 34.7576 21.0169 34.7576H26.1414C26.7266 34.7576 27.212 35.232 27.212 35.8041C27.212 36.3761 26.7409 36.8506 26.1414 36.8506Z" fill="#33CAFF" />
                        <path d="M23.5847 39.4181C22.9995 39.4181 22.5142 38.9437 22.5142 38.3716V33.3624C22.5142 32.7903 22.9995 32.3159 23.5847 32.3159C24.17 32.3159 24.6553 32.7903 24.6553 33.3624V38.3716C24.6553 38.9437 24.17 39.4181 23.5847 39.4181Z" fill="#33CAFF" />
                        <path d="M16.1628 41.9297C15.7203 41.9297 15.2778 41.8739 14.921 41.7483C11.2667 40.5344 0.817871 34.6182 0.817871 23.8464C0.817871 18.9627 4.85752 15 9.82502 15C12.2088 15 14.4927 15.9349 16.1628 17.5674C17.833 15.9349 20.1311 15 22.5007 15C27.4682 15 31.5078 18.9627 31.5078 23.8464C31.5078 26.5672 30.8369 29.1765 29.5094 31.6183C29.3524 31.9113 29.0526 32.1206 28.71 32.1625C28.3532 32.2043 28.0249 32.0927 27.7822 31.8415C26.6688 30.6974 25.17 30.0555 23.5713 30.0555C20.3881 30.0555 17.7901 32.595 17.7901 35.7066C17.7901 37.088 18.3183 38.4275 19.2747 39.474C19.5031 39.7251 19.5887 40.06 19.5173 40.3809C19.446 40.7018 19.2176 40.9809 18.9178 41.1204C18.3468 41.3716 17.833 41.5809 17.3619 41.7344C17.0336 41.8739 16.6054 41.9297 16.1628 41.9297ZM9.82502 17.093C6.0423 17.093 2.95903 20.1209 2.95903 23.8464C2.95903 33.3904 12.3373 38.6647 15.6204 39.767C15.8774 39.8647 16.4341 39.8507 16.691 39.767C16.7338 39.753 16.7766 39.7391 16.8195 39.7251C16.0772 38.5251 15.6632 37.1438 15.6632 35.7205C15.6632 31.4509 19.2176 27.9765 23.5855 27.9765C25.2699 27.9765 26.8686 28.4928 28.2104 29.4276C28.9813 27.6416 29.3667 25.7719 29.3667 23.8464C29.3667 20.1209 26.2834 17.093 22.5007 17.093C20.3595 17.093 18.304 18.0977 17.0193 19.786C16.6196 20.3162 15.7061 20.3162 15.3064 19.786C14.0217 18.0977 11.9662 17.093 9.82502 17.093Z" fill="#33CAFF" />
                    </svg>
                    <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0048 0C12.5035 0 8.82061 4.48 8.82061 10C8.82061 15.52 12.5035 20 17.0048 20C21.506 20 25.1889 15.52 25.1889 10C25.1889 4.48 21.506 0 17.0048 0ZM8.45233 20C4.11473 20.2 0.636475 23.68 0.636475 28V32H33.373V28C33.373 23.68 29.9357 20.2 25.5572 20C23.3475 22.44 20.3193 24 17.0048 24C13.6902 24 10.662 22.44 8.45233 20Z" fill="#33CAFF" />
                    </svg>
                    <button>Contact Us</button>
                </div>
            </div>
            <SearchSection />
        </div>
    )
}
