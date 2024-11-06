import { Routes, Route, Navigate } from "react-router-dom"
import { Home, Contact, ContactLk, ContactEu, ContactOther, ProductList, ProductDetail, Admin, PageNotFound } from "../pages"

const AllRoutes = () => {
    const user = false;

    return (
        <>
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
        </>
    )
}

export { AllRoutes }