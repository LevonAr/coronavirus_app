import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

const anime1 = {
  duration: 2000,
  onLoad: { duration: 1000 }
}

class ColumnChartUSA extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			data_array: []
        	}
	}
	
	componentDidMount() {
		fetch("https://raw.githubusercontent.com/LevonAr/Covid-19-data-JSON/master/time_series/new_json.json")
        .then((response) => {
