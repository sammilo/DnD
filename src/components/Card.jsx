import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCount((count) => count + 1)
  }

  return (
      <Link to={'/view/'+ props.id} style={{ textDecoration: 'none' }}>
        <div className="Card">
            <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
            <h3 className="creator">{"Created by " + props.creator}</h3>
            <h2 className="name">{props.name}</h2>
            <h3 className="level">{"Level: " + props.level}</h3>
            <h3 className="species">{"Species: " + props.species.charAt(0).toUpperCase() + props.species.slice(1)}</h3>
            <h3 className="class">{"Class: " + props.class}</h3>
            <p className="story">{props.story}</p>
            <button className="likeButton" onClick={updateCount} >👍 Like Count: {count}</button>
        </div>
      </Link>
  );
};

export default Card