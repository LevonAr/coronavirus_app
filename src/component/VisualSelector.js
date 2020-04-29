import React from 'react';

class ChartSelector extends React.Component {
	constructor(props) {
    	super(props);
      	fatality_chart:  FatalityChart,

		};
    this.selectChart = this.selectChart.bind(this);
    if(props.chart_type == "FatalityChart"){
      const SpecificChart = this.state.fatality_chart
      return <SpecificChart info={props.info}/>;
    }
	};
}
