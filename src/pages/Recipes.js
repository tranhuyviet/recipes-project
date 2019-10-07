import React, { Component } from "react";

import Search from "../components/Search";
import RecipeList from "../components/RecipeList";

//import { recipeData } from "../data/tempList";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }

  state = {
    recipes: [],
    search: "",
    url: `https://www.food2fork.com/api/search?key=43e018b646f7de4f8391ab61c87decf5`,
    base_url: `https://www.food2fork.com/api/search?key=43e018b646f7de4f8391ab61c87decf5`,
    query: "&q=",
    error: ""
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      //console.log(jsonData);

      if (jsonData.recipes.length === 0) {
        this.setState({
          error: "sorry but your search did not return. Please try again"
        });
      } else {
        this.setState({
          recipes: jsonData.recipes
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  //handle input change in search
  handleChange = e => {
    this.setState(
      {
        search: e.target.value
      }
      //() => console.log(this.state.search)
    );
  };

  //handle submit in search
  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      {
        url: `${base_url}${query}${search}`,
        search: ""
      },
      () => this.getRecipes()
    );
  };

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.error ? (
          <section>
            <div className="row">
              <div className="col">
                <h2 className="text-orange text-center text-uppercase mt-5">
                  {this.state.error}
                </h2>
              </div>
            </div>
          </section>
        ) : (
          <RecipeList recipes={this.state.recipes} />
        )}
      </>
    );
  }
}
