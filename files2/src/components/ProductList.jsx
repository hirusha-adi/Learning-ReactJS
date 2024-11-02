import {useCallback, useEffect, useState} from "react"

const ProductList = () => {

    const [products, setProducts] = useState([])
    const [url, setUrl] = useState("http://localhost:8000/products")

    // adding here will result in an inifinite loop
    // -----
    // fetch("http://localhost:8000/products")
    // .then(response => response.json())
    // .then(data => setProducts(data))
    // -----

    // this is correct, but logic is inside it
    // if its outside, do what's below 
    // -----
    // useEffect(() => {
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => setProducts(data))
    // }, [url])
    // -----
    // caled once when [] (dependency) is empty
    // or called everytime the dependency changes
    // eg: could have a variable


    // This is considered wrong.
    // -----
    // const fetchProducts = async () => {
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     setProducts(data)
    // }
    // -----
    // useEffect(() => {
    //     fetchProducts()
    // }, [url])
    // -----


    // this is CORRECT
    // we only do this when our function is seperate, outside
    // also with async/await
    // -----
    const fetchProducts = useCallback(async () => {
        const response = await fetch(url)
        const data = await response.json()
        setProducts(data)
    }, [url]);
    // -----
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])
    // -----

    console.log(products)   

    return (
        <>
            <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
            <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock</button>
            <ul>
                {products.map(product => (
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

export { ProductList }