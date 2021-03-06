import React from 'react'
// import share
import { FaLocationArrow } from "react-icons/fa";
// import like
import { FaRegHeart } from "react-icons/fa";
// three dots
import { FaEllipsisH } from "react-icons/fa";

const Card = (props) => {
    const { details } = props

    return (
        <div className="card-container">
            <div className="header">
                <div className="details">
                    <h3 className='name'>{details.name}</h3>
                    <p className='location'>{details.location}</p>
                </div>
                <div className="dots-div">
                    <FaEllipsisH className='dots' />
                </div>
            </div>
            <div className="img-div">
                <img src={details.PostImage} className='post-img' alt="" />
            </div>
            <div className="like-share-date">
                <div className="like-share">
                    <FaRegHeart className='like' />
                    <FaLocationArrow className='share' />
                </div>
                <div className="date-div">
                    <span className='date'>{details.date}</span>
                </div>
            </div>
            <span className='likes'>{details.likes} likes</span>
            <h4 className="desc">{details.description}</h4>
        </div>
    )
}


export default Card;