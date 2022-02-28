import React from 'react'
import { Link, Params, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './Trailer.css'
import ReactPlayer from 'react-player'

const Trailer = ({movies}) => {
const params =useParams()
const user = movies.find (el=>el.name ===params.name)
  return (
    <div>
        <div className='descrpt'>
            <img src={user.image} className='mvImage' />
            <div className='dt-ds'>
                <div className='date'>{user.date}</div>
                <h2 className='descrp'>{user.description_v2}</h2>
            </div>
        </div>
            <div className='vid'><ReactPlayer url={user.src} controls="true" /></div>
            <Link to={"/"}>
                <div className='btnn'>
                    <Button variant="primary" size="sm">
                         Go back home
                    </Button>
                </div>
            </Link>
    </div>
  )
}

export default Trailer