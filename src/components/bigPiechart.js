
import React, { Component } from 'react'
import {
    ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend,
  } from 'recharts';

  import {View} from "react-native";
import { Spin } from 'antd';
//'#0088FE', '#00C49F', '#FFBB28', '#FF8042','#FF2F30', '#FFFFFF', '#8884d8',
const COLORS = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#000000'];


  class BigPiechart extends Component {
    
    constructor() {
        super();
        this.state = {
          isLoading:false,
          data:[],
        };
      }


async componentDidMount() {
  setInterval(async () => {
if (this.state.data !== this.props.data){
        this.setState({
          data:this.props.data,
          isLoading:true
        })
}
}, 3000);
        };       
  render() {
          
    return (
      this.state.isLoading === true ? 
        <div>
        <ResponsiveContainer  aspect={4.0/2} width='100%' >
            <PieChart>
              <Pie
                data={this.state.data}
        
                labelLine={true}
                // label={renderCustomizedLabel}
                // outerRadius={}
                // cx={225}
                // cy={225} 
                innerRadius={"40%"}
                outerRadius={"80%"} 
                label
                fill="#8884d8"
                dataKey="value"
                isAnimationActive={true}
              >
                {/* {console.log("big")}
                {console.log(this.props.data)}
                {console.log(this.state.data)} */}
                {
                  this.state.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
              </Pie>
            <Tooltip />
            <Legend layout="vertical" verticalAlign="middle" align="right"/>
            </PieChart>
        </ResponsiveContainer>
        </div>
                     :(<View style = {{marginTop:100}}>
                      <Spin size="large" tip="Loading..."/>
                      </View>)
    )
}
  }

  export default BigPiechart;  