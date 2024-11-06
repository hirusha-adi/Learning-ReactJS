import { Routes, Route, Navigate } from "react-router-dom"
import { Admin } from "./pages/Admin"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact/Contact"
import { ContactLk } from "./pages/Contact/ContactLk"
import { ContactEu } from "./pages/Contact/ContactEu"
import { ContactOther } from "./pages/Contact/ContactOther"
import { ProductList } from "./pages/ProductList"
import { ProductDetail } from "./pages/ProductDetail"
import { PageNotFound } from "./pages/PageNotFound"

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
                    <Route path="*" element={<ContactOther />} />
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
