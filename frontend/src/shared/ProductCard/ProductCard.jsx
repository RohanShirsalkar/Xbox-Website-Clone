import React from 'react'
import "./productCard.scss"
import { Link } from 'react-router-dom'

export default function ProductCard(id) {
    return (
        <div id='productCard'>
            <picture>
                <img src="public\Xbox project images\consoles-thumbnail\Xbox Series S - Gilded Hunter Bundle.jpg" width="100%" alt="console-image" />
            </picture>
            <h3 className='subheading'>Xbox Series S – Starter Bundle</h3>
            <div className='mb-2 mt-2'>
                <span className='price-text'>#4,900.00</span>
            </div>
            <div className="btn-group d-flex align-center">
                <Link to="/product/12" className='mr-3'><span>BUY NOW </span></Link>
                <a href="#"><span>LEARN MORE</span></a>
            </div>
        </div>
    )
}
