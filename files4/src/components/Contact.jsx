import { useNavigate, Outlet } from "react-router-dom"

const Contact = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        return navigate("/")
    }
    return (
        <>
            Contact
            <br />
            <button onClick={handleSubmit}>Submit Form</button>
            <br />

            {/* this is where the content in subpage goes to */}
            <Outlet />
        </>
    )
}

export { Contact }