import ProductList from "./ProductList";
import { useEffect, useState } from "react"
import { Product } from "../../models/product";



export default function Catalog() {
    const [products, setProducts] = useState<Product []>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/Product')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Print the JSON data to the console
            setProducts(data);
        })
    }, [])


    return (
        <>
            <ProductList products={products}/>
        </>
    )
}