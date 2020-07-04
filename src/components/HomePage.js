import React, { Component } from 'react';
import {View, Text} from "react-native";
import styles from './HomePage.css';
import BarChartDashboard from './LineChart';
// import { LinearGradient } from 'expo-linear-gradient'
import BigPiechart from './bigPiechart'
import PieChartDemo from "./piechart"
import { Spin, Card  } from 'antd';
import axios from 'axios';
import https from 'https';



const gridStyle = {
    width: '25%',
    height: '25%',
    padding: '0px',
    textAlign: 'center',
  };
const gridBarChartStyle = {
    width: '75%',
    height: '30%',
    padding: '0px',
    textAlign: 'center',
  };    
const gridBarChartFullStyle = {
  width: '100%',
  height: '20%',
  padding: '0px',
  marginHorizontal:20,
  backgroundColor: '#fff'
  };    

const statisticsStyles={
  width: '16.65%',
  height: '60%',
  padding: '0px',
  textAlign: 'center',
}  

function CardStatistics(props){
  
  return (<View style={{backgroundColor: '#fff', width:150, height:70 }}>
            
            {/* <LinearGradient
              colors={[ props.color, '#FF5722']}
              style={{flex: 1, justifyContent:"center"}}
            > */}
              <h2>{props.name}</h2>
              <Text style={styles.text}>{props.value}</Text>
            {/* </LinearGradient> */}
          </View>)}

  

export default class HomePage extends Component {
  _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
          statistics: [],
          courses: [],
          detail_courses: [],
          course_name:"",
          currentDay: new Date(),
        };
      }

    onclick(hdhd) {
      console.log("nwenfdwjefnwjed")
      console.log(hdhd)
    }

componentDidUpdate(){
  console.log("")
}
componentWillUnmount() {
  this._isMounted = false;
}

async componentDidMount() {
  this._isMounted = true;

  const formData = new FormData();
  formData.append('time', this.state.currentDay);
  
  const agent = new https.Agent({  
    rejectUnauthorized: false,
    crossDomain: true
  });
  let options = {
          method:'POST',
          url:"http://niranjan-sia.herokuapp.com/api/v1/utility/main_dashboard",
          data:formData,
          httpsAgent: agent ,
          headers:{
            'Accept':'application/json', 
            'Content-Type': 'multipart/form-data',

          }
      }
      
      let response = await axios(options)
      // console.log(response)
      this.setState({ statistics:response.data.statistics,
                      courses:response.data.courses,
                      detail_courses:response.data.detail_courses,
                      
                    })
        setTimeout(
                      () => {this.setState({isLoading: true})},
                      20000
                    )
      setInterval(async () => {
    response = await axios(options)
  
      this.setState({ statistics:response.data.statistics,
                      courses:response.data.courses,
                      detail_courses:response.data.detail_courses,
                      isLoading: true
                    })
        }, 20000);
      };     
    render() {
        return (
          this.state.isLoading === true ? 
            <div style={{ background: '#ECECEC', padding: '15px' }}>

                <h1>Dashboard</h1>
            <Card  style={{ background: '#ECECEC'}} >
              
            {this.state.statistics.map((prop, key) => {
                  return (
                    <Card.Grid key={key} style={statisticsStyles}><CardStatistics name={prop.name} value={prop.value} color="#f9dce7" /></Card.Grid>
                  );
                })}
            </Card>



            <Card title="OverView"  style={{ background: '#ECECEC'}} >
            <Card.Grid style={gridBarChartFullStyle}><BigPiechart data={this.state.courses}/></Card.Grid>
            </Card>
              {this.state.detail_courses.map((prop, key) => {
                  return (
                    <Card key={key} title={prop.course} bordered={false} style={{ background: '#ECECEC'}} >
                     
                      <Card.Grid style={gridBarChartStyle}><BarChartDashboard data={prop.subjects} name={prop.course} 
                      link_screen={this.props.screen} /></Card.Grid>
                      <Card.Grid style={gridStyle}><PieChartDemo  data={prop.analysis} name={prop.course} link_screen={this.onclick} />
                      
                      </Card.Grid>
                    </Card>
                  );
                })}

            </div>
             :(<View style = {{marginTop:300}}>
              <Spin size="large" tip="Loading..."/>
              </View>)
        );
    }

}
