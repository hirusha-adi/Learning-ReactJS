import { Routes, Route, Navigate } from "react-router-dom"
import { Admin } from "./components/Admin"
import { Home } from "./components/Home"
import { Contact } from "./components/Contact"
import { ProductList } from "./components/ProductList"
import { ProductDetail } from "./components/ProductDetail"

import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

function App() {
    const user = false;

    return (
        <>
            <Header />
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/admin" element={user ? <Admin /> : <Navigate to="/" />} />
            </Routes>
            <hr />
            <Footer />
        </>
    )
}

export default App
