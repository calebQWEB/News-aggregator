import React from 'react'
import bookmark from '../../assets/bookmark.svg'
import heart from '../../assets/heart.svg'
import unavailable from '../../assets/unavailable.jpg'

const NewsCard = ({ news }) => {

    return (
        <div className='pb-2'>
            <div className='shadow-gray-400 shadow-sm cursor-pointer h-72 w-56 flex items-start justify-between flex-col'>
                <picture>
                    <img src={news.urlToImage || unavailable} alt='NEWS IMAGE' className='w-56 h-28 max-w-none' />
                </picture>
                <p className='text-sm font-medium p-2'>{news.title}</p>

                <div className='flex items-center gap-2 justify-between p-2'>
                    <div className='flex items-center justify-start gap-2'>
                        <img src={bookmark} alt='Bookmark' className='w-4 h-4' />
                        <img src={heart} alt='Heart' className='w-4 h-4' />
                    </div>

                    <span className='text-sm font-normal text-gray-400'>{news.publishedAt}</span>
                </div>
            </div>
        </div>
    )
}

export default NewsCard