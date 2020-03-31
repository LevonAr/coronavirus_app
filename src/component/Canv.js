var React = require('react');
var CanvasJS = require('./canvasjs.min');
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

class CanvasJSChart extends React.Component {
	static _cjsContainerId = 0
	constructor(props) {
		super(props);		
		this.chartContainerId = "canvasjs-react-chart-container-" + CanvasJSChart._cjsContainerId++;
	}	
	componentDidMount() {
		//Create Chart and Render		
	
	}	
	shouldComponentUpdate(nextProps, nextState){
			//Check if Chart-options has changed and determine if component has to be updated
		return !(nextProps.options === this.options);
	}
	componentDidUpdate() {
		//Update Chart Options & Render
	}
	componentWillUnmount() {
		//Destroy chart and remove reference
			this.props.onRef(undefined);
	}	
	render() {		
		//return React.createElement('div', { id: this.chartContainerId, style: this.containerProps });		
		return <div id = {this.chartContainerId} />		
	}			
		
}

var CanvasJSReact = {

    CanvasJSChart: CanvasJSChart,
    CanvasJS: CanvasJS
};	    
export default CanvasJSReact;
