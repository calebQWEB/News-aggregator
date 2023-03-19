import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import unavailable from '../../assets/unavailable.jpg'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Details = () => {
    const { title, author } = useParams()
    const decodeTitle = decodeURIComponent(title)
    const encodeAuthor = encodeURIComponent(author)

    const { data, error } = useSWR(`https://newsapi.org/v2/everything?q=${decodeTitle}&apiKey=1a8c2cad79ae42e58eed5c699425b95a&author=${encodeAuthor}`, fetcher)

    const news = data?.articles[0]

    if (error) return <div className='catch'>Failed to load</div>
    if (!news) return <div className='catch'>Loading...</div>

    return (
        <div>
            <div className="my-5 mx-5 pb-2 grid items-center gap-3 sm:grid-cols-1">
                <div className="sm:order-2 lg:flex lg:flex-col lg:gap-1 w-4/5 overflow-hidden">
                    <p className="font-semibold"><span className="text-gray-400">Source - </span>{news.source.name}</p>
                    <p className="text-xs font-normal text-gray-400">{news.publishedAt}</p>
                    <a href={news.url} target='_blank' className='text-blue-700 underline'>{news.url}</a>
                </div>
                <img src={news.urlToImage || unavailable} alt='News Image' classname='sm:order-1' />
                <p className="font-bold text-sm md:text-2xl sm:text-base lg:text-lg sm:order-3 sm:col-span-2 lg:w-9/12">{news.description}</p>
                <p className="text-sm md:text-xl sm:order-4 sm:col-span-2">{news.content}</p>
                <p className="text-sm md:text-xl sm:order-4 sm:col-span-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="text-sm md:text-xl sm:order-4 sm:col-span-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="text-sm md:text-xl sm:order-4 sm:col-span-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default Details