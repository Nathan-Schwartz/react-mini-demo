import React from 'react'

export default ({getFavourites, handleSearch, handleIngredientChange})=>
<span id="headerImage">
  <span id="authPanel">
    <button type="button" onClick={getFavourites}> Favourites </button>
    <a id="login" href="/login"> Login </a>
    <a id="logout" href="/logout"> Logout </a>
  </span>
  <div id="searchContainer">
    <h2 id="searchBarText"> Search by ingredients </h2>
    <form id="searchBar">
      <input 
        type="text" 
        className="searchBox" 
        name="ingredients" 
        id="test" 
        placeholder="onions, garlic, cheese" 
        onChange={handleIngredientChange} 
      />
      <button 
        type="button" 
        className="searchButton" 
        onClick={handleSearch}
      > 
        Go 
      </button>
    </form>
  </div>
</span>
