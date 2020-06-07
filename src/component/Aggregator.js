import React from 'react';
import FatalityChart from './fatality pie charts/Fatality Pie Chart Counties';
import ColumnChartCounty from './column charts/Column Chart County';

class Aggregator extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      new_cases_chart: ColumnChartState,
		};
    this.selectChart = this.selectChart.bind(this);
	}

	selectChart(props) {
    if (props.chart_type == "NewCasesChart"){
      const SpecificChart = this.state.new_cases_chart
      return <SpecificChart info={props.info}/>;
    }
  }
  render() {
    return (
      <div id="main">
      <br></br>
      <center>
	      <div id="font" class="shadow p-3 mb-0 rounded bg-white border ">
		Total Confirmed Cases in {this.props.info}: {this.state.total}
	      </div>
      </div>
    )
  }
}
export default Aggregator ;
