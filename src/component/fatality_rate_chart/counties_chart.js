import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import './FPCC.css'
import logo from './logo.png'

class FatalityChartStates extends React.Component {
  constructor(props) {
    super(props);          
	this.handleClick = this.handleClick.bind(this);
	this.myfunction = this.myfunction.bind(this);
	  
    this.state = {

      total: 0 ,
      options: {
        chart: {
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
          formatter: function(val, opts) {
            return val + ": " + opts.w.globals.series[opts.seriesIndex]
          }
        },

        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
              }
            }
     },
        responsive: [{
          breakpoint: 480,
          options: {
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
		<div>

			{/*<Navbar bg="dark" variant="dark">
				
				<Navbar.Brand href="/">
					<img
						src={logo}
					/>	
			
				</Navbar.Brand>
				
				<a href="https://github.com/LevonAr"><span className="hidden-xs text-muted">DevLev</span></a>
			</Navbar>*/}		 


					<Layout>
      					<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} className="header">
						  	<div class="flex-container">
								  
								<button><img src={logo} alt="Covid-19 HomePage Link" onClick={this.myfunction}/></button>

								<div class="inner-flex-container">
									<>
									<ToggleButtonGroup type="radio" name="options" defaultValue={"FatalityChart"}>
										<ToggleButton variant="secondary" value={"FatalityChart"} onChange={this.handleClick} >Fatality Rate</ToggleButton>
									</ToggleButtonGroup>
									</>
								</div>     							 
							</Container>
						</Col>	
