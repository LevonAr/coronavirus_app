import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


  constructor(props){
    super(props)
    this.state = {
      data_array: []
    }
