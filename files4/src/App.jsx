import { Routes, Route, Navigate } from "react-router-dom"
import { Admin } from "./components/Admin"
import { Home } from "./components/Home"
import { Contact } from "./components/Contact"
import { ContactLk } from "./components/ContactLk"
import { ContactEu } from "./components/ContactEu"
import { ProductList } from "./components/ProductList"
import { ProductDetail } from "./components/ProductDetail"
import { PageNotFound } from "./components/PageNotFound"

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
                <Route path="/contact" element={<Contact />}>
                    <Route path="lk" element={<ContactLk />} />
                    <Route path="eu" element={<ContactEu />} />
                </Route>
                <Route path="/product" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/admin" element={user ? <Admin /> : <Navigate to="/" />} />
                <Route path="*" element={<PageNotFound title={404} />} />
            </Routes>
            <hr />
            <Footer />
        </>
    )
}

export default App
