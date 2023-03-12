import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("https://dragon-news-server-gilt-xi.vercel.app/news-categories")
        .then(res=>res.json())
        .then(result=>setCategories(result))
    },[])
    return (
        <div>
            <h4>All Cataegory {categories.length}</h4>
            <div>
                {categories.map(category=> <p key={category.id}><Link to={`/category/${category.id}`}>
                {category.name}
                </Link></p>)}
            </div>
        </div>
    );
};

export default LeftSideNav;