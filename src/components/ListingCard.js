import React,{useState} from "react";

function ListingCard({listing}) {
  
  const[isfavorite, setisFavorite] = useState(false)
  
  function handlefavorite(){
    setisFavorite(isfavorite => !isfavorite)
  }



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isfavorite ? (
          <button className="emoji-button favorite active" onClick={handlefavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handlefavorite}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
