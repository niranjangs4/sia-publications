import React, { Component } from 'react';

import axios from 'axios';
import { Select,Input } from 'antd';
import {Text,View,Button} from 'react-native';
import CKEditor from "@ckeditor/ckeditor5-react";
// NOTE: Use the editor from source (not a build)!
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import { message } from 'antd';

import editorConfiguration from "../ckeditor"
// import HTML from 'react-native-render-html';
const { Option } = Select;
const { TextArea } = Input;
function handleChange(value) {
  console.log(`selected ${value}`);
}
class CreateQuestionAnswer extends Component {
 
  constructor() {
    super();
    this.state = {
        question:"",
        answer:"",
        status:"TODO",
        reference:"",
        course_id:"",
        created_at:new Date(),
        created_by:"1",
        keywords:"",
        subject_id:"",
        updated_at:new Date(),
        updated_by:"1",
        currentDay: new Date(),
        course_dropdown:[],
        subject_dropdown:[],
        

    };
    this.handleAuthorCreated = this.handleAuthorCreated.bind(this);
  }

  async handleAuthorCreated() {
    const formData = new FormData();
    
    formData.append('question', this.state.question);
    formData.append('answer', this.state.answer);
    // formData.append('status', this.state.status);
    formData.append('course_id', this.state.course_id);
    formData.append('reference', this.state.reference);
    // formData.append('created_at', this.state.currentDay);
    formData.append('created_by', this.state.created_by);
    // formData.append('keywords', this.state.keywords);
    formData.append('subject_id', this.state.subject_id);
    // formData.append('updated_at', this.state.currentDay);
    // formData.append('updated_by', this.state.updated_by);
    // formData.append('keywords', "dde");


    
    message.info('Successfuly created');
    let options = {
      method:'POST',
      data:formData,
      url:"http://niranjan-sia.herokuapp.com/api/v1/study/QuestionAnswerCreateAPIView/",
      headers:{
        'Accept':'application/json', 
        'Content-Type': 'multipart/form-data',
          }
      }
      console.log(this.state.question)
      console.log(this.state.answer)
      // console.log(this.state.status)
      console.log(this.state.course_id)
      console.log(this.state.subject_id)
      // console.log(this.state.created_at)
      // console.log(this.state.updated_at)
      // console.log(this.state.updated_by)
      console.log(this.state.created_by)
        let response = await axios(options).catch(error => { console.log(error)} )
        console.log(response)
  }

  async componentDidMount() {
    let options = {
      method:'GET',
      url:"http://niranjan-sia.herokuapp.com/api/v1/chairman/get_subjects_by_course/",
      headers:{
        'Accept':'application/json', 
      }
  }
  console.log(options)
  let response = await axios(options)
  console.log(response)
  await this.setState({ 
    course_dropdown:response.data.courses
                })
              };
  

async updateCourse(id){
this.setState({course_id:id})

let options = {
  method:'GET',
  url:`http://niranjan-sia.herokuapp.com/api/v1/chairman/get_subjects_by_course/?course=${id}`,
  headers:{
    'Accept':'application/json', 
  }
}
console.log(options)
let response = await axios(options)
console.log(response)
await this.setState({ 
  subject_dropdown:response.data.subjects
            })
          };





  render() {


    return (
      <div>
      <View style={{ justifyItems:"center"}}>
                <View style={{width:"90%", alignSelf:"center",justifyContent:"space-between", flexDirection:"row"}}>
                <Select
                  defaultValue="select"
                  style={{ width: 250 }}
                  // onChange={e => this.setState({status:e})}
                  onChange={e=>this.updateCourse(e)}
                >
                  <Option key="select" value="select">Choose Course</Option>
                  {this.state.course_dropdown.map((value,key) => {
                  return (<Option key={value.id} value={value.id}>{value.name}</Option>)
                  console.log(value.id)
                  console.log(value.name)
                })
                  }
                </Select>
                
                <Select
                  defaultValue="select"
                  style={{ width: 250 }}
                  // onChange={e => this.setState({status:e})}
                  onChange={e=>(this.setState({subject_id:e}))}
                >
                  <Option key="select" value="select">Choose Subject</Option>
                  {this.state.subject_dropdown.map((value,key) => {
                  return (<Option key={value.id} value={value.id}>{value.name}</Option>)

                })
                  }
                </Select>
                </View>
                <View style={{width:"90%", alignSelf:"center"}}>
                <Text style={{textAlign:"center"}} > Question
                </Text>
                <CKEditor
                  editor={ClassicEditor}
                  config={editorConfiguration}
                  data={this.state.question}
                  onInit={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const ques_data = editor.getData();
                    this.setState({question:ques_data})
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
                
                </View>
                <View style={{width:"90%", alignSelf:"center"}}>
                <Text style={{textAlign:"center"}}> Answer
                </Text>
                <CKEditor
                  editor={ClassicEditor}
                  config={editorConfiguration}
                  data={this.state.answer}
                  onInit={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const ans_data = editor.getData();
                    this.setState({answer:ans_data})
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
                
                </View>

                <View style={{width:"90%", alignSelf:"center"}}>
                  <Text style={{textAlign:"center"}}>Referance</Text>
                <TextArea placeholder="Referance area" autoSize onChange={e => this.setState({reference:e})}/>
                  <div style={{ margin: '5px 0' }} />   
                <Select
                  defaultValue={this.state.status }
                  style={{ width: 120 }}
                  // onChange={e => this.setState({status:e})}
                  onChange={e=>this.setState({status:e})}
                >
                   <Option value="REJECT">REJECT</Option>
                   <Option value="TODO">TODO</Option>
                   <Option value="APPROVED">APPROVED</Option>
                </Select>                             
                </View>
                
                <View style={{width:"20%",alignSelf:"center"}}>
                <Button  onPress={this.handleAuthorCreated} title="  Submit  " color="gray" accessibilityLabel="Tap on Me"/>
                </View>
              
                
        </View >

        </div>
    );
}
}

export default CreateQuestionAnswer;
