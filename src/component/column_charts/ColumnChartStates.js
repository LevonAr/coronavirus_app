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
            return response.text();
        })
        .then((data) => {

			let step_a = JSON.parse(data)

			let step_b = step_a[this.props.info]

			let result = Object.entries(step_b); 

			let state_object = []

			for(let i = 0; i < result.length; i++) { 
				let state_obj = {}
				state_obj["date"] = result[i][0]
				state_obj["cases"] = result[i][1]

				state_object.push(state_obj)
			}

			console.log(Array.isArray(state_object))

			const data2012 = state_object

			
			this.setState({
				data_array: data2012
			})
			
        })
	}


  render() {
      <div>
        <h1>Victory Tutorial</h1>
        <VictoryChart
          domainPadding={30}
          theme={VictoryTheme.grayscale}
        >
          <VictoryStack
            colorScale={"warm"}
          >
            <VictoryBar
              data={this.state.data_array}
              x={"date"}
			  y={"cases"}
            />
          </VictoryStack>
        </VictoryChart>
      </div>
