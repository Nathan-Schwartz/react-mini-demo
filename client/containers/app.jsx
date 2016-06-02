import React from 'react'
import $ from 'jquery'

import RenderList from '../components/recipeList.jsx'
import Menu from '../components/menu.jsx'


export default class App extends React.Component{

  constructor(props){
    super(props)
    this.state = { recipes: [] }
  }

  // Stubbed functions
  handleIngredientChange(){}
  handleSearch(){}

  getFavourites(){

    var component = this;

    $.ajax({
      method: "GET",
      url: "http://localhost:8080/recipes",
    })
    .then(function(gotstuff){
      component.setState({recipes: JSON.parse(gotstuff)})
      
    })
  }

  render() {
    return (
      <div className="" style={{color:"blue", }}>
        <Menu
          getFavourites={this.getFavourites.bind(this)} 
          handleSearch={this.handleSearch.bind(this)} 
          handleIngredientChange={this.handleIngredientChange.bind(this)}
        />

        { this.state.recipes.length 
          ? <RenderList list={this.state.recipes}/>
          : null
        }
      </div>
    );
  }
}
