import React from 'react'
import Rate from '../Rate'
import './Cover.css'

const Cover = () => {
  return (
    <div className='Container'>
        <img src='https://fr.web.img2.acsta.net/pictures/16/12/12/13/49/295774.jpg' alt='cover-img' className='cover-image' />
        <div className='Date-Highlight'>
            <div className='Date'>2016</div>
            <div className='Highlight'>Mitsuha, a teenager stuck in a traditional family, dreams of leaving her native mountains to discover the hectic life of Tokyo. She is far from imagining being able to live the urban adventure in the skin of... Taki, a young high school student living in Tokyo. Through her dreams, Mitsuha sees herself literally propelled into the young boy's life. What mystery is hidden behind these strange dreams which unite two destinies that everything opposes and which have never met?</div>
        </div>
        <div className='Rate-Trailer'>
            <div className='Rating'>★★★★★</div>
            <div className='watch-btn' id='trailer-btn'><h3>WATCH TRAILER</h3></div>
        </div>
    </div>
  )
}

export default Cover