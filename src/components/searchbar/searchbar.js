import React from "react";
import { MDBCol } from "mdbreact";
import './searchbar.css'

const SearchBar = () => {
  return (
    <MDBCol md="6">
      <input className="form-control search" type="text" placeholder="Search for recipes.." aria-label="Search"/>
    </MDBCol>
  );
}

export default SearchBar;