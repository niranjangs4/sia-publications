(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{194:function(e,t,n){var a=n(711);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(126)(a,r);a.locals&&(e.exports=a.locals)},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return Se}));var a=n(0),r=n.n(a),s=n(28),o=n(8),i=n(17),c=n.n(i),l=n(30),u=n.n(l),d=n(31),f=n.n(d),p=n(118),m=n.n(p),h=n(32),g=n.n(h),y=n(33),v=n.n(y),E=n(16),b=n.n(E),x=(n(252),n(419),n(95)),k=n(744),C=n(751),w=(n(65),n(749)),S=n(52),j=(n(363),n(385),n(41)),D=n(745),R=n(357),_=n(150),P=n(748),F=n(26);function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b()(e);if(t){var r=b()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}var I=["#0088FE","#00C49F","#FFBB28","#FF8042","#0088FE","#00C49F","#FFBB28","#FF8042","#0088FE","#00C49F","#FFBB28","#FF8042","#0088FE","#00C49F","#FFBB28","#FF8042"],M=Math.PI/180,L=function(e){var t=e.cx,n=e.cy,a=e.midAngle,s=e.innerRadius,o=e.outerRadius,i=e.percent,c=(e.index,s+.2*(o-s)),l=t+c*Math.cos(-a*M),u=n+c*Math.sin(-a*M);return r.a.createElement("text",{x:l,y:u,fill:"dark",textAnchor:l>t?"start":"end",dominantBaseline:"central"},(100*i).toFixed(0)+"%")},T=function(e){g()(n,e);var t=A(n);function n(){var e;return u()(this,n),(e=t.call(this)).state={isLoading:!1,data:[],name:""},e}return f()(n,[{key:"componentDidMount",value:function(){var e=this;return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:setInterval((function(){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e.state.data!==e.props.data&&e.setState({data:e.props.data,name:e.props.name,isLoading:!0});case 1:case"end":return t.stop()}}),null,null,null,Promise)}),3e3);case 1:case"end":return t.stop()}}),null,null,null,Promise)}},{key:"render",value:function(){return!0===this.state.isLoading?r.a.createElement(o.a,{style:{justifyContent:"center",alignItems:"center",margin:15,backgroundColor:"#fff"}},r.a.createElement(F.i,{aspect:4/1.66,width:"250%"},r.a.createElement(F.h,null,r.a.createElement(F.g,{data:this.state.data,innerRadius:"60%",outerRadius:"100%",fill:"#8884d8",dataKey:"value",label:L},r.a.createElement(F.e,{key:"1",value:this.state.data.reduce((function(e,t){return e+t.value}),0),position:"centerBottom",className:"label-top",fontSize:"27px"}),r.a.createElement(F.e,{key:"2",value:"Question's",position:"centerTop",className:"label"}),this.state.data.map((function(e,t){return r.a.createElement(F.d,{key:t,fill:I[t%I.length]})}))),r.a.createElement(F.j,null),r.a.createElement(F.f,{verticalAlign:"bottom"})))):r.a.createElement(o.a,{style:O.spinnerStyle},r.a.createElement(R.a,{size:"large",tip:"Loading..."}))}}]),n}(a.Component),O={spinnerStyle:{justifyContent:"center",alignItems:"center",margin:15,backgroundColor:"#fff",width:250,height:250}},z=T,V=(n(619),n(59)),H=n.n(V);function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b()(e);if(t){var r=b()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}var N={width:"25%",height:"25%",padding:"0px",margin:"20px"},U=_.a.Option;var G=function(e){g()(n,e);var t=B(n);function n(){var e;return u()(this,n),(e=t.call(this))._isMounted=!1,e.showModal=function(){e.setState({visible:!0})},e.handleOk=function(t){console.log(t),e.setState({visible:!1})},e.handleCancel=function(t){console.log(t),e.setState({visible:!1})},e.onDelete=function(){console.log(e.state.selectedCheck)},e.columns=[{title:"Question",dataIndex:"question",key:"question",render:function(e){return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})}},{title:"Occurrence",dataIndex:"count",key:"count",width:"10%",sorter:function(e,t){return e.count-t.count}},{title:"Status",dataIndex:"",width:"10%",key:"xx",render:function(e){return r.a.createElement(_.a,{labelInValue:!0,defaultValue:{key:e.status},style:{width:120},onChange:function(t){return function(e,t){var n,a;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return(n=new FormData).append("status",e.value),P.a.info("Changed Status to "+e.value),a={method:"PATCH",data:n,url:"http://niranjan-sia.herokuapp.com/api/v1/study/QuestionAnswerRetrieveUpdateAPIView/"+t,headers:{Accept:"application/json","Content-Type":"multipart/form-data"}},r.next=6,c.a.awrap(H()(a).catch((function(e){console.log(e)})));case 6:r.sent;case 7:case"end":return r.stop()}}),null,null,null,Promise)}(t,e.id)}},e.status?r.a.createElement(U,{value:"TODO"},"TODO"):"",e.status?r.a.createElement(U,{value:"APPROVED"},"APPROVED"):"",e.status?r.a.createElement(U,{value:"REJECT"},"REJECT"):"")}},{title:"Action",dataIndex:"",width:"10%",key:"x",render:function(e){return r.a.createElement(o.a,{style:{flex:1,flexDirection:"row",justifyContent:"center"}},r.a.createElement(S.a,{style:{width:30,height:30,flex:1},onPress:function(){return window.open("http://niranjan-sia.herokuapp.com/api/v1/study/QuestionAnswerRetrieveUpdateAPIView/"+e.id)}},e.status?r.a.createElement("a",null,"Edit"):r.a.createElement("a",null)),r.a.createElement("a",null,"  "),r.a.createElement(S.a,{style:{width:40,height:30,flex:1},onPress:function(){return window.open("http://niranjan-sia.herokuapp.com/api/v1/study/QuestionAnswerRetrieveUpdateAPIView/"+e.id)}},e.status?r.a.createElement("a",null,"View"):r.a.createElement("a",null)))}}],e.rowSelection={onChange:function(t,n){console.log("selectedRowKeys: "+t,"selectedRows: ",n),e.setState({selectedCheck:n})},onSelect:function(e,t,n){console.log(e,t,n)},onSelectAll:function(e,t,n){console.log(e,t,n)}},e.state={selectedCheck:[],isLoading:!1,tableData:[],statusData:[],origDuplicateData:[],subjectName:"",visible:!1},e}return f()(n,[{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidMount",value:function(){var e,t,n,a=this;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return this._isMounted=!0,this.state.subjectName!==this.props.name&&this.setState({subjectName:this.props.name,isLoading:!1}),(e=new FormData).append("subject",this.props.name),e.append("course",this.props.course),t={method:"POST",url:"http://niranjan-sia.herokuapp.com/api/v1/utility/count_duplicate_question/",data:e,headers:{Accept:"application/json","Content-Type":"multipart/form-data"}},r.next=8,c.a.awrap(H()(t));case 8:n=r.sent,this.setState({tableData:n.data.result.data,statusData:n.data.result.analysis.status,origDuplicateData:n.data.result.analysis.ori_dup}),setTimeout((function(){a.setState({isLoading:!0})}),2e4),setInterval((function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.awrap(H()(t));case 2:n=e.sent,a.setState({tableData:n.data.result.data,statusData:n.data.result.analysis.status,origDuplicateData:n.data.result.analysis.ori_dup,isLoading:!0});case 4:case"end":return e.stop()}}),null,null,null,Promise)}),3e4);case 12:case"end":return r.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){var e=this;return!0===this.state.isLoading?r.a.createElement(o.a,null,r.a.createElement(o.a,{style:{backgroundColor:"#CCC"}},r.a.createElement(S.a,{style:{width:30,height:30,flex:1},onPress:function(){return e.props.screen("Course")}},r.a.createElement(w.a,{style:{fontSize:"30px"}}))),r.a.createElement(o.a,{style:{flexDirection:"row",justifyContent:"space-between",backgroundColor:"#CCC"}},r.a.createElement(o.a,{style:N},r.a.createElement(j.a,{style:{textAlign:"center"}},"Status"),r.a.createElement(z,{data:this.state.statusData,link_screen:function(){return console.log("ok")}})),r.a.createElement(o.a,{style:{justifyContent:"center"}},r.a.createElement(j.a,{style:{fontSize:20}},this.state.subjectName)),r.a.createElement(o.a,{style:N},r.a.createElement(j.a,{style:{textAlign:"center"}},"Duplicates vs Original"),r.a.createElement(z,{data:this.state.origDuplicateData,link_screen:function(){return console.log("ok")}}))),r.a.createElement(o.a,{style:{backgroundColor:"#CCC"}}),r.a.createElement(j.a,null,r.a.createElement(D.a,{className:"table-layout",columns:this.columns,rowSelection:this.rowSelection,dataSource:this.state.tableData,bordered:!0,size:"small",rowClassName:function(e,t){return e.count>1?"red":"green"},sortDirections:["ascend","descend"]}),",")):r.a.createElement(o.a,{style:{marginTop:300}},r.a.createElement(R.a,{size:"large",tip:"Loading..."}))}}]),n}(a.Component),K=(s.a.create({centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},modalView:{margin:20,backgroundColor:"white",borderRadius:20,padding:35,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:3.84,elevation:5},openButton:{backgroundColor:"#F194FF",borderRadius:20,padding:10,elevation:2},textStyle:{color:"white",fontWeight:"bold",textAlign:"center"},modalText:{marginBottom:15,textAlign:"center"}}),G),W=n(194),Q=n.n(W);function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b()(e);if(t){var r=b()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}var J=function(e){g()(n,e);var t=q(n);function n(){var e;return u()(this,n),(e=t.call(this)).state={isLoading:!1,data:[],name:""},e}return f()(n,[{key:"onclick",value:function(e){console.log("nwenfdwjefnwjed"),console.log(e),console.log(this.props.link_screen)}},{key:"componentDidMount",value:function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.state.data!==this.props.data&&(this.setState({data:this.props.data,name:this.props.name,isLoading:!0}),console.log("Line"),console.log(this.props.name),console.log(this.state.name));case 1:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){var e=this;return r.a.createElement(S.a,{onPress:function(){return e.props.link_screen(e.state.name)}},r.a.createElement(o.a,{style:{margin:15,backgroundColor:"#fff"}},r.a.createElement(F.i,{aspect:4/1.27,width:"100%"},r.a.createElement(F.b,{data:this.state.data,margin:{top:10,right:40,left:0,bottom:0},barSize:10},r.a.createElement(F.k,{dataKey:"name",padding:{left:10,right:10}}),r.a.createElement(F.l,null),r.a.createElement(F.j,null),r.a.createElement(F.c,{strokeDasharray:"3 3"}),r.a.createElement(F.a,{dataKey:"value",fill:"#8884d8",background:{fill:"#eee"}})))))}}]),n}(a.PureComponent);J.jsfiddleUrl="https://jsfiddle.net/alidingling/q4eonc12/";var X=n(747);function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b()(e);if(t){var r=b()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}var Z=["#e6194b","#3cb44b","#ffe119","#4363d8","#f58231","#46f0f0","#f032e6","#bcf60c","#fabebe","#008080","#e6beff","#9a6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075","#808080","#000000"],$=function(e){g()(n,e);var t=Y(n);function n(){var e;return u()(this,n),(e=t.call(this)).state={isLoading:!1,data:[]},e}return f()(n,[{key:"componentDidMount",value:function(){var e=this;return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:setInterval((function(){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e.state.data!==e.props.data&&e.setState({data:e.props.data,isLoading:!0});case 1:case"end":return t.stop()}}),null,null,null,Promise)}),3e3);case 1:case"end":return t.stop()}}),null,null,null,Promise)}},{key:"render",value:function(){return!0===this.state.isLoading?r.a.createElement("div",null,r.a.createElement(F.i,{aspect:2,width:"100%"},r.a.createElement(F.h,null,r.a.createElement(F.g,{data:this.state.data,labelLine:!0,innerRadius:"40%",outerRadius:"100%",label:!0,fill:"#8884d8",dataKey:"value",isAnimationActive:!0},this.state.data.map((function(e,t){return r.a.createElement(F.d,{key:"cell-"+t,fill:Z[t%Z.length]})}))),r.a.createElement(F.j,null),r.a.createElement(F.f,{layout:"vertical",verticalAlign:"middle",align:"right"})))):r.a.createElement(o.a,{style:{marginTop:100}},r.a.createElement(R.a,{size:"large",tip:"Loading..."}))}}]),n}(a.Component),ee=(n(743),n(746)),te=n(379),ne=n.n(te);function ae(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b()(e);if(t){var r=b()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}var re={width:"25%",height:"25%",padding:"0px",textAlign:"center"},se={width:"75%",height:"30%",padding:"0px",textAlign:"center"},oe={width:"100%",height:"20%",padding:"0px",marginHorizontal:20,backgroundColor:"#fff"},ie={width:"16.65%",height:"60%",padding:"0px",textAlign:"center"};function ce(e){return r.a.createElement(o.a,{style:{backgroundColor:"#fff",width:150,height:70}},r.a.createElement(X.a,{colors:[e.color,"#FF5722"],style:{flex:1,justifyContent:"center"}},r.a.createElement("h2",null,e.name),r.a.createElement(j.a,{style:Q.a.text},e.value)))}var le=function(e){g()(n,e);var t=ae(n);function n(e){var a;return u()(this,n),(a=t.call(this,e))._isMounted=!1,a.state={isLoading:!1,statistics:[],courses:[],detail_courses:[],course_name:"",currentDay:new Date},a}return f()(n,[{key:"onclick",value:function(e){console.log("nwenfdwjefnwjed"),console.log(e)}},{key:"componentDidUpdate",value:function(){console.log("")}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidMount",value:function(){var e,t,n,a,r=this;return c.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return this._isMounted=!0,(e=new FormData).append("time",this.state.currentDay),t=new ne.a.Agent({rejectUnauthorized:!1,crossDomain:!0}),n={method:"POST",url:"http://niranjan-sia.herokuapp.com/api/v1/utility/main_dashboard",data:e,httpsAgent:t,headers:{Accept:"application/json","Content-Type":"multipart/form-data"}},s.next=7,c.a.awrap(H()(n));case 7:a=s.sent,this.setState({statistics:a.data.statistics,courses:a.data.courses,detail_courses:a.data.detail_courses}),setTimeout((function(){r.setState({isLoading:!0})}),2e4),setInterval((function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.awrap(H()(n));case 2:a=e.sent,r.setState({statistics:a.data.statistics,courses:a.data.courses,detail_courses:a.data.detail_courses,isLoading:!0});case 4:case"end":return e.stop()}}),null,null,null,Promise)}),2e4);case 11:case"end":return s.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){var e=this;return!0===this.state.isLoading?r.a.createElement("div",{style:{background:"#ECECEC",padding:"15px"}},r.a.createElement("h1",null,"Dashboard"),r.a.createElement(ee.a,{style:{background:"#ECECEC"}},this.state.statistics.map((function(e,t){return r.a.createElement(ee.a.Grid,{key:t,style:ie},r.a.createElement(ce,{name:e.name,value:e.value,color:"#f9dce7"}))}))),r.a.createElement(ee.a,{title:"OverView",style:{background:"#ECECEC"}},r.a.createElement(ee.a.Grid,{style:oe},r.a.createElement($,{data:this.state.courses}))),this.state.detail_courses.map((function(t,n){return r.a.createElement(ee.a,{key:n,title:t.course,bordered:!1,style:{background:"#ECECEC"}},r.a.createElement(ee.a.Grid,{style:se},r.a.createElement(J,{data:t.subjects,name:t.course,link_screen:e.props.screen})),r.a.createElement(ee.a.Grid,{style:re},r.a.createElement(z,{data:t.analysis,name:t.course,link_screen:e.onclick})))}))):r.a.createElement(o.a,{style:{marginTop:300}},r.a.createElement(R.a,{size:"large",tip:"Loading..."}))}}]),n}(a.Component);function ue(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b()(e);if(t){var r=b()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}var de={width:250,height:300,padding:"0px",textAlign:"center"},fe={width:"16.65%",height:"60%",padding:"0px",textAlign:"center"},pe={width:"100%",height:"20%",padding:"0px",marginHorizontal:20,backgroundColor:"#fff"};function me(e){return r.a.createElement(o.a,{style:{margin:10,backgroundColor:"#fff",width:150,height:70}},r.a.createElement(X.a,{colors:[e.color,"#FF5722"],style:{flex:1,justifyContent:"center"}},r.a.createElement("h2",null,e.name),r.a.createElement(j.a,{style:Q.a.text},e.value)))}var he=function(e){g()(n,e);var t=ue(n);function n(e){var a;return u()(this,n),(a=t.call(this,e))._isMounted=!1,a.state={isLoading:!1,statistics:[],subjects:[],detail_subjects:[],course_name:"Dashboard",sub:""},a}return f()(n,[{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidMount",value:function(){var e,t,n,a=this;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return this._isMounted=!0,this.setState({course_name:this.props.course}),(e=new FormData).append("course",this.props.course),t={method:"POST",url:"http://niranjan-sia.herokuapp.com/api/v1/utility/second_dashboard",data:e,headers:{Accept:"application/json","Content-Type":"multipart/form-data"}},r.next=7,c.a.awrap(H()(t));case 7:n=r.sent,this.setState({statistics:n.data.statistics,subjects:n.data.subjects,detail_subjects:n.data.detail_subjects}),setTimeout((function(){a.setState({isLoading:!0})}),2e4),setInterval((function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.awrap(H()(t));case 2:n=e.sent,a.setState({statistics:n.data.statistics,subjects:n.data.subjects,detail_subjects:n.data.detail_subjects,isLoading:!0});case 4:case"end":return e.stop()}}),null,null,null,Promise)}),3e4);case 11:case"end":return r.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){var e=this;return!0===this.state.isLoading?r.a.createElement("div",{style:{background:"#ECECEC",padding:"15px"}},r.a.createElement(o.a,{style:{backgroundColor:"#ECECEC"}},r.a.createElement(S.a,{style:{width:30,height:30,flex:1},onPress:function(){return e.props.mainscreen("Home")}},r.a.createElement(w.a,{style:{fontSize:"30px"}}))),r.a.createElement("h1",null,this.state.course_name),r.a.createElement(ee.a,{style:{background:"#ECECEC"}},this.state.statistics.map((function(e,t){return r.a.createElement(ee.a.Grid,{key:t,style:fe},r.a.createElement(me,{name:e.name,value:e.value,color:"#f9dce7"}))}))),r.a.createElement(ee.a,{title:"OverView",style:{background:"#ECECEC"}},r.a.createElement(ee.a.Grid,{style:pe},r.a.createElement($,{data:this.state.subjects}))),r.a.createElement(ee.a,{title:"Subject Status",style:{background:"#ECECEC",flex:1}},this.state.detail_subjects.map((function(t,n){return r.a.createElement(ee.a.Grid,{key:n,style:de},r.a.createElement(z,{data:t.data,name:t.name,link_screen:e.props.screen,subject:e.subjectView}),r.a.createElement(S.a,{onPress:function(){return e.props.screen(t.name)}},r.a.createElement(j.a,{numberOfLines:1},t.name)))})))):r.a.createElement(o.a,{style:{marginTop:300}},r.a.createElement(R.a,{size:"large",tip:"Loading..."}))}}]),n}(a.Component),ge=n(750);n(733);function ye(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b()(e);if(t){var r=b()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}var ve=k.a.Header,Ee=function(e){g()(n,e);var t=ye(n);function n(){var e;u()(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return f()(n,[{key:"render",value:function(){return r.a.createElement(ve,{style:{position:"sticky",zIndex:1,width:"100%",top:0}},r.a.createElement(ge.a,null),r.a.createElement("span",{style:{marginLeft:8}},"My Project"))}}]),n}(a.Component);function be(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b()(e);if(t){var r=b()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}x.a.SubMenu,k.a.Header;var xe=k.a.Content,ke=k.a.Footer,Ce=k.a.Sider,we=function(e){g()(n,e);var t=be(n);function n(e){var a;return u()(this,n),(a=t.call(this,e))._isMounted=!1,a.componentsSwtich=function(e){switch(e){case"Subject":return r.a.createElement(o.a,{style:{backgroundColor:"#ECECEC"}},r.a.createElement(K,{name:a.state.subject,screen:a.subjectView,course:a.state.course}));case"Home":return r.a.createElement(o.a,{style:{backgroundColor:"#ECECEC"}},r.a.createElement(le,{screen:a.screenSelectingCourse}));case"Course":return r.a.createElement(o.a,{style:{backgroundColor:"#ECECEC"}},r.a.createElement(he,{screen:a.screenSelectingSubject,mainscreen:a.mainDashboard,course:a.state.course}))}},a.subjectView=function(e){a.setState({selectedMenuItem:e})},a.mainDashboard=function(e){a.setState({selectedMenuItem:e})},a.screenSelectingSubject=function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(a.setState({subject:e,selectedMenuItem:"Subject"}));case 2:case"end":return t.stop()}}),null,null,null,Promise)},a.screenSelectingCourse=function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(a.setState({course:e,selectedMenuItem:"Course"}));case 2:case"end":return t.stop()}}),null,null,null,Promise)},a.backToHome=function(){a.setState({selectedMenuItem:"Home"})},a.state={collapsed:!1,selectedMenuItem:"Home",subject:"",course:"",login:!1},a.screenSelectingSubject=a.screenSelectingSubject.bind(m()(a)),a.screenSelectingCourse=a.screenSelectingCourse.bind(m()(a)),a.subjectView=a.subjectView.bind(m()(a)),a.mainDashboard=a.mainDashboard.bind(m()(a)),a}return f()(n,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return r.a.createElement(k.a,null,r.a.createElement(Ee,null),r.a.createElement(k.a,null,r.a.createElement(Ce,{style:{overflow:"auto",height:"100vh",position:"fixed",left:0}},r.a.createElement(x.a,{mode:"inline",theme:"dark",defaultSelectedKeys:["Home"],defaultOpenKeys:["Home"],onClick:function(t){return e.setState({selectedMenuItem:t.key})}},r.a.createElement(x.a.Item,{key:"Home",icon:r.a.createElement(C.a,null)},"Dashboard "))),r.a.createElement(k.a,{className:"site-layout",style:{marginLeft:200,backgroundColor:"#CCC"}},r.a.createElement(xe,{style:{margin:"24px 16px 0"}},r.a.createElement("div",{className:"site-layout-background",style:{minHeight:560,minWidth:460}},r.a.createElement("div",null,this.componentsSwtich(this.state.selectedMenuItem)))))),r.a.createElement(ke,{style:{textAlign:"center"}}," Designed by Niranjan Kumar GS"))}}]),n}(a.Component);function Se(){return r.a.createElement(o.a,null,r.a.createElement(we,null))}s.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},411:function(e,t,n){n(412),n(413),e.exports=n(735)},412:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sia-publications/expo-service-worker.js",{scope:"/sia-publications/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},419:function(e,t,n){var a=n(420);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(126)(a,r);a.locals&&(e.exports=a.locals)},420:function(e,t,n){(e.exports=n(125)(!1)).push([e.i,'.logo {\r\n    width: 120px;\r\n    height: 31px;\r\n    background: rgba(255, 255, 255, 0.2);\r\n    margin: 16px 28px 16px 0;\r\n    float: left;\r\n  }\r\n  \r\n  .site-layout .site-layout-background {\r\n    background: #ECECEC;\r\n  }\r\n\r\n  .site-layout-background {\r\n    background: #fff;\r\n  }\r\n    [data-theme="dark"] .site-layout .site-layout-background {\r\n      background: #141414;\r\n    }\r\n\r\n',""])},619:function(e,t,n){var a=n(620);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(126)(a,r);a.locals&&(e.exports=a.locals)},620:function(e,t,n){(e.exports=n(125)(!1)).push([e.i,'.red{\r\n    color: red; \r\n  }\r\n  .green {\r\n     color :green; \r\n  }\r\n\r\n  .ant-table-thead>tr.ant-table-row-hover:not(.ant-table-expanded-row)>td, \r\n  .ant-table-tbody>tr.ant-table-row-hover:not(.ant-table-expanded-row)>td, \r\n  .ant-table-thead>tr:hover:not(.ant-table-expanded-row)>td, \r\n  .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td {\r\n      background: lightblue\r\n  }\r\n\r\n \r\ntable {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\ntd, th {\r\n    border: 1px solid #1a060669;\r\n}\r\n\r\n#myTable tbody > tr:last-child > td {\r\n  border: 0;\r\n}\r\n\r\nthead[class*="ant-table-thead"] th{\r\n    background-color: rgba(0, 225, 255, 0.315) !important;\r\n  }',""])},711:function(e,t,n){(e.exports=n(125)(!1)).push([e.i,".titleCard {\r\n    padding-left: 12px;\r\n    padding-right: 12px;\r\n    margin-bottom: 24px;\r\n}\r\n\r\n.tileRow {\r\n    margin-left: -12px;\r\n    margin-right: -12px;\r\n}\r\n\r\n.gutter-box {\r\n    padding: 8px 0;\r\n    background: #00a0e9;\r\n  }\r\n\r\n  [class~='ant-col'] {\r\n    background: transparent;\r\n    border: 0;\r\n  }\r\n\r\n  pre {\r\n    padding: 8px 16px;\r\n    font-size: 13px;\r\n    background: #f9f9f9;\r\n    border-radius: 6px;\r\n  }\r\n  pre.demo-code {\r\n    direction: ltr;\r\n  }\r\n  [data-theme=\"dark\"] [class~='ant-col'] > div {\r\n    background: #028ac8;\r\n  }\r\n\r\n  div.ant-progress-circle,\r\n  div.ant-progress-line {\r\n    margin-right: 8px;\r\n    margin-bottom: 8px;\r\n  }\r\n  [class*='-col-rtl'] div.ant-progress-circle,\r\n  [class*='-col-rtl'] div.ant-progress-line {\r\n    margin-right: 0;\r\n    margin-left: 8px;\r\n  }\r\n",""])},716:function(e,t){},718:function(e,t){},733:function(e,t,n){var a=n(734);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(126)(a,r);a.locals&&(e.exports=a.locals)},734:function(e,t,n){(e.exports=n(125)(!1)).push([e.i,".bar {\r\n    background-color: #fff;\r\n    padding-left: 16px;\r\n    font-size: 18px;\r\n}",""])}},[[411,1,2]]]);
//# sourceMappingURL=app.57c59341.chunk.js.map