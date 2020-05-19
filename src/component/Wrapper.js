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
				{ name: 'USA', states: [{"name": "Alabama", "cities": ["Autauga", "Baldwin", "Barbour", "Bibb", "Blount", "Bullock", "Butler", "Calhoun", "Chambers", "Cherokee", "Chilton", "Choctaw", "Clarke", "Clay", "Cleburne", "Coffee", "Colbert", "Conecuh", 
				{ name: 'more coming soon', states: [ {name: '', cities: ['']} ] }
			]
		});
	}
	changeCountry(event) {
		this.setState({selectedCountry: event.target.value});
		this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
	}
	changeState(event) {
        this.setState({selectedState: event.target.value});
		const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
        this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
        
    }
    changeCounty(event) {
        this.setState({selectedCounty: this.state.selectedState+", "+ event.target.value});
        console.log(this.state)
    }
