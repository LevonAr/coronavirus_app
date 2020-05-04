import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import './FPCC.css'
class FatalityChartStates extends React.Component {
  constructor(props) {
    super(props);
		this.handleClick = this.handleClick.bind(this);
		this.myfunction = this.myfunction.bind(this);

    
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
  	handleClick(event) {
		this.setState({
			selected_chart_type: event.target.value
		})
	}

	myfunction() {		window.location.href = "https://proven-entropy-270101.appspot.com/"
  	}
  componentDidMount() {
    window.scrollTo(0, 0)
    fetch()
    /*
    */
  }
      render() {
    return (
