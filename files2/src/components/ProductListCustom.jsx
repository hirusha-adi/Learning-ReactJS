import {useState} from "react"
import { useFetch } from "../hooks/useFetch"

const ProductListCustom = () => {

    const [url, setUrl] = useState("http://localhost:8000/products")
    
    const { data: products, loading, error } = useFetch(url)

    console.log(loading, error, products)   

    return (
        <>
            <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
            <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock</button>
            <ul>

                { loading && <p>Loading...</p> }
                { error && <p>Error! - {error}</p>}

                {products && products.map(product => (
                    <li key={product.id}>
                        <p>
                            {product.id} 
                            {" "}- {product.name} 
                            {" "}- ${product.price} 
                            {" "}- {product.in_stock ? "In Stock" : "Out of Stock"}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export { ProductListCustom }