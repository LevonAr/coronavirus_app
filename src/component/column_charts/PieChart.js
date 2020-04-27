import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts';
import Button from 'react-bootstrap/Button'
import {
    Route,
    NavLink,
    BrowserRouter,
    Switch
  } from "react-router-dom";

class ColumnChartStates extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      data_array: []
    }

  }

  componentDidMount() { 
    //scroll page up after clicking on state
    window.scrollTo(0, 0)
