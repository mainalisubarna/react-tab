import React from 'react';
import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {
    const navigate = useNavigate();
    const redirectHandler = (e) => {
        e.preventDefault();
        navigate("/");
    }
    return (
        <>
            <h1 className="text-center text-primary">PageNotFound</h1>
            <button className="btn btn-outline-primary" onClick={redirectHandler}>Redirect to Dashboard</button>
        </>
    )
}

export default PageNotFound