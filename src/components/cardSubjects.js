import React, { Component } from 'react'
import {View, Text,TouchableOpacity} from "react-native";
import { Card } from 'antd';
import PieChartDemo from "./piechart"
import styles from './HomePage.css';
import {RollbackOutlined } from "@ant-design/icons"
import BigPiechart from './bigPiechart'
import { Spin } from 'antd';
import axios from 'axios';
// import { LinearGradient } from 'expo-linear-gradient'
const gridStyle = {
    width: 250,
    height: 300,
    padding: '0px',
    textAlign: 'center',
  };

const statisticsStyles={
    width: '16.65%',
    height: '60%',
    padding: '0px',
    textAlign: 'center',
  }  

  const gridBarChartFullStyle = {
  width: '100%',
  height: '20%',
  padding: '0px',
  marginHorizontal:20,
  backgroundColor: '#fff'
    }; 
    
  function CardStatistics(props){
  
    return (<View style={{margin: 10, backgroundColor: '#fff', width:150, height:70 }}>
              
              {/* <LinearGradient
                colors={[ props.color, '#FF5722']}
                style={{flex: 1, justifyContent:"center"}}
              > */}
                <h2>{props.name}</h2>
                <Text style={styles.text}>{props.value}</Text>
              {/* </LinearGradient> */}
            </View>)}    
export default class CardSubjects extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      statistics: [],
      subjects: [], // it should be subjects make sure check
      detail_subjects: [],
      course_name:"Dashboard",
      sub:"",
    };
    
}


componentWillUnmount() {
  this._isMounted = false;
}
  async componentDidMount() {
    this._isMounted = true;
    // console.log(this.props.course)
    this.setState({
      course_name:this.props.course
    })
    const formData = new FormData();
    formData.append('course', this.props.course);
    let options = {
            method:'POST',
            url:"http://niranjan-sia.herokuapp.com/api/v1/utility/second_dashboard",
            data:formData,
            headers:{
              'Accept':'application/json', 
              'Content-Type': 'multipart/form-data',
            }
        }

        let response = await axios(options)
        this.setState({ statistics:response.data.statistics,
                        subjects:response.data.subjects,
                        detail_subjects:response.data.detail_subjects,
                        })
                        setTimeout(
                          () => {this.setState({isLoading: true})},
                          20000
                        )
setInterval(async () => {        
    response = await axios(options)
        this.setState({ statistics:response.data.statistics,
                        subjects:response.data.subjects,
                        detail_subjects:response.data.detail_subjects,
                        
                        isLoading: true})
                      }, 30000);
    
        };    
    render() {
        return (
          this.state.isLoading === true ? 
            <div style={{ background: '#ECECEC', padding: '15px' }}>
        <View style={{backgroundColor:"#ECECEC"}}>
          <TouchableOpacity style={{width:30, height:30, flex:1}} onPress={() => this.props.mainscreen("Home")}>
          <RollbackOutlined style={{fontSize:"30px"}}/>
          </TouchableOpacity>
        </View>
                <h1>{this.state.course_name}</h1>
            <Card  style={{ background: '#ECECEC'}} >
              
            {this.state.statistics.map((prop, key) => {
                  return (
                    <Card.Grid key={key} style={statisticsStyles}><CardStatistics name={prop.name} value={prop.value} color="#f9dce7" /></Card.Grid>
                  );
                })}
            </Card>

            <Card title="OverView"  style={{ background: '#ECECEC'}} >
            <Card.Grid style={gridBarChartFullStyle}><BigPiechart data={this.state.subjects}/></Card.Grid>
            </Card>

        <Card title="Subject Status"  style={{ background: '#ECECEC', flex:1}} >
            {/* <Card.Grid style={gridStyle}><PieChartDemo /></Card.Grid> */}
            {this.state.detail_subjects.map((prop, key) => {
                
                  return (
                    
                      
                      <Card.Grid key={key} style={gridStyle}><PieChartDemo data={prop.data} name={prop.name} link_screen={this.props.screen} subject={this.subjectView}/>
                      <TouchableOpacity onPress={() => this.props.screen(prop.name)} >
                      <Text numberOfLines={1} >{prop.name}</Text>
                      </TouchableOpacity>
                      </Card.Grid>
                    
                  );
                })}
        </Card>
        </div>
             :(<View style = {{marginTop:300}}>
              <Spin size="large" tip="Loading..."/>
              </View>)
        )
    }
}
