import React, { Component } from 'react';  
import axios from 'axios';
import { Redirect,BrowserRouter as Router} from 'react-router-dom';  
class BlogList extends Component {  
  constructor(props){
    super(props)
    const token = localStorage.getItem("token")
    const tokens = localStorage.getItem("tokens")
    const tokenr = localStorage.getItem("tokenr")
    const tokenl = localStorage.getItem("tokenl")
    const tokend = localStorage.getItem("tokend")
    const tokenss = localStorage.getItem("tokenss")
    const tokendd = localStorage.getItem("tokendd")
    let loggedIn = true
    let ul=false
    let ud=false
    let bl=false
    let bd=false
    let ss=false  
    let dd=false  
    if(token===null){
        loggedIn = true   
    }
    if(tokens===null){
        ul=false
    }
    if(tokenr===null){
        ud=false   
    }
    if(tokenl===null){
        bl=false
    }
    if(tokend===null){
        bd=false   
    }
    if(tokenss===null){
        ss=false   
    }
    if(tokendd===null){
        dd=false   
    }
    this.state={
        ul:false,
        bl:false,
        bd:false,
        ud:false,
        ss:false,
        dd:false,
        persons: [],
        isLoggedIn:true
    }
    this.BL = this.BL.bind(this)
    this.BD = this.BD.bind(this)
    this.UD = this.UD.bind(this)
    this.UL = this.UL.bind(this)
    this.DD = this.DD.bind(this)
    this.SS = this.SS.bind(this)
    this.Register = this.Register.bind(this)
}  
Register(e){

    e.preventDefault()
   
   {
        localStorage.setItem("token","abc")
        this.setState({
            isLoggedIn:false
        })
    }
   
}
componentDidMount() {
  axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
}
UL(e){
  e.preventDefault()
 {
      localStorage.setItem("tokens","abc")
      this.setState({
          ul:true
      })
  } 
}
UD(e){
  e.preventDefault()
 {
      localStorage.setItem("tokenr","abc")
      this.setState({
          ud:true
      })
  } 
}
BL(e){
  e.preventDefault()
 {
      localStorage.setItem("tokenl","abc")
      this.setState({
          bl:true
      })
  } 
}
BD(e){
  e.preventDefault()
 {
      localStorage.setItem("tokend","abc")
      this.setState({
          bd:true
      })
  } 
}
SS(e){
  e.preventDefault()
 {
      localStorage.setItem("tokenss","abc")
      this.setState({
          ss:true
      })
  } 
}
DD(e){
  e.preventDefault()
 {
      localStorage.setItem("tokenss","abc")
      this.setState({
          dd:true
      })
  } 
}
render() {  
  if(this.state.isLoggedIn===false){
    return <Redirect to="/Login"/>
}
if(this.state.ul===true){
     return <Redirect to="UserList"/>
}
if(this.state.ud===true){
    return <Redirect to="UserDetails"/>
}
if(this.state.bl===true){
return <Redirect to="BlogList"/>
}
if(this.state.bd===true){
    return <Redirect to="BlogDetails"/>
}
if(this.state.ss===true){
return <Redirect to="Settings"/>
}
if(this.state.dd===true){
    return <Redirect to="Dashboard1"/>
 }

          const   mystyle3={
          listStyleType: "none",
          margin: "none",
          padding:  "5px"
          };

          const   mystyle4={
          borderTop:"2px solid white",
          margin: "0 auto",
          padding: "2%"
          };

          const   mystyle5={
          margin: "0 auto",
          padding: "2%"
          };

          const mystyle1 = {
          display: "inline-block",
          border: "1px solid black",
          overflow: "hidden",
          width: "100%",
          minHeight:"100%",
          padding: "none",
          background:" linear-gradient(to bottom, black 20%, blue 50%, black 80%)"
          };

          const ss={
          border:"1px solid black",
          background:" radial-gradient(circle, pink,lightblue, black)"
          };

    return (  
                     
    <div className="full-container" style={ss}>
    <Router>
        <div className="sidebar">
            <div  style={mystyle1}>
                                <ol style={mystyle3} >        
                                <li style={mystyle5} >    
                                <button onClick={this.DD} class="ButtonStyle2"><i  style={{"margin-right":"7px"}} class="fa fa-fw fa-home"></i>Dashboard</button>   
                                </li>    
                                <li  style={mystyle4} >    
                                <button  onClick={this.UL} class="ButtonStyle2"><i style={{"margin-right":"10px"}} class="fa fa-address-book-o"></i>User List</button>   
                                </li>
                                <li style={mystyle4} >    
                                <button onClick={this.UD} class="ButtonStyle2"><i style={{"margin-right":"10px"}} class="fa fa-address-card-o"></i>User Details</button> 
                                </li>
                                <li style={mystyle4} >    
                                <button  class="ButtonStyle2"><i style={{"margin-right":"10px"}} class="fa fa-th-list"></i>Blog List</button>  
                                </li>
                                <li style={mystyle4} >    
                                <button onClick={this.BD} class="ButtonStyle2"><i style={{"margin-right":"10px"}} class="fa fa-th-large"></i>Blog Details</button> 
                                </li>
                                <li style={mystyle4}>    
                                <button onClick={this.SS} class="ButtonStyle2"><i style={{"margin-right":"10px"}} class="fa fa-cog fa-spin"></i>Settings</button> 
                                </li >
                                <li  style={mystyle4}>    
                                <button onClick={this.Register}  class="ButtonStyle2"><i style={{"margin-right":"10px"}}  class="fa fa-street-view"></i>Logout</button> 
                                </li>
                                </ol> 
            </div>
        </div>  
   
          <div style={{ "width": "80%" , "margin":"none", "marginBottom":"40px"}} >
                        <h1 style={{ "text-shadow": "2px 2px 4px #000000"}}> <center>Blog List</center></h1>
                        
                      
      <table  class="table table-striped" style={{ "width": "90%" , "marginLeft":"3%"}}>
      <thead>
    <tr style={{ "width": "100%" }}>
      <th style={{ "width": "10%" }} >ID</th>
      <th style={{ "width": "20%" }} >Name</th>
      <th style={{ "width": "20%"  }}>Email</th>
      <th style={{ "width": "20%" }} >Mobile</th>
      <th style={{ "width": "20%" }}>Website</th>
    </tr>
    </thead>
    <tbody >
  
    { this.state.persons.map(person => (
    <tr >
         <td style={{ "width": "10%" }} key={person.id}>
         <center> {person.id}</center>
         </td>
        <td style={{ "width": "20%"}} key={person.id}>
        <center>{person.name} </center>
        </td>
        <td style={{ "width": "20%" }} key={person.id}>
        <center>{person.email}</center>
        </td>
        <td style={{ "width": "20%" }} key={person.id}>
        <center>{person.phone}</center>
        </td>
        <td style={{ "width": "20%" }} key={person.id}>
        <center>{person.website}</center>
        </td>
      </tr>
      ))}
      </tbody>
      </table>
      </div>
        
      </Router>
      </div>
    );  
  }  
}  
  
export default BlogList; 