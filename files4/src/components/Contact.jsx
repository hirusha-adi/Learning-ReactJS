import { useNavigate } from "react-router-dom"

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
        </>
    )
}

export { Contact }