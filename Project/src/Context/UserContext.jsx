import { createContext, useState } from "react";
import imgBoy1 from '../images/product_img/imgBoy1.png'
import imgGirl1 from '../images/product_img/imgGirl1.png'
import imgBaby1 from '../images/product_img/imgBaby1.png'
import bannerBoy from '../images/product_img/bannerBoy.png'
import bannerGirl from '../images/product_img/bannerGirl.png'
import bannerBaby from '../images/product_img/bannerBaby.png'
import icon1 from '../images/icon/icon1.png'
import icon2 from '../images/icon/icon2.png'
import icon3 from '../images/icon/icon3.png'
import icon4 from '../images/icon/icon4.png'
import blogImg from '../images/product_img/blogImg.png'

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [product, setProduct] = useState({
        boy: {
            banner: [
                {
                    img: bannerBoy
                }
            ],
            products: [
                {
                    id: 1,
                    title: "Белый Boncai",
                    img: imgBoy1,
                    price: "30.000"
                },
                {
                    id: 2,
                    title: "Белый Boncai",
                    img: imgBoy1,
                    price: "30.000"
                },
                {
                    id: 3,
                    title: "Белый Boncai",
                    img: imgBoy1,
                    price: "30.000"
                },
                {
                    id: 4,
                    title: "Белый Boncai",
                    img: imgBoy1,
                    price: "30.000"
                },
                {
                    id: 5,
                    title: "Белый Boncai",
                    img: imgBoy1,
                    price: "30.000"
                },
                {
                    id: 6,
                    title: "Белый Boncai",
                    img: imgBoy1,
                    price: "30.000"
                },
                {
                    id: 7,
                    title: "Белый Boncai",
                    img: imgBoy1,
                    price: "30.000"
                },
                {
                    id: 8,
                    title: "Белый Boncai",
                    img: imgBoy1,
                    price: "30.000"
                },
            ]

        },
        girl: {
            banner: [
                {
                    img: bannerGirl
                }
            ],
            products: [
                {
                    id: 1,
                    title: " Boncai",
                    img: imgGirl1,
                    price: "30.000"
                },
                {
                    id: 2,
                    title: "Белый Boncai",
                    img: imgGirl1,
                    price: "30.000"
                },
                {
                    id: 3,
                    title: "Белый Boncai",
                    img: imgGirl1,
                    price: "30.000"
                },
                {
                    id: 4,
                    title: "Белый Boncai",
                    img: imgGirl1,
                    price: "30.000"
                },
                {
                    id: 5,
                    title: "Белый Boncai",
                    img: imgGirl1,
                    price: "30.000"
                },
                {
                    id: 6,
                    title: "Белый Boncai",
                    img: imgGirl1,
                    price: "30.000"
                },
                {
                    id: 7,
                    title: "Белый Boncai",
                    img: imgGirl1,
                    price: "30.000"
                },
                {
                    id: 8,
                    title: "Белый Boncai",
                    img: imgGirl1,
                    price: "30.000"
                },
            ]
        },
        baby: {
            banner: [
                {
                    img: bannerBaby
                }
            ],
            products: [
                {
                    id: 1,
                    title: "Белый ",
                    img: imgBaby1,
                    price: "30.000"
                },
                {
                    id: 2,
                    title: "Белый Boncai",
                    img: imgBaby1,
                    price: "30.000"
                },
                {
                    id: 3,
                    title: "Белый Boncai",
                    img: imgBaby1,
                    price: "30.000"
                },
                {
                    id: 4,
                    title: "Белый Boncai",
                    img: imgBaby1,
                    price: "30.000"
                },
                {
                    id: 5,
                    title: "Белый Boncai",
                    img: imgBaby1,
                    price: "30.000"
                },
                {
                    id: 6,
                    title: "Белый Boncai",
                    img: imgBaby1,
                    price: "30.000"
                },
                {
                    id: 7,
                    title: "Белый Boncai",
                    img: imgBaby1,
                    price: "30.000"
                },
                {
                    id: 8,
                    title: "Белый Boncai",
                    img: imgBaby1,
                    price: "30.000"
                },
            ]
        }
    })

    const [webInfo, setWebInfo] = useState([
        {
            id: 1,
            img: icon1,
            title: "Маркетплейс",
            description: "Компания Lode X - позволяет людям редактировать свою одежду.",
        },
        {
            id: 2,
            img: icon2,
            title: "Оригинал ",
            description: "Мы следим за оригинальностью продаваемых вещей",
        },
        {
            id: 3,
            img: icon3,
            title: "Подбор",
            description: "Удобный подбор одежды по всем параметрам",
        },
        {
            id: 4,
            img: icon4,
            title: "Безопасная сделка",
            description: "Безопасность платежей для покупателей и продавцов",
        },
    ])

    const [blog, setBlog] = useState([
        {
            id: 1,
            img: blogImg,
            description: "Эта рубашка спасет Вы сэкономите 40$ при себе Следующая онлайн-покупка"
        },
        {
            id: 2,
            img: blogImg,
            description: "История позади Lode X: Это Стильное  движение"
        },
        {
            id: 3,
            img: blogImg,
            description: "Что надеть Мадрид: 8 нарядов для Сделайте так, чтобы вы выглядели местными"
        },
        {
            id: 4,
            img: blogImg,
            description: "Руководство по покупке Костюм: Что ты Надо знать"
        },
    ])

    const values = {
        product,
        webInfo,
        blog
    }
    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };



