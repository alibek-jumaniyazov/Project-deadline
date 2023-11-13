import { createContext, useState } from "react";
import imgBoy1 from '../images/product_img/imgBoy1.png'
import imgGirl1 from '../images/product_img/imgGirl1.png'
import imgBaby1 from '../images/product_img/imgBaby1.png'
import bannerBoy from '../images/product_img/bannerBoy.png'
import bannerGirl from '../images/product_img/bannerGirl.png'
import bannerBaby from '../images/product_img/bannerBaby.png'

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

    const values = {
        product
    }
    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };



