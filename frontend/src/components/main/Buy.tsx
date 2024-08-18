import { useState, useEffect } from "react";
import { BuyCard } from "./BuyCards";

interface Product {
    _id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    mobile: string;
    whatsapp: string;
}

export default function Buy() {
    const [products, setProducts] = useState<Product[]>([]);

    const url = 'http://localhost:5000/api/products';

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    }, []);

    return (
        <>
            <h1 className="text-center text-4xl font-black py-6 px-3">Buy Leftover Products by Fellow Farmers</h1>
            <div className="flex justify-center items-center container flex-wrap">
                {products.map(product => (
                    <BuyCard
                        title={product.title}
                        description={product.description}
                        imageUrl={product.image}
                        price={product.price}
                        mobile={Number(product.mobile)}
                        whatsapp={Number(product.whatsapp)}
                    />
                ))}
            </div>
        </>
    );
}
