import React, { Component } from "react";

import Header from "../components/Header";

import { Link } from "react-router-dom";

export default class Default extends Component {
  render() {
    return (
      <Header title="404" styleClass="header-error">
        <h2 className="text-light text-uppercase">page not found</h2>

        <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">
          back to home page
        </Link>
      </Header>
    );
  }
}
