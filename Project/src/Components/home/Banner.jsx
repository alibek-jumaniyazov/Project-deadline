import React from 'react'

export default function Banner({item}) {
    return (
        <div className='Banner'>
            <img src={item.img} alt="" className="bannerImg" />
            <div className="bannerInfo">
                <h1>Универсальное решение
                    для ваших нужд в одежде</h1>
                <p>Все, что вам нужно, чтобы найти идеальный предмет одежды, есть в Lode X. Мы предлагаем одежду ведущих брендов и редактирование изображений на ней.</p>
                <a href="">читать далее <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
        </div>
    )
}
