import { useLocation, useParams, useSearchParams } from "react-router-dom"

const ProductDetail = () => {
    // get parts of url
    // eg: /product/:id  --> /product/1001
    const params = useParams()

    // query parameters
    // eg: /product?id=1001&sort=asc&type=book
    const [searchParams] = useSearchParams()
    console.log(searchParams.get("q"))
    console.log(searchParams.get("sort"))
    console.log(searchParams.get("type"))

    const location = useLocation()
    console.log(location.pathname)  // /product/1001
    console.log(location.search)  // ?q=react
    console.log(location.hash)  // #section
    console.log(location.state)  // { from: '/' } (no idea)

    return (
        <>
            Product Details of {params.id}
        </>
    )
}

export { ProductDetail }