import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import './FPCC.css'
class FatalityChartStates extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {


      total: 0 ,
      series: [],
      options: {
        chart: {
          width: 380,
          type: 'donut',
        },
        colors:["#D7263D","#008FFB"],
        dataLabels: {
          enabled: true
        },
        fill: {
          type: 'gradient',
        },
        labels:["Deaths","Active Cases"],
        legend: {
          inverseOrder: true,
          fontSize: '30px',
          fontFamily: 'Avenir Next',
          position: 'top',
          formatter: function(val, opts) {
            return val + ": " + opts.w.globals.series[opts.seriesIndex]
          }
        },
