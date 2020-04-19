import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class ColumnChartReChart extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      data_array: []
    }
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/LevonAr/Covid-19-data-JSON/master/update1_time_series/update1_fetch.json")
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

        console.log(state_object)

        const data2012 = state_object
        
        this.setState({
          data_array: data2012
        })
        
      })
  }

  render() {
    return (
      
            <div>

        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <div class="shadow-lg p-3 mb-5 rounded bg-white border border-dark" >
        <BarChart
          width={1070}
          height={400}
          data={this.state.data_array}
          margin={{
            top: 5, right: 60, left: 20, bottom: 5,
          }}
        >
