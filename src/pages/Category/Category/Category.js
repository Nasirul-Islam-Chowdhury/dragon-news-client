import React from 'react';
import {useLoaderData} from 'react-router-dom'
import NewsSummaryCard from '../../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This category has news {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummaryCard news={news} key={news._id}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;