import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <>
            <header>
                {/* using <a> with 'href' will lead page to reload */}
                {/* <a href="/">Home</a> {" | "}
                <a href="/product">Products</a> {" | "}
                <a href="/contact">Contacts</a> {" | "} */}

                {/* using <Link> with 'to' does not reload the page */}
                {/* <Link to="/">Home</Link> {" | "}
                <Link to="/product">Products</Link> {" | "}
                <Link to="/contact">Contacts</Link> {" | "} */}

                {/* Navlink will add 'active' class */}
                {/* it's always .active */}
                <NavLink to="/">Home</NavLink> {" | "}
                <NavLink to="/product">Products</NavLink> {" | "}
                <NavLink to="/contact">Contacts</NavLink> {" | "}
                <NavLink to="/admin">Admin</NavLink> {" | "}
            </header>
        </>
    )
}

export { Header }