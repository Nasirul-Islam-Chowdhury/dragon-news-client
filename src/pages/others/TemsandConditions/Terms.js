import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>This is our terms and condition</h1>
            <p>go back to <Link to="/register">register</Link></p>
        </div>
    );
};

export default Terms;