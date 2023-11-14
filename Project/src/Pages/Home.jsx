import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import Banner from '../Components/home/Banner';
import Product from '../Components/home/Product';
import Brends from '../Components/home/Brends';

export default function Home({ product }) {
    console.log(product);
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
                            <Product item={item} />
                        ))
                    }
                </div>
                <hr />
                <div className="Brendsinfo">
                    <div className="Brendstitle">
                        <p>Популярные бренды</p>
                        <span>Все бренды</span>
                    </div>
                    <Brends/>
                </div>
            </div>
        </div>
    )
}
