import React from 'react';
import FatalityChart from './fatality pie charts/Fatality Pie Chart Counties';
import ColumnChartCounty from './column charts/Column Chart County';

class ChartSelector extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      fatality_chart:  FatalityChart,
      new_cases_chart: ColumnChartCounty
		};
    this.selectChart = this.selectChart.bind(this);
	}

	selectChart(props) {
