import React from 'react'

export default (props)=>
<div className="Rlist_container">
  { props.list.map((recipe, index)=>
    <span key={index} className="entry">
      <a className="Rthumb" src={recipe.image_url} href={recipe.source_url}>
        <img className="Rthumb" src={recipe.image_url} />
      </a>
      <b className="Rtitle"> {recipe.title} </b>
      <button 
        type="button" 
        className="Rfav"
      >
        Add to Favourites 
      </button>
      <div className="Rpublisher"> {recipe.publisher} </div>
    </span>
  )}
</div>
