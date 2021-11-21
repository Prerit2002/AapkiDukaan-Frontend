import React from 'react'
import ProductCardH from '../ProductCardH'
import SideElements from '../Sidebar'

function CategoryPage(props) {
    const product = 
    [ 
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://www.netcetra.com/images/howto_images/photoshop-logo.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    }
]
    return (
        <>
        <h2 className="text-4xl text-left font-bold">Food & Dairy</h2>
        <div className="flex flex-row ">
            <SideElements />
            <div className="mx-10 grid grid-cols-1 w-full">
            <ProductCardH product={product}/>
            <ProductCardH product={product}/>
            <ProductCardH product={product}/>
            </div>
        </div>
        </>
    )
}

export default CategoryPage
