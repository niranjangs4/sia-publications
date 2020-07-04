import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer,
} from 'recharts';

import {View,TouchableOpacity} from "react-native";


export default class BarChartDashboard extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';
  constructor() {
    super();
    this.state = {
      isLoading:false,
      data:[],
      name:""
    };
  }
  onclick(hdhd) {
    console.log("nwenfdwjefnwjed")
    console.log(hdhd)
    console.log(this.props.link_screen)
  }


  async componentDidMount() {
    if (this.state.data !== this.props.data){
            this.setState({
              data:this.props.data,
              name:this.props.name,
              isLoading:true
            })
            console.log("Line")
            console.log(this.props.name)
            console.log(this.state.name)
    }
        
            };  
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.link_screen(this.state.name)} >
        <View style={{margin: 15, backgroundColor: '#fff'}}>
    <ResponsiveContainer aspect={4.0/1.27} width='100%'>
      <BarChart
        data={this.state.data}
        margin={{
            top: 10, right: 40, left: 0, bottom: 0,
          }}
        barSize={10}
      >
        <XAxis dataKey="name"  padding={{ left: 10, right: 10 }} />
        <YAxis /> 
        <Tooltip />
        {/* <Legend /> */}
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
      </ResponsiveContainer>
      </View>
      </TouchableOpacity>
    );
}
}
