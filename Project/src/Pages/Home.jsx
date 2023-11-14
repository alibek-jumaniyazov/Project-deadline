import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import Banner from '../Components/home/Banner';
import Product from '../Components/home/Product';
import Brends from '../Components/home/Brends';
import User from '../Components/home/User';
import WebInfo from '../Components/home/WebInfo';
import Blog from '../Components/home/Blog';
import { Link } from 'react-router-dom';
import AllDivs from '../Components/home/AllDivs';

export default function Home({ product }) {

    const { webInfo , blog } = useContext(UserContext)


    return (
        <div className='Home'>
            {
                product.banner.map((item) => (
                    <Banner item={item} />
                ))
            }
            <div className="ProductsTitle">
                <div className="productsFilter">
                    <p style={{ color: '#33CAFF' }}>Новинки </p>
                    <p>Популярние </p>
                    <span>Редактировать</span>
                </div>
                <div className="productTitleFilter">
                    <p>Новые рисунки </p>
                    <div className="productSelect">
                        <span>Сортировать:</span>
                        <select name="" id="">
                            <option value="">Цена повозрастанию </option>
                            <option value="">Цена повозрастанию </option>
                        </select>
                    </div>
                </div>
                <div className="products">
                    {
                        product.products.map((item) => (
                           <Link to={'print'} > <Product item={item} /> </Link>
                        ))
                    }
                </div>
               <AllDivs/>
            </div>
        </div>
    )
}
