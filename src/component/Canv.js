var React = require('react');
var CanvasJS = require('./canvasjs.min');
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

class CanvasJSChart extends React.Component {
	static _cjsContainerId = 0
	constructor(props) {
		
		super(props);		
		this.chartContainerId = "canvasjs-react-chart-container-" + CanvasJSChart._cjsContainerId++;
	
	}	
	
	
	shouldComponentUpdate(nextProps, nextState){
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
