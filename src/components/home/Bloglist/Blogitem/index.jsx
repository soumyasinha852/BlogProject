import React from 'react'
import './styles.css'
import Chip from '../../../common/chip'
import {Link} from 'react-router-dom'
const Blogitems = ({blog:{
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover,
   },
   }) => {
  return (
    <div className="blogitem-wrap"> 
      <img src={cover} alt="cover" className='blogitem-cover'/>
      <hr />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogitem-desc'>{description} </p>
      <footer>
        <div className="blogitem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>``
          </div>
        </div>
        <Link className='blogitem-link' to={`/blog/${id}`}>→</Link>
      </footer>
    </div>
  )
}

export default Blogitems