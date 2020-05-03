import React from 'react';

class ChartSelector extends React.Component {
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
        colors:["#55BCC9","#3FEEE6","#97CAEF","#FC4445"],
        dataLabels: {
          enabled: true
        },
        fill: {
          type: 'gradient',
        },
        labels:["Non-Hospitalized Cases","Recovered","Hospitalized Cases","Deaths"],
        //labels:["Deaths","Active Cases"],

      	fatality_chart:  FatalityChart,

		};
    this.selectChart = this.selectChart.bind(this);
    if(props.chart_type == "FatalityChart"){
      const SpecificChart = this.state.fatality_chart
      return <SpecificChart info={props.info}/>;
            legend: {
          inverseOrder: true,
          fontSize: '18px',
          fontFamily: 'Avenir Next',
          position: 'top',
          formatter: function(val, opts) {
            return val + ": " + opts.w.globals.series[opts.seriesIndex]
          }
    }
	};
}
