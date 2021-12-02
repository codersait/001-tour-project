import { useState } from 'react';
import './Card.css';
const Card = props => {
  const [show, setShow] = useState(false);
  return (
    <div className='card'>
      <h2>{props.card.title}</h2>
      <div
        className='image'
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
        src={props.card.image}
        style={{ backgroundImage: `url(${props.card.image})` }}
      >
        <div className='desc'>{show && <p>{props.card.desc}</p>}</div>
      </div>
    </div>
  );
};

export default Card;
