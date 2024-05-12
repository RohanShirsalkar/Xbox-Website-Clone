import React, { useEffect, useState } from 'react'
import ProductCard from '../../shared/ProductCard/ProductCard'
import "./allproductspage.scss"
import productService from '../../services/productService'

export default function AllProductsPage() {
    const [products, setProducts] = useState();

    const findAllProducts = () => {
        productService.findAll()
            .then(res => {
                console.log(res);
                setProducts(res);
            })
            .catch(err => {
                console.log(err.message);
            })
    };

    useEffect(() => {
        findAllProducts()
    }, []);

    return (
        <div id='allproductspage-component'>
            <div className='heading-section'>
                <h2>Consoles</h2>
            </div>

            <div className="products-collection">
                <div className="grid-container">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

            <div className='heading-section'>
                <h2>Controllers</h2>
            </div>

            <div className="products-collection">
                <div className="grid-container">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>


        </div>
    )
}
