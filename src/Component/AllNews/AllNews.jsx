import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import useSWR from 'swr'
import { Link } from 'react-router-dom'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const AllNews = () => {
    const { data, error } = useSWR('https://newsapi.org/v2/top-headlines?country=us&apiKey=1a8c2cad79ae42e58eed5c699425b95a', fetcher)

    if (error) return <div className='catch'>Failed to load</div>
    if (!data) return <div className='catch'>Loading...</div>

    return (
        <div>
            <h1 className='text-2xl font-bold lg:text-4xl my-5 mx-5 pb-2'>Top Headlines</h1>
            <div className='flex items-start justify-between gap-4 my-5 mx-5 pb-2 overflow-y-hidden overflow-x-scroll'>
                {data.articles.map((news, index) => (
                    <Link to={`/pages/${news.author}/${encodeURIComponent(news.title)}/details`} key={index}>
                        <NewsCard news={news} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default AllNews