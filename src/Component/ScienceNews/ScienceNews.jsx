import React from 'react'
import useSWR from 'swr'
import NewsCard from '../NewsCard/NewsCard'
import { Link } from 'react-router-dom'
import unavailable from '../../assets/unavailable.jpg'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const ScienceNews = () => {
    const { data, error } = useSWR('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=1a8c2cad79ae42e58eed5c699425b95a&pageSize=5', fetcher)

    if (error) return <div className='catch'>Failed to load</div>
    if (!data) return <div className='catch'>Loading...</div>

    return (
        <div className='mt-10 py-5 px-3'>
            <h1 className='text-2xl font-bold lg:text-4xl mb-2'>Science News</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 items-start cursor-pointer'>
                {data.articles.map((news, index) => (
                    <Link to={`/pages/${news.author}/${encodeURIComponent(news.title)}/details`} className={`sm:h-80 shadow-gray-300 shadow-md lg:shadow-sm lg:shadow-gray-400 cursor-pointer ${index === 1 ? ' lg:h-full lg:col-span-2 lg:row-span-2 lg:shadow-none' : ''}`} key={index}>
                        <img src={news.urlToImage || unavailable} alt='News Image' className={`sm:w-full sm:h-56 ${index === 1 ? 'lg:h-full' : ''}`} />
                        <p className={`text-xs md:text-sm lg:text-base font-medium lg:pb-4 p-2 ${index === 1 ? 'lg:hidden' : ''}`}>{news.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ScienceNews