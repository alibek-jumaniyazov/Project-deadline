import React from 'react'

export default function Footer() {
    return (
        <footer class="footer">
            <div class="footer-list">
                <div class="first">
                    <p>Категории</p>
                    <span>Мужское</span>
                    <span>Женское</span>
                    <span>Детское</span>
                </div>
                <div class="first">
                    <p>О нас</p>
                    <span>Контакты</span>
                    <span>О компании</span>
                    <span>Правила пользования</span>
                </div>
                <div class="first">
                    <p>Мой аккаунт</p>
                    <span>Войти</span>
                    <span>Заказы</span>
                    <span>Список желаний</span>
                </div>
            </div>
            <div class="first">
                <p>+998 ( 99 ) 280 75 76</p>
                <span>example@gmail.com</span>
                <span>example@mail.ru</span>
                <span class="img-box"><img src="images/insta_logo.svg" alt="" /><img src="images/facebook_logo.svg" alt="" /></span>
            </div>
        </footer >
    )
}
