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
class DetailQuestionAnswer extends Component {
 
  constructor() {
    super();
    this.state = {
        question:"",
        answer:"",
        id:"",
        status:"TODO",
        reference:"",
        course_id:"",
        created_at:"",
        created_by:"",
        keywords:"",
        subject_id:"",
        updated_at:"",
        updated_by:1,
        currentDay: new Date(),
        

    };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
  }

  async handleAuthorChange() {
    const formData = new FormData();
    
    formData.append('question', this.state.question);
    formData.append('answer', this.state.answer);
    formData.append('id', this.state.id);
    formData.append('status', this.state.status);
    formData.append('course_id', this.state.course_id);
    formData.append('reference', this.state.reference);
    formData.append('created_at', this.state.created_at);
    formData.append('created_by', this.state.created_by);
    formData.append('keywords', this.state.keywords);
    formData.append('subject_id', this.state.subject_id);
    formData.append('updated_at', this.state.currentDay);
    formData.append('updated_by', this.state.updated_by);


    
    message.info('Updated Status');
    let options = {
      method:'PUT',
      data:formData,
      url:`http://niranjan-sia.herokuapp.com/api/v1/study/QuestionAnswerRetrieveUpdateAPIView/${this.props.match.params.id}/`,
      headers:{
        'Accept':'application/json', 
        'Content-Type': 'multipart/form-data',
          }
      }
        let response = await axios(options).catch(error => { console.log(error)} )
        console.log(response)
  }
async componentDidMount() {
  if (this.props.match.params.id !== ""){

  
    let options = {
            method:'GET',
            url:`http://niranjan-sia.herokuapp.com/api/v1/study/QuestionAnswerRetrieveUpdateAPIView/${this.props.match.params.id}/`,
            headers:{
              'Accept':'application/json', 
            }
        }
        console.log(options)
        let response = await axios(options)
        console.log(response)
        await this.setState({ question:response.data.question,
                        answer:response.data.answer,
                        id:response.data.id,
                        status:response.data.status,
                        reference:response.data.reference,   
                        course_id:response.data.course_id,
                        created_at:response.data.created_at,
                        created_by:response.data.created_by,
                        keywords:response.data.keywords,
                        subject_id:response.data.subject_id,
                        updated_at:response.data.updated_at,
                        updated_by:1,
                        currentDay: new Date(),
                        

                      })
                      console.log(this.state.updated_at)
                      console.log(this.state.currentDay)
          }; 
        }
          


  render() {


    return (
      <div>
      <View>
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
                  <View style={{width:"90%"}}>                               
                </View>
                
 
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
                <Button  onPress={this.handleAuthorChange} title="  Submit  " color="gray" accessibilityLabel="Tap on Me"/>
                </View>
              
                
        </View >

        </div>
    );
}
}

export default DetailQuestionAnswer;
