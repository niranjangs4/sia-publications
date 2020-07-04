import {RollbackOutlined } from "@ant-design/icons"
import React, { Component} from 'react'
//import Popover from 'react-native-popover-view';
import {TouchableOpacity, 
  StyleSheet,
  Text,
  View  } from "react-native";
import 'antd/dist/antd.css';
// import {CSVLink, CSVDownload} from 'react-csv';
import { Table,Spin } from 'antd';

// import Popover from 'react-native-popover-view';
import { Select } from 'antd';

import { message } from 'antd';
import PieChartDemo from "./piechart"
import "./table.css";
import axios from 'axios';
const gridStyle = {
  width: '25%',
  height: '25%',
  padding: '0px',
  margin: '20px',
};

const { Option } = Select;
   

async function handleChange(e,id) {
  const formData = new FormData();
  
  formData.append('status', e.value);
  
  message.info('Changed Status to '+e.value);
  let options = {
    method:'PATCH',
    data:formData,
    url:"http://niranjan-sia.herokuapp.com/api/v1/study/QuestionAnswerRetrieveUpdateAPIView/"+id,  
    headers:{
      'Accept':'application/json', 
      'Content-Type': 'multipart/form-data',
        }
    }
      let response = await axios(options).catch(error => { console.log(error)} )
      console.log(response)
}


class TableDemo extends Component {
  _isMounted = false;
    
    constructor() {
        super();
        this.state = {
          selectedCheck: [],
          isLoading:false,
          tableData:[],
          statusData:[],
          origDuplicateData:[],
          subjectName:"",
          visible:false
        };
      
      }



      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
componentWillUnmount() {
  this._isMounted = false;
}
    
async componentDidMount() {
  this._isMounted = true;
  if (this.state.subjectName !== this.props.name){
    this.setState({
      
      subjectName:this.props.name,
      isLoading: false,
    })
  }
  const formData = new FormData();
  
  formData.append('subject', this.props.name);
  formData.append('course', this.props.course);
  
    
    let options = {
            method:'POST',
            url:"http://niranjan-sia.herokuapp.com/api/v1/utility/count_duplicate_question/",
            data:formData,
            headers:{
              'Accept':'application/json', 
              'Content-Type': 'multipart/form-data',
            }
    }
    let response = await axios(options)
    this.setState({ tableData:response.data.result.data,
                    statusData:response.data.result.analysis.status,
                    origDuplicateData:response.data.result.analysis.ori_dup,
                    
                  })

    setTimeout( () => {this.setState({isLoading: true})},
                    20000
                  )

    setInterval(async () => {           
    response = await axios(options)
    this.setState({ tableData:response.data.result.data,
                    statusData:response.data.result.analysis.status,
                    origDuplicateData:response.data.result.analysis.ori_dup,
                    isLoading: true
                  })
}, 30000);
    };      



    onDelete = () => {
      console.log(this.state.selectedCheck)
      // onClick={()=> window.open("http://niranjan-sia.herokuapp.com/api/v1/study/QuestionAnswerListAPIView/")}
    }
  



columns = [
    {
      title: 'Question',
      dataIndex: 'question',
      key: 'question',
      render: function(html) { return<div dangerouslySetInnerHTML={{__html: html}} />},
      
    },
    {
      title: 'Occurrence',
      dataIndex: 'count',
      key: 'count',
      width: '10%',
      sorter: (a, b) => a.count - b.count,

    },
    {
      title: 'Status',
      dataIndex: '',
      width: '10%',
      key: "xx",
      render: (records) => (
        <Select
          labelInValue
          defaultValue={{ key: records.status }}
          style={{ width: 120 }}
          onChange={e => handleChange(e,records.id)}
        >
          {records.status ? <Option value="TODO">TODO</Option>:""}
          {records.status ? <Option value="APPROVED">APPROVED</Option>:""}
          {records.status ? <Option value="REJECT">REJECT</Option>:""}
        </Select>
      
      ),
    },
    {
        title: 'Action',
        dataIndex: '',
        width: '10%',
        key: 'x',
        render: (record) => (
          <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}>
                     
          <TouchableOpacity style={{width:40, height:30, flex:1}} 
          onPress={()=> window.open("https://niranjangs4.github.io/sia-publications/detail/question/"+record.id)}>

          {record.status ? <a
          >View & Edit</a> : <a></a>}
          </TouchableOpacity>
        </View>
        ),
      }
  ];


  
  // rowSelection objects indicates the need for row selection
  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.setState({selectedCheck:selectedRows})
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  
    render() {
      
// eslint-disable-next-line
        function onChange(pagination, filters, sorter, extra) {
            console.log('params', pagination, filters, sorter, extra);
          }
          
        return (
            this.state.isLoading === true ? 
      <View  > 
        <View style={{backgroundColor:"#CCC"}}>
          <TouchableOpacity style={{width:30, height:30, flex:1}} onPress={() => this.props.screen("Course")}>
          <RollbackOutlined style={{fontSize:"30px"}}/>
          </TouchableOpacity>
        </View>
      

      <View style={{flexDirection:"row", justifyContent:'space-between',backgroundColor: '#CCC', }}>
      
        <View style={gridStyle}>
          
        <Text style={{textAlign:'center'}}>Status</Text>
        <PieChartDemo data={this.state.statusData} link_screen={() => console.log("ok")}/>
        </View>
        <View style={{justifyContent:'center'}}>
        <Text style={{fontSize:20}}>
          {this.state.subjectName}
        </Text>
        </View>
        
        <View  style={gridStyle}>
        <Text style={{textAlign:'center'}}>Duplicates vs Original</Text>
        <PieChartDemo data={this.state.origDuplicateData} link_screen={() => console.log("ok")}/>

        </View>
       
        
        
      </View>            
      <View style={{backgroundColor:"#CCC"}}>
      {/* <TouchableOpacity style={{width:30, height:30, flex:1}} onClick={() => this.onDelete()}>
          <DeleteOutlined style={{fontSize:"30px"}}/>
      </TouchableOpacity> */}
      </View>
                <Text>
                {/* <CSVLink
                data={ this.state.selectedCheck }
                filename={"my-file.csv"}
                className="btn btn-primary"
                target="_blank"
                asyncOnClick={true}

                >
                Export   
                </CSVLink> */}
                
                {/* <CSVLink
                data={ this.data }
                filename={"my-file.csv"}
                className="btn btn-primary"
                target="_blank"
                asyncOnClick={true}

                >
                Export All
                </CSVLink> */}
                
                <Table 
                className="table-layout"
                columns={this.columns} 
                rowSelection={this.rowSelection} 
                dataSource={this.state.tableData}
                bordered={true}
                size={"small"}
                // loading={this.state.isLoading}
                rowClassName={(record, index) => (record.count > 1 ? "red" : "green")}
                // loading={true}
                sortDirections={['ascend', 'descend']}
                // showSorterTooltip
                // onChange={onChange} 
                 />,

                </Text>

                
            </View>
            :(<View style = {{marginTop:300}}>
                <Spin size="large" tip="Loading..."/>
                </View>)
        )
    }
}

// eslint-disable-next-line
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default TableDemo;