import React, {Component } from 'react';
import 'antd/dist/antd.css';
import './dashboard.css';
import { Layout, Menu } from 'antd';
import {  PieChartOutlined , FormOutlined} from '@ant-design/icons';
import {View} from "react-native";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

import TableDemo from "./table"
import HomePage from "./HomePage"
import CardSubjects from "./cardSubjects"
import HeaderBar from './HeaderBar';
import DetailQuestionAnswer from './DetailQuestionAnswer';
import CreateQuestionAnswer from './CreateQuestionAnswer';



//https://docs.expo.io/distribution/publishing-websites/

// const { SubMenu } = Menu;
const { Content,Footer, Sider } = Layout;

class Dashboard extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    // this.changeSelectedMenuItem = this.changeSelectedMenuItem.bind(this);
    this.state = {
      collapsed: false,
      selectedMenuItem:"Home",
      subject:"",
      course:"",
      login:false

    };
    
    // this.componentsSwtich = this.componentsSwtich.bind(this);
    this.screenSelectingSubject = this.screenSelectingSubject.bind(this);
    this.screenSelectingCourse = this.screenSelectingCourse.bind(this);
    this.subjectView = this.subjectView.bind(this);
    this.mainDashboard = this.mainDashboard.bind(this);
    
    // this.backToHome = this.backToHome.bind(this);

}


componentDidMount() {
  this._isMounted = true;
}

componentWillUnmount() {
  this._isMounted = false;
}

    
componentsSwtich = (key) => {
        // console.log(key)
        switch (key) {
          case 'Subject':
            return <View style={{backgroundColor:"#ECECEC"}}><TableDemo name={this.state.subject} screen={this.subjectView} course={this.state.course} /></View>;
            // break;
          case 'Home':
            return <View style={{backgroundColor:"#ECECEC"}}><HomePage screen={this.screenSelectingCourse} /></View>;
            // break;
          case 'Course':

            return <View style={{backgroundColor:"#ECECEC"}}><CardSubjects screen={this.screenSelectingSubject}  mainscreen={this.mainDashboard} course={this.state.course} /></View>;
              
            default:
            break;
         }
        };

subjectView= (chooseSubject) =>  {
  this.setState({
    selectedMenuItem:chooseSubject

  })
}

mainDashboard= (Home) =>  {
  console.log(Home)
  this.setState({
    selectedMenuItem:Home

  })
}

screenSelectingSubject = async (chooseSubject) => {
  
    
    await this.setState({
      subject:chooseSubject,
      selectedMenuItem:"Subject"

    })
        }
screenSelectingCourse = async (chooseCourse) => {
  
          await this.setState({
            course:chooseCourse,
            selectedMenuItem:"Course"
          })
              }                

  backToHome = () =>{
    this.setState({
      selectedMenuItem:"Home"
    })
  }
    render() {

      return (
        <Router>

        <Layout>
        <HeaderBar>
        </HeaderBar>
        <Layout >
          <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                  }}
          >
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={['Home']}
              defaultOpenKeys={['Home']}
              onClick={(e) => 
                this.setState({selectedMenuItem:e.key})}
            >
              
            {/* <Menu.Item key="Subject">Subject question list</Menu.Item> */}
            <Menu.Item key="Home" icon={<PieChartOutlined />}  >
               
              <Link to="/sia-publications/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="new" icon={<FormOutlined />}>
               
               <Link to="/sia-publications/create/question">Content Pannel</Link>
             </Menu.Item>
            {/* <Menu.Item key="Course">Course</Menu.Item> */}
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 ,backgroundColor: '#CCC'}}>
            <Content style={{ margin: '24px 16px 0' }}>
              <div className="site-layout-background" style={{ minHeight: 560 , minWidth: 460 }}>

              <Switch>
                <Route exact path="/sia-publications/dashboard">
                <div>
                    
                    {this.componentsSwtich(this.state.selectedMenuItem)}
                </div>
                </Route>
                <Route path="/sia-publications/detail/question/:id" component={DetailQuestionAnswer} />
                <Route path="/sia-publications/create/question" component={CreateQuestionAnswer} />
                  
                
                
              </Switch>

              </div>
            </Content>
          </Layout>
          </Layout>
          <Footer style={{ textAlign: 'center' }}> Designed by Niranjan Kumar GS</Footer>
          </Layout>  
          </Router>  
    );
    }   
}

export default Dashboard;