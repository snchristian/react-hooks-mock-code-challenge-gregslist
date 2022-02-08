import React,{useState,useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listing,setlisting]=useState([])
  const [searchQuery,setSearchQuery]= useState(listing)

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => setlisting(data))
  })
 function handleSearch (event){
   const searchInput = event.target.value
   setSearchQuery(searchInput)  

 }
 const filteredListing = listing.filter(listing => listing.description.toLowerCase().includes(searchQuery))
  return (
    <div className="app">
      <Header handleSearch={handleSearch} />
      <ListingsContainer listing={filteredListing}/>
    </div>
  );
}

export default App;
