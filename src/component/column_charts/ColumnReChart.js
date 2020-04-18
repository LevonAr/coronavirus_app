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
