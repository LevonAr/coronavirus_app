import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class ColumnChartReChart extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      data_array: []
    }
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/LevonAr/Covid-19-data-JSON/master/update1_time_series/update1_fetch.json")
      .then((response) => {
        return response.text();
      })  
      .then((data) => {

        let step_a = JSON.parse(data)

        let step_b = step_a[this.props.info]

        let result = Object.entries(step_b); 

        let state_object = []

        for(let i = 0; i < result.length; i++) { 
          let state_obj = {}
          state_obj["date"] = result[i][0]
          state_obj["cases"] = result[i][1]

          state_object.push(state_obj)
        }

        console.log(state_object)

        const data2012 = state_object
        
        this.setState({
          data_array: data2012
        })
        
      })
  }

  render() {
    return (
      
            <div>

        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <div class="shadow-lg p-3 mb-5 rounded bg-white border border-dark" >
        <BarChart
          width={1070}
          height={400}
          data={this.state.data_array}
          margin={{
            top: 5, right: 60, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" minTickGap={20}/>
          <YAxis />
          <Tooltip />
          <Legend height={30} verticalAlign="top" payload = {[{ value: "Daily new cases in "+this.props.info, type: 'line' }]}/>
          <Bar dataKey="cases" fill="#8884d8" />
        </BarChart>
        </div>

        <a href="https://github.com/CSSEGISandData/COVID-19"><center>Source: Johns Hopkins University CSSE</center></a>

        <br></br>
        <br></br>
            <div class="shadow-lg p-3 mb-5 rounded bg-white border border-dark" >

                <h2><center>CurveTracker by State</center></h2>

                <br></br>

                <>
                
                <NavLink exact to="/Alabama">     
                <Button variant="outline-dark" size="lg" block>
                    Alabama
                </Button>    
                </NavLink> 

                <NavLink exact to="/Alaska">     
                <Button variant="outline-dark" size="lg" block>
                    Alaska
                </Button>    
                </NavLink>                
                <NavLink exact to="/Arizona">     
                <Button variant="outline-dark" size="lg" block>
                    Arizona
                </Button>    
                </NavLink> 
                <NavLink exact to="/Arkansas">     
                <Button variant="outline-dark" size="lg" block>
                Arkansas
                </Button>    
                </NavLink> 
                <NavLink exact to="/California">     
                <Button variant="outline-dark" size="lg" block>
                California
                </Button>    
                </NavLink> 
     
                <NavLink exact to="/Connecticut">     
                <Button variant="outline-dark" size="lg" block>
                Connecticut
                </Button>    
                </NavLink> 
                <NavLink exact to="/Delaware">     
                <Button variant="outline-dark" size="lg" block>
                Delaware
                </Button>    
                </NavLink> 
                <NavLink exact to="/Florida">     
                <Button variant="outline-dark" size="lg" block>
                Florida
                </Button>    
                </NavLink> 
                <NavLink exact to="/Georgia">     
                <Button variant="outline-dark" size="lg" block>
                Georgia
                </Button>    
                </NavLink> 
                <NavLink exact to="/Hawaii">     
                <Button variant="outline-dark" size="lg" block>
                Hawaii
                </Button>    
                </NavLink> 
                <NavLink exact to="/Idaho">     
                <Button variant="outline-dark" size="lg" block>
                Idaho
                </Button>    
                </NavLink> 
                <NavLink exact to="/Illinois">     
                <Button variant="outline-dark" size="lg" block>
                Illinois
                </Button>    
                </NavLink> 
                <NavLink exact to="/Indiana">     
                <Button variant="outline-dark" size="lg" block>
                Indiana
                </Button>    
                </NavLink> 
                <NavLink exact to="/Iowa">     
                <Button variant="outline-dark" size="lg" block>
                Iowa
                </Button>    
                </NavLink> 
                <NavLink exact to="/Kansas">     
                <Button variant="outline-dark" size="lg" block>
                Kansas
                </Button>    
                </NavLink> 
                <NavLink exact to="/Kentucky">     
                <Button variant="outline-dark" size="lg" block>
                Kentucky
                </Button>    
                </NavLink> 
                <NavLink exact to="/Louisiana">     
                <Button variant="outline-dark" size="lg" block>
                Louisiana
                </Button>    
                </NavLink> 
                <NavLink exact to="/Maine">     
                <Button variant="outline-dark" size="lg" block>
                Maine
                </Button>    
                </NavLink> 
                <NavLink exact to="/Maryland">     
                <Button variant="outline-dark" size="lg" block>
                Maryland
                </Button>    
                </NavLink> 
                <NavLink exact to="/Massachusetts">     
                <Button variant="outline-dark" size="lg" block>
                Massachusetts
                </Button>    
                </NavLink> 
                <NavLink exact to="/Michigan">     
                <Button variant="outline-dark" size="lg" block>
                Michigan
                </Button>    
                </NavLink> 
                <NavLink exact to="/Minnesota">     
                <Button variant="outline-dark" size="lg" block>
                Minnesota
                </Button>    
                </NavLink> 
                <NavLink exact to="/Mississippi">     
                <Button variant="outline-dark" size="lg" block>
                Mississippi
                </Button>    
                </NavLink> 
                <NavLink exact to="/Missouri">     
                <Button variant="outline-dark" size="lg" block>
                Missouri
                </Button>    
                </NavLink> 
                <NavLink exact to="/Montana">     
                <Button variant="outline-dark" size="lg" block>
                Montana
                </Button>    
                </NavLink> 
                <NavLink exact to="/Nebraska">     
                <Button variant="outline-dark" size="lg" block>
                Nebraska
                </Button>    
                </NavLink> 
                <NavLink exact to="/New_Hampshire">     
                <Button variant="outline-dark" size="lg" block>
                New Hampshire
                </Button>    
                </NavLink> 
                <NavLink exact to="/New_Jersey">     
                <Button variant="outline-dark" size="lg" block>
                New Jersey
                </Button>    
                </NavLink> 
                <NavLink exact to="/New_Mexico">     
                <Button variant="outline-dark" size="lg" block>
                New Mexico
                </Button>    
                </NavLink> 
                <NavLink exact to="/New_York">     
                <Button variant="outline-dark" size="lg" block>
                New York
                </Button>    
                </NavLink> 
                <NavLink exact to="/North_Carolina">     
                <Button variant="outline-dark" size="lg" block>
                North Carolina
                </Button>    
                </NavLink> 
                <NavLink exact to="/North_Dakota">     
                <Button variant="outline-dark" size="lg" block>
                North Dakota
                </Button>    
                </NavLink> 
                <NavLink exact to="/Ohio">     
                <Button variant="outline-dark" size="lg" block>
                Ohio
                </Button>    
                </NavLink> 
                <NavLink exact to="/Oklahoma">     
                <Button variant="outline-dark" size="lg" block>
                Oklahoma
                </Button>    
                </NavLink> 
                <NavLink exact to="/Oregon">     
                <Button variant="outline-dark" size="lg" block>
                Oregon
                </Button>    
                </NavLink> 
                <NavLink exact to="/Pennsylvania">     
                <Button variant="outline-dark" size="lg" block>
                Pennsylvania
                </Button>    
                </NavLink> 
                <NavLink exact to="/Rhode_Island">     
                <Button variant="outline-dark" size="lg" block>
                Rhode Island
                </Button>    
                </NavLink> 
                <NavLink exact to="/South_Carolina">     
                <Button variant="outline-dark" size="lg" block>
                South Carolina
                </Button>    
                </NavLink> 
                <NavLink exact to="/South_Dakota">     
                <Button variant="outline-dark" size="lg" block>
                South Dakota
                </Button>    
                </NavLink> 
                <NavLink exact to="/Tennessee">     
                <Button variant="outline-dark" size="lg" block>
                Tennessee
                </Button>    
                </NavLink> 
                <NavLink exact to="/Texas">     
                <Button variant="outline-dark" size="lg" block>
                Texas
                </Button>    
                </NavLink> 
                <NavLink exact to="/Utah">     
                <Button variant="outline-dark" size="lg" block>
                Utah
                </Button>    
                </NavLink> 
                <NavLink exact to="/Vermont">     
                <Button variant="outline-dark" size="lg" block>
                Vermont
                </Button>    
                </NavLink> 
                <NavLink exact to="/Virginia">     
                <Button variant="outline-dark" size="lg" block>
                Virginia
                </Button>    
                </NavLink> 
                <NavLink exact to="/Washington">     
                <Button variant="outline-dark" size="lg" block>
                Washington
                </Button>    
                </NavLink> 
                <NavLink exact to="/West_Virginia">     
                <Button variant="outline-dark" size="lg" block>
                West Virginia
                </Button>    
                </NavLink> 
                <NavLink exact to="/Wisconsin">     
                <Button variant="outline-dark" size="lg" block>
                Wisconsin
                </Button>    
                </NavLink> 
                <NavLink exact to="/Wyoming">     
                <Button variant="outline-dark" size="lg" block>
                Wyoming
                </Button>    
                </NavLink> 

                </>
            </div>


      </div> 
    );
  }
}

export default ColumnChartStates;
