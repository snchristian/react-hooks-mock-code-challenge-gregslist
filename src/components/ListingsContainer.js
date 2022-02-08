import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listing}) {
  const displayListing = listing.map((listing)=>{
     return <ListingCard
    key={listing.id}
    listing={listing}
    
    />
  })
  return (
    <main>
      <ul className="cards">
        {displayListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
