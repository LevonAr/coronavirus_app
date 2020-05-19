import React from 'react';

import {
	Route,
	NavLink,
	BrowserRouter,
	Switch
  } from "react-router-dom";

import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countries : [],
			states : [],
			cities : [],
			selectedCountry : '--Choose Country--',
            selectedState : '--Choose State--',
            selectedCounty : '--Choose County'
		};
		this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeCounty = this.changeCounty.bind(this);

	}
  
	componentDidMount() {
		this.setState({
			countries : [
