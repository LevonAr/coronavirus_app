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

        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {},
                value: {}
              }
            }
     },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    
    
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    fetch()
    /*
    */
  }
    
