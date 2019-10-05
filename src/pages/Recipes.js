import React, { Component } from "react";

import Search from "../components/Search";
import RecipeList from "../components/RecipeList";

import { recipeData } from "../data/tempList";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    recipes: recipeData,
    search: ""
  };

  //handle input change in search
  handleChange = e => {
    this.setState(
      {
        search: e.target.value
      },
      () => console.log(this.state.search)
    );
  };

  //handle submit in search
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={this.state.recipes} />
      </>
    );
  }
}
