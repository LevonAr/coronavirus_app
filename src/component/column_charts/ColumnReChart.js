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
